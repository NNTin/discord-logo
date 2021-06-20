<template>
  <div class="buttons">
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#7289DA"
      discordcolor="#FFFFFF"
      @click.native="setColor('#7289DA','#FFFFFF') + setRainbow(false)"
    />
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#7289DA"
      discordcolor="#2C2F33"
      @click.native="setColor('#7289DA','#2C2F33') + setRainbow(false)"
    /><br>
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#FFFFFF"
      discordcolor="#7289DA"
      @click.native="setColor('#FFFFFF','#7289DA') + setRainbow(false)"
    />
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#FFFFFF"
      discordcolor="#2C2F33"
      @click.native="setColor('#FFFFFF','#2C2F33') + setRainbow(false)"
    /><br>
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#2C2F33"
      discordcolor="#7289DA"
      @click.native="setColor('#2C2F33','#7289DA') + setRainbow(false)"
    />
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#2C2F33"
      discordcolor="#FFFFFF"
      @click.native="setColor('#2C2F33','#FFFFFF') + setRainbow(false)"
    />
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'ColorSelector',
  components: {
    DiscordLogo
  },
  props: {
    customLink: {
      type: String,
      default: ''
    },
    animationStyle: {
      type: String,
      default: 'swirl'
    },
    discordEyes: {
      type: String,
      default: 'none' //none wink angry noeyes
    }
  },
  data () {
    return {
      size: 48,
      colors: {
        discordcolor: '#FFFFFF',
        discordfill: '#7289DA',
      }
    }
  },
  computed: {
  },
	methods: {
    setColor: function (backgroundColor, textColor) {
      this.colors.discordcolor = textColor,
      this.colors.discordfill = backgroundColor
      this.$emit('colorChange', this.colors);
		},
    setRainbow: function (value) {
      this.$emit('rainbowChange', value);
		}
  }
}
</script>
<style>
.buttons {
  display: inline-block;
  position:relative;
  bottom: 60px;
}
.buttons .button {
  padding: 2px;
}
</style>
