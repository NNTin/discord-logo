<template>
  <div class="buttons">
    <DiscordLogo :customLink="customLink" @click.native="setStyle('swirl')" animationStyle="swirl" :width="48" :height="48" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo :customLink="customLink" @click.native="setStyle('rotateX')" animationStyle="rotateX" :width="48" :height="48" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo :customLink="customLink" @click.native="setStyle('rotateY')" animationStyle="rotateY" :width="48" :height="48" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo :customLink="customLink" @click.native="setStyle('shake')" animationStyle="shake" :width="48" :height="48" :discordfill="discordfill" :discordcolor="discordcolor"/>
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'StyleSelector',
  components: {
    DiscordLogo
  },
  data () {
    return {
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
    }
  },
	methods: {
    setStyle: function (animationStyle) {
      this.$emit('styleChange', animationStyle);
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
