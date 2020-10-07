<template>
  <svg
    :color="discordcolor"
    :fill="discordfill"
    :width="width"
    :height="height"
    viewBox="0 0 250 250"
  >
    <g>
      <a
        v-if="this.customLink"
        :href="this.customLink"
      >
        <path
          d="M0,0 L0,250 L250,0 Z"
          :fill="discordfill"
        />
      </a>
      <path
        v-else
        d="M0,0 L0,250 L250,0 Z"
        :fill="discordfill"
      />
    </g>
    <g class="discord-corner">
      <DiscordLogo
        :discordEyes="discordEyes"
        :isRainbow="isRainbow"
        :animationStyle="animationStyle"
        :customLink="customLink"
        :color="discordcolor"
        :fill="discordfill"
        :width="120"
        :height="120"
      />
    </g>
  </svg>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'DiscordCorner',
  components: {
    DiscordLogo
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
      default: ''
    },
    animationStyle: {
      type: String,
      default: 'swirl'
    },
    isRainbow: {
      type: Boolean,
      default: false
    },
    discordEyes: {
      type: String,
      default: 'none' //none wink angry noeyes
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.discord-corner {
  transform: rotate(-45deg);
  transform-origin: 60px 60px;
}
</style>
