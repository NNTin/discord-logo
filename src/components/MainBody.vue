<template>
  <div :style="getBackgroundColor">
    <header>
      <h1>Animated Discord Logo</h1>
      <p>This project was inspired by <a href="https://canary.discordapp.com/assets/0bdc0497eb3a19e66f2b1e3d5741634c.webm">Discord's loading logo.</a></p>
      <p>Since the loading logo is a video you have less control over its behavior. This project recreates the animated logo in <b>S</b>caleable <b>V</b>ector <b>G</b>raphics. By using <b>SVG</b>, all edges are clean and sharp. You can have any size and color. And it consumes less ressources compared to a video. Original SVG and color palette was retrieved from <a href="https://discordapp.com/branding">Discord</a>. This project isn't build by Discord nor endorsed by them.</p>
      <p>If you need help, feel free joining <a href="https://discord.gg/gDHs8AV">my server</a>. Below is a code generator: <b>NON-FUNCTIONAL WIP</b> </p>
    </header>
    <section>
      <div class="demo">
        <div>
          <DiscordSwirl class="previewbox" v-if="isSquare" :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
          <DiscordCorner :style="getRotation" class="previewbox verticalFlip" v-else :width="size" :height="size" :discordfill="colors.discordfill.hex" :discordcolor="colors.discordcolor.hex" />
        </div>
        <div class="code">

        </div>
        <div class="configuration">
          <div class="checkboxes">
            <input type="checkbox" v-model="isSquare"><label>toggle square/corner</label>
            <br/>
            <div v-if="!isSquare">
              <input type="checkbox" v-model="isLeft"><label>toggle left/right</label>
              <br/>
              <input type="checkbox" v-model="isTop"><label>toggle top/bottom</label>
              <br/>
            </div>
            <input type="checkbox" v-model="isClickable"><label>toggle clickable icon</label>
            <input v-if="isClickable" v-model="customLink" class="text" placeholder="insert link (e.g. discord invite link)"/>
            <br/>
            <input type="checkbox" v-model="isAbsolutePosition"><label>toggle absolute position</label>
          </div>

          <vueSlider v-model="size" :min="18" :max="200"/>
          <chrome-picker v-model="colors.discordcolor"/>
          <chrome-picker v-model="colors.discordfill"/>
        </div>
      </div>
    </section>
    <footer>

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
      isSquare: false,
      isLeft: true,
      isTop: true,
      isAbsolutePosition: false,
      isClickable: true,

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
  computed: {
    getRotation: {
      get: function() {
        if (!this.isLeft && this.isTop) {
          return {
            transform: "rotateY(180deg)"
          }
        }
        else if (!this.isLeft && !this.isTop) {
          return {
            transform: "rotateY(180deg) rotateX(180deg)"
          }
        }else if (this.isLeft && !this.isTop) {
          return {
            transform: "rotateX(180deg)"
          }
        }else {
          return {
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.previewbox {
  border: 2px solid black;
  display: inline-block
}
</style>
