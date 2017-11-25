<template>
  <div>
    <header>
      <h1>Animated Discord Logo</h1>
      <p>This project was inspired by <a href="https://canary.discordapp.com/assets/0bdc0497eb3a19e66f2b1e3d5741634c.webm">Discord's loading logo.</a></p>
      <p>Since the loading logo is a video you have less control over its behavior. This project recreates the animated logo in <b>S</b>caleable <b>V</b>ector <b>G</b>raphics. By using <b>SVG</b>, all edges are clean and sharp. You can have any size and color. It consumes less ressources compared to a video. Original SVG and color palette were retrieved from <a href="https://discordapp.com/branding">Discord</a>.</p>
      <p>If you need help, feel free joining <a href="https://discord.gg/gDHs8AV">my server</a>. Below is a code generator:</p>
    </header>
    <section>
      <div class="left">
        <vueSlider :reverse="true" direction="vertical" :width="4" :height="482" v-model="size" :min="18" :max="235"/>
        <div class="stack">
          <div class="checkboxes">
            <input type="checkbox" v-model="isSquare"><label>toggle square/corner</label>
            <br/>
            <div v-if="!isSquare">
              <input type="checkbox" v-model="isLeft"><label>toggle left/right</label>
              <br/>
              <input type="checkbox" v-model="isTop"><label>toggle top/bottom</label>
              <br/>
              <input type="checkbox" v-model="isAbsolutePosition"><label>toggle absolute position</label>
              <br/>
            </div>
            <input type="checkbox" v-model="isClickable" :disabled="true"><label>clickable icon</label>
            <br/>
            <input :size="30" v-model="customLink" class="text" placeholder="insert link (e.g. discord invite link)"/>
          </div>
          <div v-if="isClickable">
            <a v-if="isSquare" :href="customLink">
              <DiscordSwirl class="previewbox" v-if="isSquare" :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
            </a>
            <DiscordCorner :customLink="customLink" :style="getRotation" class="previewbox verticalFlip" v-else :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
          </div>
          <div v-else>
            <DiscordSwirl class="previewbox" v-if="isSquare" :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
            <DiscordCorner :style="getRotation" class="previewbox verticalFlip" v-else :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
          </div>


        </div>
      </div>
      <div class="color-picker">
        <chrome-picker v-model="colors.discordcolor"/>
        <chrome-picker v-model="colors.discordfill"/>
      </div>
      <textarea v-model="getCode"/>
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
      size: 100,
      isSquare: true,
      isLeft: true,
      isTop: true,
      isAbsolutePosition: false,

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
  methods: {
    changeColor: function (discordcolor, discordfill) {
      this.colors.discordcolor = {hex: discordcolor, a: 1}
      this.colors.discordfill = {hex: discordfill, a: 1}
    }
  },
  computed: {
    getRotation: {
      get: function() {
        if (!this.isLeft && this.isTop) {
          return {
            transform: "rotateY(180deg)"
          }
        } else if (!this.isLeft && !this.isTop) {
          return {
            transform: "rotateY(180deg) rotateX(180deg)"
          }
        } else if (this.isLeft && !this.isTop) {
          return {
            transform: "rotateX(180deg)"
          }
        } else {
          return {
          }
        }
      }
    },
    isClickable: {
      get: function() {
        return this.customLink == "" ? false : true
      }
    },
    getCode: {
      get: function() {
        var discordHTML
        var discordStyle = "<style type='text/css'>.discord-logo { transform: scale(0.7); transform-origin: 24px 24px; } .discord-logo .discord-outer-layer { transition: transform 800ms cubic-bezier(0.7, 1, 0.7, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .discord-outer-layer { transform: scale(1.5) rotate(360deg); } .discord-logo .discord-middle-layer { transition: transform 800ms cubic-bezier(0.5, 1, 0.5, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .discord-middle-layer { transform: scale(1.4) rotate(360deg); } .discord-logo .discord-inner-layer { transition: transform 800ms cubic-bezier(0.3, 1, 0.3, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .discord-inner-layer { transform: scale(1.3) rotate(360deg); } .discord-logo .discord-original { transition: visibility 0ms; transition-delay: 800ms; } .discord-logo-container:hover .discord-original { visibility: hidden; transition-delay: 0ms; }</style>"


        if (this.isSquare) {
          discordHTML = "<svg color='" + this.colors.discordcolor.hex +"' fill='" + this.colors.discordfill.hex + "' width='" + this.size + "' height='" + this.size + "' xmlns:xlink='http://www.w3.org/1999/xlink' class='discord-logo-container' viewBox='0 0 48 48'> <rect width='100%' height='100%' fill='currentfill' /> <defs> <g> <path id='discord-logo' fill='currentcolor' d='m40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4s-10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.681,0.537 -10,4 -10,4s-5.121,7.425 -6,22c5.162,5.953 13,6 13,6l1.639,-2.185c-2.782,-0.967 -5.924,-2.694 -8.639,-5.815c3.238,2.45 8.125,5 16,5s12.762,-2.55 16,-5c-2.715,3.121 -5.857,4.848 -8.639,5.815l1.639,2.185c0,0 7.838,-0.047 13,-6c-0.879,-14.575 -6,-22 -6,-22zm-22.5,18c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4zm13,0c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4z' /> <mask id='mask-outer-layer'> <rect width='100%' height='100%' fill='#FFFFFF' /> <circle r='42%' cx='50%' cy='50%' fill='#000000' /> </mask> <mask id='mask-middle-layer'> <rect width='100%' height='100%' fill='#000000' /> <circle r='43%' cx='50%' cy='50%' fill='#FFFFFF' /> <circle r='32%' cx='50%' cy='50%' fill='#000000' /> </mask> <mask id='mask-inner-layer'> <rect width='100%' height='100%' fill='#000000' /> <circle r='32%' cx='50%' cy='50%' fill='#FFFFFF' /> </mask> </g> </defs> <g class='discord-logo'> <use class='discord-original' href='#discord-logo' /> <use class='discord-outer-layer' href='#discord-logo' mask='url(#mask-outer-layer)' /> <use class='discord-middle-layer' href='#discord-logo' mask='url(#mask-middle-layer)' /> <use class='discord-inner-layer' href='#discord-logo' mask='url(#mask-inner-layer)' /> </g> </svg>"
          if (this.isClickable) {
            discordHTML = "<a href='" + this.customLink + "'>" + discordHTML + "</a>"
          }
        } else {
          discordHTML = "NOT IMPLEMENTED NOT IMPLEMENTED NOT IMPLEMENTED NOT IMPLEMENTED"
        }




        return discordHTML + "\n\n\n\n" + discordStyle
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.previewbox {
  border: 2px solid black;
  display: inline-block;
}
section {
  display: flex
}
.left {
  height: 482px;
  display: flex;
}
.left .stack {
  text-align: left;
}
textarea {
  width: 100%;
}
</style>
