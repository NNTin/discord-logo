<template>
  <div id="app">
    <div id="top" :style="getBackgroundColor">
      <GithubCorner :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
      <DiscordCorner customLink="#" :isRainbow="isRainbow" :animationStyle="animationStyle" @click.native="setPreviewType('corner')" id="discordcorner" :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
      <div id="container">
        <ColorSelector class="box" customLink="#" :animationStyle="animationStyle" @colorChange="onColorChange" @rainbowChange="onRainbowChange"/>
        <StyleSelector ref="styleselector" class="box" customLink="#" :isRainbow="isRainbow"  @rainbowChange="onRainbowChange" @styleChange="onStyleChange" :discordfill="colors.discordfill" :discordcolor="colors.discordcolor" />
        <DiscordLogo class="box" customLink="#" :animationStyle="animationStyle" :isRainbow="isRainbow" @click.native="setPreviewType('standard')" :discordfill="colors.discordfill" :discordcolor="colors.discordcolor"/>
      </div>
      <br/>
      <DiscordText :isRainbow="isRainbow" customLink="#" :animationStyle="animationStyle" ref="discordtext" :standardText="standardText" @click.native="updateSpeechBubble() + setPreviewType('speechbubble')" :discordfill="colors.discordfill" :discordcolor="colors.discordcolor" />
    </div>
    <MainBody ref="mainbody" :animationStyle="animationStyle" :isRainbow="isRainbow" :previewDiscordType="previewDiscordType"/>
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
        isRainbow: false,
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
                    "All discord logos are clickable and will not redirect you!"];
      var rand = myArray[Math.floor(Math.random() * myArray.length)];
      this.standardText = rand;
    },
    onColorChange (value) {
      this.colors = value
      this.$refs.mainbody.changeColor(this.colors.discordcolor, this.colors.discordfill)
    },
    onRainbowChange (value) {
      this.isRainbow = value
      this.$nextTick(function () {
        this.$refs.styleselector.isRainbowSelected = value;
        this.$refs.mainbody.updatePreviewCode();
      })
    },
    onStyleChange (value) {
      this.animationStyle = value;
      this.$nextTick(function () {
        this.$refs.mainbody.updatePreviewCode();
      })
    },
    setPreviewType (value) {
    this.previewDiscordType = value;
      this.$nextTick(function () {
        this.$refs.mainbody.refreshSlider();
        this.$refs.mainbody.updatePreviewCode();
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
