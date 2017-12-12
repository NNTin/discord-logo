<template>
  <div ref="rootElement" class="buttons">
    <DiscordLogo :style="isActive('wink')"   @click.native="setEye('wink')"   discordEyes="wink"   :customLink="customLink" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor" :animationStyle="animationStyle" :isRainbow="isRainbow"/>
    <DiscordLogo :style="isActive('none')"   @click.native="setEye('none')"   discordEyes="none"   :customLink="customLink" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor" :animationStyle="animationStyle" :isRainbow="isRainbow"/>
    <DiscordLogo :style="isActive('angry')"  @click.native="setEye('angry')"  discordEyes="angry"  :customLink="customLink" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor" :animationStyle="animationStyle" :isRainbow="isRainbow"/>
    <DiscordLogo :style="isActive('noeyes')" @click.native="setEye('noeyes')" discordEyes="noeyes" :customLink="customLink" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor" :animationStyle="animationStyle" :isRainbow="isRainbow"/>
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'EyeSelector',
  components: {
    DiscordLogo
  },
  data () {
    return {
      size: 100,
      activeEye: 'none'
    }
  },
  props: {
    customLink: {
      type: String,
      default: ''
    },
		discordcolor: {
      type: String,
      default: '#7289DA'
		},
    discordfill: {
      type: String,
      default: '#23272A'
    },
    isRainbow: {
      type: Boolean,
      default: false
    },
    animationStyle: {
      type: String,
      default: 'swirl'
    }
  },
	methods: {
    setEye: function (eyeStyle) {
      this.activeEye = eyeStyle;
      this.$emit('activeEyeChange', eyeStyle);
    },
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    isActive: function(value) {
      if (this.activeEye == value) {
        return { border: "solid 2px " + this.discordcolor}
      }
      else {
        return { border: "solid 2px transparent" }
      }
    }
  },
  computed: {
  },
  created: function() {
  }
}
</script>
<style>
</style>
