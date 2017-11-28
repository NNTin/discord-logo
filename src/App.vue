<template>
  <div id="app">
    <div id="top" :style="getBackgroundColor">
      <GithubCorner :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
      <DiscordCorner customLink="https://discord.gg/gDHs8AV" id="discordcorner" :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
      <ColorSelector @colorChange="onColorChange"/>
      <a href="https://discord.gg/gDHs8AV">
        <DiscordSwirl :discordfill="colors.discordfill" :discordcolor="colors.discordcolor"/>
      </a>
      <br/>
      <DiscordText :discordfill="colors.discordfill" :discordcolor="colors.discordcolor" />
    </div>
    <MainBody ref="mainbody"/>
  </div>
</template>

<script>
import DiscordSwirl from './components/DiscordSwirl.vue'
import GithubCorner from './components/GithubCorner.vue'
import DiscordCorner from './components/DiscordCorner.vue'
import ColorSelector from './components/ColorSelector.vue'
import MainBody from './components/MainBody.vue'
import DiscordText from './components/DiscordText.vue'

export default {
  name: 'app',
  components: {
    DiscordSwirl, GithubCorner, DiscordCorner, ColorSelector, MainBody, DiscordText
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
      this.$refs.mainbody.changeColor(this.colors.discordcolor, this.colors.discordfill)
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
#discordcorner {
	position: absolute;
	top: 0;
	left: 0;
	border: 0;
}
</style>
