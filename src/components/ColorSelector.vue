<template>
  <div class="buttons">
    <a href="#" v-on:click="setColor('#7289DA','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#7289DA" discordcolor="#FFFFFF"/></a>
    <a href="#" v-on:click="setColor('#7289DA','#2C2F33')"><DiscordSwirl :width="48" :height="48" discordfill="#7289DA" discordcolor="#2C2F33"/></a><br/>
    <a href="#" v-on:click="setColor('#FFFFFF','#7289DA')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#7289DA"/></a>
    <a href="#" v-on:click="setColor('#FFFFFF','#2C2F33')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#2C2F33"/></a><br/>
    <a href="#" v-on:click="setColor('#2C2F33','#7289DA')"><DiscordSwirl :width="48" :height="48" discordfill="#2C2F33" discordcolor="#7289DA"/></a>
    <a href="#" v-on:click="setColor('#2C2F33','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#2C2F33" discordcolor="#FFFFFF"/></a>
  </div>
</template>

<script>
import DiscordSwirl from '../components/DiscordSwirl.vue'

export default {
  name: 'ColorSelector',
  components: {
    DiscordSwirl
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
