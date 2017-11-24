<template>
  <div class="buttons">
    <br/>
    <a href="#" v-on:click="setColor('#7289DA','#2C2F33')"><DiscordSwirl :width="48" :height="48" discordfill="#7289DA" discordcolor="#2C2F33"/></a>
    <a href="#" v-on:click="setColor('#FFFFFF','#2C2F33')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#2C2F33"/></a>
    <a href="#" v-on:click="setColor('#2C2F33','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#2C2F33" discordcolor="#FFFFFF"/></a>
    <a href="#" v-on:click="setColor('#7289DA','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#7289DA" discordcolor="#FFFFFF"/></a>
    <br/>

    <a href="#" v-on:click="setColor('#99AAB5','#2C2F33')"><DiscordSwirl :width="48" :height="48" discordfill="#99AAB5" discordcolor="#2C2F33"/></a>
    <a href="#" v-on:click="setColor('#99AAB5','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#99AAB5" discordcolor="#FFFFFF"/></a>
    <a href="#" v-on:click="setColor('#FFFFFF','#99AAB5')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#99AAB5"/></a>
    <a href="#" v-on:click="setColor('#2C2F33','#99AAB5')"><DiscordSwirl :width="48" :height="48" discordfill="#2C2F33" discordcolor="#99AAB5"/></a>
    <br/>

    <a href="#" v-on:click="setColor('#FF0000','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#FF0000" discordcolor="#FFFFFF"/></a>
    <a href="#" v-on:click="setColor('#00FF00','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#00FF00" discordcolor="#FFFFFF"/></a>
    <a href="#" v-on:click="setColor('#0000FF','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#0000FF" discordcolor="#FFFFFF"/></a>
    <a href="#" v-on:click="setColor('#000000','#FFFFFF')"><DiscordSwirl :width="48" :height="48" discordfill="#000000" discordcolor="#FFFFFF"/></a>
    <br/>
    <a href="#" v-on:click="setColor('#FFFFFF','#FF0000')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#FF0000"/></a>
    <a href="#" v-on:click="setColor('#FFFFFF','#00FF00')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#00FF00"/></a>
    <a href="#" v-on:click="setColor('#FFFFFF','#0000FF')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#0000FF"/></a>
    <a href="#" v-on:click="setColor('#FFFFFF','#000000')"><DiscordSwirl :width="48" :height="48" discordfill="#FFFFFF" discordcolor="#000000"/></a>
    <br/>

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
  }
  .buttons .button {
    width: 40%;
    font-size: 12px;
    padding: 10px 20px 10px 20px;
    border: transparent;
    border: solid #000000 3px;
    margin-top: 7px;
    margin-right: 0px;
  }
</style>
