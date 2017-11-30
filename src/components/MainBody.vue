<template>
  <div>
    <header>
      <h1>Animated Discord Logo</h1>
      <p>This project was inspired by <a href="https://canary.discordapp.com/assets/0bdc0497eb3a19e66f2b1e3d5741634c.webm">Discord's loading logo.</a></p>
      <p>Since the loading logo is a video you have less control over its behavior. This project recreates the animated logo in <b>S</b>caleable <b>V</b>ector <b>G</b>raphics. By using <b>SVG</b>, all edges are clean and sharp. You can have any size and color. It consumes less resources compared to a video. Original SVG and color palette were retrieved from <a href="https://discordapp.com/branding">Discord</a>.</p>
      <p>If you need help, feel free joining <a href="https://discord.gg/gDHs8AV">my server</a>. Below is a code generator:</p>
    </header>
    <section>
      <div class="left">
        <vueSlider :reverse="true" direction="vertical" :width="4" :height="482" v-model="size" :min="18" :max="250"/>
        <div class="stack">
          <div>
            <toggle-button class="button" :color="{checked: '#76DA72', unchecked: '#DA7272'}" :disabled="previewDiscordType != 'corner'" v-model="isLeft" :labels="{checked: 'left', unchecked: 'right'}" :width="100"/>
            <toggle-button class="button" :color="{checked: '#7289DA', unchecked: '#D4DA72'}" :disabled="previewDiscordType != 'corner'" v-model="isTop" :labels="{checked: 'top', unchecked: 'bottom'}" :width="100"/>
            <toggle-button class="button" :color="{checked: '#2BA027', unchecked: '#B9B6B6'}" v-model="isClickable" :sync="true" :disabled="true" :labels="{checked: 'clickable link', unchecked: 'no link'}" :width="100"/>
            <input :size="30" v-model="customLink" class="text" placeholder="insert link (e.g. discord invite link)"/>
          </div>
          <div ref="preview" class="preview">
            <DiscordSwirl v-if="previewDiscordType == 'standard'" :customLink="customLink" class="previewbox" :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
            <DiscordCorner v-else :customLink="customLink" :style="getStyle" class="previewbox" :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
          </div>
        </div>
      </div>
      <div class="color-picker">
        <chrome-picker v-model="colors.discordcolor"/>
        <chrome-picker v-model="colors.discordfill"/>
      </div>
      <textarea v-model="previewCode"/>
    </section>
    <footer>
      <p>This project is neither build nor endorsed by Discord.</p>
    </footer>
  </div>
</template>

<script>
import DiscordSwirl from '../components/DiscordSwirl.vue'
import DiscordCorner from '../components/DiscordCorner.vue'
import vueSlider from 'vue-slider-component'
import DiscordText from '../components/DiscordText.vue'
import { Chrome } from 'vue-color'

