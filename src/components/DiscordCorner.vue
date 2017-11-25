<template>
  <svg :color="discordcolor" :fill="discordfill" :width="width" :height="height" viewBox="0 0 250 250">
    <g>
      <a v-if="this.customLink" v-bind:href="this.customLink">
        <path d="M0,0 L0,250 L250,0 Z" :fill="discordfill"/>
      </a>
      <path v-else d="M0,0 L0,250 L250,0 Z" :fill="discordfill"/>
    </g>
    <g class="rotatethis">
      <a v-if="this.customLink" v-bind:href="this.customLink">
        <DiscordSwirl :color="discordcolor" :fill="discordfill" :width="120" :height="120" />
      </a>
      <DiscordSwirl v-else :color="discordcolor" :fill="discordfill" :width="120" :height="120" />
    </g>
  </svg>
</template>

<script>
import DiscordSwirl from '../components/DiscordSwirl.vue'

export default {
  name: 'DiscordCorner',
  components: {
    DiscordSwirl
  },
  data () {
    return {
    }
  },
  props: {
		width: {
			type: Number,
			default: 120
		},
		height: {
			type: Number,
			default: 120
		},
    discordcolor: {
      type: String,
      default: '#7289DA'
    },
    discordfill: {
      type: String,
      default: '#23272A'
    },
    customLink: {
      type: String,
      default: ''//https://discord.gg/gDHs8AV
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.rotatethis {
  transform: rotate(-45deg);
  transform-origin: 60px 60px;
}
</style>
