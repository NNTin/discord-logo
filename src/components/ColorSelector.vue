<template>
  <div class="buttons">
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#7289DA','#FFFFFF') + setRainbow(false)" :width="size" :height="size" discordfill="#7289DA" discordcolor="#FFFFFF"/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#7289DA','#2C2F33') + setRainbow(false)" :width="size" :height="size" discordfill="#7289DA" discordcolor="#2C2F33"/><br/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#FFFFFF','#7289DA') + setRainbow(false)" :width="size" :height="size" discordfill="#FFFFFF" discordcolor="#7289DA"/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#FFFFFF','#2C2F33') + setRainbow(false)" :width="size" :height="size" discordfill="#FFFFFF" discordcolor="#2C2F33"/><br/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#2C2F33','#7289DA') + setRainbow(false)" :width="size" :height="size" discordfill="#2C2F33" discordcolor="#7289DA"/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#2C2F33','#FFFFFF') + setRainbow(false)" :width="size" :height="size" discordfill="#2C2F33" discordcolor="#FFFFFF"/><br />
    <DiscordLogo  animationStyle="none"           :customLink="customLink" @click.native="setRainbow(true)"    :isRainbow="true"             :width="size" :height="size" :discordfill="colors.discordfill" :style="isActive" />
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'ColorSelector',
  components: {
    DiscordLogo
  },
  data () {
    return {
      isRainbow: false,
      size: 48,
      colors: {
        discordcolor: '#FFFFFF',
        discordfill: '#7289DA',
      }
    }
  },
  props: {
    customLink: {
      type: String,
      default: ''
    },
    animationStyle: {
      type: String,
      default: 'swirl'
    }
  },
	methods: {
    setColor: function (backgroundColor, textColor) {
      this.colors.discordcolor = textColor,
      this.colors.discordfill = backgroundColor
      this.$emit('colorChange', this.colors);
		},
    setRainbow: function (value) {
      if ( value ? !this.isRainbow : this.isRainbow ) {
        this.isRainbow = value;
        this.$emit('rainbowChange', value);
      }
      else if (value && this.isRainbow) {
        this.isRainbow = !this.isRainbow;
        this.$emit('rainbowChange', this.isRainbow);
      }
		}
  },
  computed: {
    isActive: {
      get: function () {
        if (this.isRainbow) {
          return { border: "solid 2px " + this.colors.discordcolor}
        }
      }
    }
  }
}
</script>
<style>
  .buttons {
    display: inline-block;
    position:relative;
    bottom: 80px;
  }
</style>
