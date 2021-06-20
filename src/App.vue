<template>
  <div id="app">
    <div
      id="top"
      :style="getBackgroundColor"
    >
      <GithubCorner
        :discordcolor="colors.discordfill"
        :discordfill="colors.discordcolor"
      />
      <DiscordCorner
        id="discordcorner"
        :background="background"
        :discord-eyes="discordEyes"
        custom-link="#"
        :is-rainbow="isRainbow"
        :animation-style="animationStyle"
        :discordcolor="colors.discordfill"
        :discordfill="colors.discordcolor"
        @click.native="setPreviewType('corner')"
      />
      <div id="container">
        <ColorSelector
          :discord-eyes="discordEyes"
          :background="background"
          class="box"
          custom-link="#"
          :animation-style="animationStyle"
          @colorChange="onColorChange"
          @rainbowChange="onRainbowChange"
        />
        <BackgroundSelector
          :background="background"
          :discordEyes="discordEyes"
          class="box"
          customLink="#"
          :animationStyle="animationStyle"
          @backgroundChange="onBackgroundChange"
          @rainbowChange="onRainbowChange"
          :discordfill="colors.discordfill"
          :discordcolor="colors.discordcolor"
          :isRainbow="isRainbow"
        />
        <StyleSelector
          ref="styleselector"
          :background="background"
          :animation-style="animationStyle"
          :discord-eyes="discordEyes"
          class="box"
          custom-link="#"
          :is-rainbow="isRainbow"
          :discordfill="colors.discordfill"
          :discordcolor="colors.discordcolor"
          @rainbowChange="onRainbowChange"
          @styleChange="onStyleChange"
        />
        <DiscordLogo
          :discord-eyes="discordEyes"
          class="box"
          :background="background"
          custom-link="#"
          :animation-style="animationStyle"
          :is-rainbow="isRainbow"
          :discordfill="colors.discordfill"
          :discordcolor="colors.discordcolor"
          @click.native="setPreviewType('standard')"
        />
      </div>
      <EyeSelector
        :discord-eyes="discordEyes"
        :animation-style="animationStyle"
        :background="background"
        custom-link="#"
        :is-rainbow="isRainbow"
        :discordfill="colors.discordfill"
        :discordcolor="colors.discordcolor"
        @activeEyeChange="onActiveEyeChange"
      />
      <br>
      <DiscordText
        ref="discordtext"
        :discord-eyes="discordEyes"
        :is-rainbow="isRainbow"
        :background="background"
        custom-link="#"
        :animation-style="animationStyle"
        :standard-text="standardText"
        :discordfill="colors.discordfill"
        :discordcolor="colors.discordcolor"
        @click.native="updateSpeechBubble() + setPreviewType('speechbubble')"
      />
    </div>
    <MainBody
      ref="mainbody"
      :background="background"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :is-rainbow="isRainbow"
      :preview-discord-type="previewDiscordType"
    />
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
import EyeSelector from './components/EyeSelector.vue'
import BackgroundSelector from './components/BackgroundSelector.vue'

export default {
  name: 'App',
  components: {
    DiscordLogo, GithubCorner, DiscordCorner, ColorSelector,
    StyleSelector, MainBody, DiscordText, EyeSelector, BackgroundSelector
  },
  data () {
  		return {
        background: new URL(document.URL).searchParams.get("background") ? new URL(document.URL).searchParams.get("background") : 'none', //none starfield grid rush
        discordEyes: new URL(document.URL).searchParams.get("eyes") ? new URL(document.URL).searchParams.get("eyes") : 'none', //none wink angry noeyes
        isRainbow: new URL(document.URL).searchParams.get("rainbow") ? true : false,
        animationStyle: new URL(document.URL).searchParams.get("animation") ? new URL(document.URL).searchParams.get("animation") : 'swirl', //swirl rotateX rotateY shake softshake
        standardText: 'Join us on Discord',
        previewDiscordType: new URL(document.URL).searchParams.get("preview") ? new URL(document.URL).searchParams.get("preview") : 'standard', //corner standard speechbubble
        colors: {
          discordcolor: '#FFFFFF',
          discordfill: '#7289DA'
        }
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
  },
  methods: {
    updateSpeechBubble: function () {
      var myArray = ['Click me to get the speech bubble code generator!',
                    'Click top right GitHub corner to fork!',
                    'Animation or style ideas? Raise an issue on GitHub!',
                    'Created with ♥ by NNTin using Vue.js',
                    'Click on the Discord corner to get the code.',
                    'All discord logos are clickable and will not redirect you!'];
      var rand = myArray[Math.floor(Math.random() * myArray.length)];
      this.standardText = rand;
    },
    onActiveEyeChange (value) {
      this.discordEyes = value;
      this.$nextTick(function () {
        this.$refs.mainbody.updatePreviewCode();
      })
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
    },
    onBackgroundChange (value) {
      this.background = value
      this.$nextTick(function () {
        this.$refs.mainbody.updatePreviewCode();
      })
    }
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
