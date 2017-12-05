<template>
  <div class="buttons">
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#7289DA','#FFFFFF')" :width="size" :height="size" discordfill="#7289DA" discordcolor="#FFFFFF"/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#7289DA','#2C2F33')" :width="size" :height="size" discordfill="#7289DA" discordcolor="#2C2F33"/><br/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#FFFFFF','#7289DA')" :width="size" :height="size" discordfill="#FFFFFF" discordcolor="#7289DA"/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#FFFFFF','#2C2F33')" :width="size" :height="size" discordfill="#FFFFFF" discordcolor="#2C2F33"/><br/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#2C2F33','#7289DA')" :width="size" :height="size" discordfill="#2C2F33" discordcolor="#7289DA"/>
    <DiscordLogo :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#2C2F33','#FFFFFF')" :width="size" :height="size" discordfill="#2C2F33" discordcolor="#FFFFFF"/>
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
      size: 48,
      colors: {
        discordcolor: '#7289DA',
        discordfill: '#23272A',
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
