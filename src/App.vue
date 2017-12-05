<template>
  <div id="app">
    <div id="top" :style="getBackgroundColor">
      <GithubCorner :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
      <DiscordCorner customLink="#" :animationStyle="animationStyle" @click.native="setPreviewType('corner')" id="discordcorner" :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
      <div id="container">
        <ColorSelector class="box" customLink="#" :animationStyle="animationStyle" @colorChange="onColorChange"/>
        <StyleSelector class="box" customLink="#" @styleChange="onStyleChange" :discordfill="colors.discordfill" :discordcolor="colors.discordcolor" />
        <DiscordLogo class="box" customLink="#" :animationStyle="animationStyle" @click.native="setPreviewType('standard')" :discordfill="colors.discordfill" :discordcolor="colors.discordcolor"/>
      </div>
      <br/>
      <DiscordText customLink="#" :animationStyle="animationStyle" ref="discordtext" :standardText="standardText" @click.native="updateSpeechBubble() + setPreviewType('speechbubble')" :discordfill="colors.discordfill" :discordcolor="colors.discordcolor" />
    </div>
    <MainBody ref="mainbody" :animationStyle="animationStyle" :previewDiscordType="previewDiscordType"/>
  </div>
</template>

<script>
import DiscordLogo from './components/DiscordLogo.vue'
import GithubCorner from './components/GithubCorner.vue'
import DiscordCorner from './components/DiscordCorner.vue'
import ColorSelector from './components/ColorSelector.vue'
import StyleSelector from './components/StyleSelector.vue'
import MainBody from './components/MainBody.vue'
import DiscordText from './components/DiscordText.vue'

export default {
  name: 'app',
  components: {
    DiscordLogo, GithubCorner, DiscordCorner, ColorSelector, StyleSelector, MainBody, DiscordText
  },
  data () {
  		return {
        animationStyle: 'swirl',
        standardText: 'Join us on Discord',
        previewDiscordType: 'standard',
        colors: {
          discordcolor: '#FFFFFF',
          discordfill: '#7289DA'
        }
  		}
  	},
  methods: {
    updateSpeechBubble: function () {
      var myArray = ['Click me to get the speech bubble code generator!',
                    'Click top right GitHub corner to fork!',
                    'Animation or style ideas? Raise an issue on GitHub!',
                    'Created with ♥ by NNTin using Discord and Vue.js',
                    'Click on the Discord corner to get the code.',
                    "All discord logos are clickable and will not redirect you!",
                    "TODO: Slim down the code generation 😨"];
      var rand = myArray[Math.floor(Math.random() * myArray.length)];
      this.standardText = rand;
    },
    onColorChange (value) {
      this.colors = value
      this.$refs.mainbody.changeColor(this.colors.discordcolor, this.colors.discordfill)
    },
    onStyleChange (value) {
      console.log(value)
      this.animationStyle = value;
      this.$refs.mainbody.updatePreviewCode();
    },
    setPreviewType (value) {
    this.previewDiscordType = value;
      this.$nextTick(function () {
        this.$refs.mainbody.refreshSlider();
      })
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
  },
  created: function() {
    this.updateSpeechBubble()
  }
}
</script>

<style>
html,body {
  height: 100%;
  margin: 0px;
}
#container {
    display: table;
    width:100%;
}
.box {
    display:inline-block;
    width:33%;
    max-width: 300px;
    text-align:center;
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
