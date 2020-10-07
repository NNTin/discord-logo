<template>
  <div class="eyeSelector">
    <DiscordLogo
      :style="isActive('wink')"
      discord-eyes="wink"
      :custom-link="customLink"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      @click.native="setEye('wink')"
      :animation-style="animationStyle"
:is-rainbow="isRainbow"
    />
    <DiscordLogo
      :style="isActive('none')"
      discord-eyes="none"
      :custom-link="customLink"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      @click.native="setEye('none')"
      :animation-style="animationStyle"
:is-rainbow="isRainbow"
    />
    <DiscordLogo
      :style="isActive('angry')"
      discord-eyes="angry"
      :custom-link="customLink"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      @click.native="setEye('angry')"
      :animation-style="animationStyle"
:is-rainbow="isRainbow"
    />
    <DiscordLogo
      :style="isActive('noeyes')"
      discord-eyes="noeyes"
      :custom-link="customLink"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      :animation-style="animationStyle"
      @click.native="setEye('noeyes')"
      :is-rainbow="isRainbow"
    />
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'EyeSelector',
  components: {
    DiscordLogo
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
    discordEyes: {
      type: String,
      default: 'none' //none wink angry noeyes
    },
    animationStyle: {
      type: String,
      default: 'swirl'
    }
  },
  data () {
    return {
      size: 100
    }
  },
  computed: {
  },
  created: function() {
  },
	methods: {
    setEye: function (eyeStyle) {
      this.$emit('activeEyeChange', eyeStyle);
    },
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    isActive: function(value) {
      if (this.discordEyes == value) {
        return { border: "solid 2px " + this.discordcolor}
      }
      else {
        return { border: "solid 2px transparent" }
      }
    }
  }
}
</script>
<style>
.eyeSelector {
  margin-top: 0px;
  margin-bottom: 15px;
}
</style>
