<template>
  <div id="app" :style="getBackgroundColor">
    <GithubCorner :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
    <DiscordCorner :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
    <ColorSelector @colorChange="onColorChange"/>
    <DiscordSwirl :discordfill="colors.discordfill" :discordcolor="colors.discordcolor"/>
  </div>
</template>

<script>
import DiscordSwirl from './components/DiscordSwirl.vue'
import GithubCorner from './components/GithubCorner.vue'
import DiscordCorner from './components/DiscordCorner.vue'
import ColorSelector from './components/ColorSelector.vue'

export default {
  name: 'app',
  components: {
    DiscordSwirl, GithubCorner, DiscordCorner, ColorSelector
  },
  data () {
  		return {
        colors: {
          discordcolor: '#FFFFFF',
          discordfill: '#7289DA'
        }
  		}
  	},
  methods: {
    onColorChange (value) {
      this.colors = value
    }
  },
  computed: {
    getBackgroundColor: {
			get: function () {
				return {
					backgroundColor: this.colors.discordfill
				}
			}
		}
  }
}
</script>

<style>
html,body {
  height: 100%;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
