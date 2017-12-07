<template>
  <div class="buttons">
    <DiscordLogo class="button" :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#7289DA','#FFFFFF') + setRainbow(false)" :width="size" :height="size" discordfill="#7289DA" discordcolor="#FFFFFF"/>
    <DiscordLogo class="button" :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#7289DA','#2C2F33') + setRainbow(false)" :width="size" :height="size" discordfill="#7289DA" discordcolor="#2C2F33"/><br/>
    <DiscordLogo class="button" :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#FFFFFF','#7289DA') + setRainbow(false)" :width="size" :height="size" discordfill="#FFFFFF" discordcolor="#7289DA"/>
    <DiscordLogo class="button" :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#FFFFFF','#2C2F33') + setRainbow(false)" :width="size" :height="size" discordfill="#FFFFFF" discordcolor="#2C2F33"/><br/>
    <DiscordLogo class="button" :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#2C2F33','#7289DA') + setRainbow(false)" :width="size" :height="size" discordfill="#2C2F33" discordcolor="#7289DA"/>
    <DiscordLogo class="button" :animationStyle="animationStyle" :customLink="customLink" @click.native="setColor('#2C2F33','#FFFFFF') + setRainbow(false)" :width="size" :height="size" discordfill="#2C2F33" discordcolor="#FFFFFF"/>
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
      this.$emit('rainbowChange', value);
		}
  },
  computed: {
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
