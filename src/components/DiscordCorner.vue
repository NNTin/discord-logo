<template>
  <div>
    <svg class="discordcorner" width="120" height="120" viewBox="0 0 250 250">
     <g>
      <path d="M0,0 L0,250 L250,0 Z" :fill="discordfill"/>
     </g>
    </svg>
    <DiscordSwirl class="discordcorner discordswirl" width="60" height="60"/>


  </div>
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
    discordcolor: {
      type: String,
      default: '#7289DA'
    },
    discordfill: {
      type: String,
      default: '#23272A'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.discordcorner {
	position: absolute;
	top: 0;
	left: 0;
	border: 0;
}
.discordswirl {
  transform: rotate(-45deg);
}
</style>
