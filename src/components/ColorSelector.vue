<template>
  <div class="buttons">
    <DiscordLogo :customLink="customLink" @click.native="setColor('#7289DA','#FFFFFF')" :width="48" :height="48" discordfill="#7289DA" discordcolor="#FFFFFF"/>
    <DiscordLogo :customLink="customLink" @click.native="setColor('#7289DA','#2C2F33')" :width="48" :height="48" discordfill="#7289DA" discordcolor="#2C2F33"/><br/>
    <DiscordLogo :customLink="customLink" @click.native="setColor('#FFFFFF','#7289DA')" :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#7289DA"/>
    <DiscordLogo :customLink="customLink" @click.native="setColor('#FFFFFF','#2C2F33')" :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#2C2F33"/><br/>
    <DiscordLogo :customLink="customLink" @click.native="setColor('#2C2F33','#7289DA')" :width="48" :height="48" discordfill="#2C2F33" discordcolor="#7289DA"/>
    <DiscordLogo :customLink="customLink" @click.native="setColor('#2C2F33','#FFFFFF')" :width="48" :height="48" discordfill="#2C2F33" discordcolor="#FFFFFF"/>
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
    width: 32%;
    position:relative;
    bottom: 80px;
  }
</style>