export default {
  name: 'MainBody',
  components: {
    DiscordSwirl,
    DiscordCorner,
    vueSlider,
    'chrome-picker': Chrome
  },
  data () {
    return {
      previewCode: "",
      size: 100,
      isLeft: true,
      isTop: true,
      rotation: "",

      colors: {
        discordcolor: {
					hex: '#FFFFFF',
					hsl: {
						h: 144,
						s: 0,
						l: 1,
						a: 1
					},
					hsv: {
						h: 90,
						s: 0,
						v: 0,
						a: 1
					},
					rgba: {
						r: 255,
						g: 255,
						b: 255,
						a: 1
					},
					a: 1
				},
        discordfill: {
					hex: '#7289DA',
					hsl: {
						h: 227,
						s: 0.58,
						l: 0.65,
						a: 1
					},
					hsv: {
						h: 0,
						s: 0,
						v: 0,
						a: 1
					},
					rgba: {
						r: 114,
						g: 137,
						b: 218,
						a: 1
					},
					a: 1
				}
      },
      customLink: ""
    }
  },
  props: {
    previewDiscordType: {
      type: String,
      default: "corner" //valid: standard, corner(, speechbubble)
    }
  },
  methods: {
    changeColor: function (discordcolor, discordfill) {
      this.colors.discordcolor = {hex: discordcolor, a: 1}
      this.colors.discordfill = {hex: discordfill, a: 1}
    },
    updatePreviewCode:  function() {
      this.$nextTick(function () {
        // => 'DOM loaded and ready'
        if (this.$refs.preview == null) {
          this.previewCode = ""
        } else {
          this.previewCode = this.$refs.preview.innerHTML
          this.previewCode += "\n\n<style type='text/css'>.rotatethis { transform: rotate(-45deg); transform-origin: 60px 60px; } .discord-logo { transform: scale(0.7); transform-origin: 24px 24px; } .discord-logo .discord-outer-layer { transition: transform 800ms cubic-bezier(0.7, 1, 0.7, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .discord-outer-layer { transform: scale(1.5) rotate(360deg); } .discord-logo .discord-middle-layer { transition: transform 800ms cubic-bezier(0.5, 1, 0.5, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .discord-middle-layer { transform: scale(1.4) rotate(360deg); } .discord-logo .discord-inner-layer { transition: transform 800ms cubic-bezier(0.3, 1, 0.3, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .discord-inner-layer { transform: scale(1.3) rotate(360deg); } .discord-logo .discord-original { transition: visibility 0ms; transition-delay: 800ms; } .discord-logo-container:hover .discord-original { visibility: hidden; transition-delay: 0ms; }</style>"
        }
      })
    }
  },
  computed: {
    getStyle: {
      get: function() {
        var returnThis = {transform: "rotate(0deg)", backgroundColor: "#FFFFFF"}
        if (this.colors.discordfill.hex == "#FFFFFF") {
          returnThis.backgroundColor = this.colors.discordcolor.hex
        } else {
          returnThis.backgroundColor = '#FFFFFF'
        }
        if (!this.isLeft && this.isTop) {
          this.rotation = 'transform: rotateY(180deg);'
          returnThis.transform = "rotateY(180deg)"
          return returnThis
        } else if (!this.isLeft && !this.isTop) {
          this.rotation = 'transform: rotateY(180deg) rotateX(180deg);'
          returnThis.transform = "rotateY(180deg) rotateX(180deg)"
          return returnThis
        } else if (this.isLeft && !this.isTop) {
          this.rotation = 'transform: rotateX(180deg);'
          returnThis.transform = "rotateX(180deg)"
          return returnThis
        } else {
          return returnThis
        }
      }
    },
    isClickable: {
      get: function() {
        return this.customLink == "" ? false : true
      }
    }
  },
  watch: {
    previewDiscordType: function () {
      this.updatePreviewCode();
    },
    size: function () {
      this.updatePreviewCode();
    },
    isLeft: function () {
      this.updatePreviewCode();
    },
    isTop: function () {
      this.updatePreviewCode();
    },
    colors: {
      handler: function () {
        this.updatePreviewCode();
      },
      deep: true
    },
    customLink: function () {
      this.updatePreviewCode();
    }
  },
  created: function() {
    this.updatePreviewCode()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.debug {
  height: 500px;
}


header {
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 580px;
  margin: auto;
  text-align: left;
}

.previewbox {
  border: 2px solid black;
  margin-top: 8px;
  display: inline-block;
}
section {
  padding-right: 20px;
  padding-left: 50px;
  padding-bottom: 50px;
  max-width: 1200px;
  margin: auto;
  display: flex
}
.left {
  height: 482px;
  display: flex;
}
.left .stack {
  text-align: left;
  width: 262px;
}

.button {
  padding-bottom: 5px;
}

textarea {
  margin-left: 5px;
  width: 100%;
}
footer {
  font-size: 15px;
  padding-bottom: 5px;
}
</style>
