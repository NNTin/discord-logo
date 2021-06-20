<template>
  <div ref="rootElement" class="buttons">
    <DiscordLogo
      background="none"
      :animation-style="animationStyle"
      :discord-eyes="discordEyes"
      class="button"
      :custom-link="customLink"
      @click.native="setBackground('none')"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      :style="isActive('none')"
      :is-rainbow="isRainbow"
    />
    <br>
    <DiscordLogo
      background="starfield"
      :animation-style="animationStyle"
      :discord-eyes="discordEyes"
      class="button"
      :custom-link="customLink"
      @click.native="setBackground('starfield')"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      :style="isActive('starfield')"
      :is-rainbow="isRainbow"
    />
    <DiscordLogo
      background="grid"
      :animation-style="animationStyle"
      :discord-eyes="discordEyes"
      class="button"
      :custom-link="customLink"
      @click.native="setBackground('grid')"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      :style="isActive('grid')"
      :is-rainbow="isRainbow"
    />
    <br>
    <DiscordLogo
      background="rush"
      :animation-style="animationStyle"
      :discord-eyes="discordEyes"
      class="button"
      :custom-link="customLink"
      @click.native="setBackground('rush')"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
      :style="isActive('rush')"
      :is-rainbow="isRainbow"
    />
    <br>
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'BackgroundSelector',
  components: {
    DiscordLogo
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
    },
    isRainbow: {
      type: Boolean,
      default: false
    },
    discordEyes: {
      type: String,
      default: 'none' //none wink angry noeyes
    },
    animationStyle: {
      type: String,
      default: 'swirl'
    },
    background: {
      type: String,
      default: 'none'
    }
  },
  data () {
    return {
      size: 48
    }
  },
  created: function() {
    this.$nextTick(function () {
      setInterval(function () {
          this.addAnimatedClass();
          this.sleep(2500).then(() => {this.removeAnimatedClass();});
      }.bind(this), 5000);
    });
  },
	methods: {
    setBackground: function (background) {
      this.$emit('backgroundChange', background);
		},
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    addAnimatedClass: function() {
      var rootElement = this.$refs.rootElement;
      var discordLogos = rootElement.getElementsByClassName("button");
      for (var i = 0; i < discordLogos.length; i++) {
        discordLogos[i].classList.add("animated");
      }
    },
    removeAnimatedClass: function() {
      var rootElement = this.$refs.rootElement;
      var discordLogos = rootElement.getElementsByClassName("button");
      for (var i = 0; i < discordLogos.length; i++) {
        discordLogos[i].classList.remove("animated");
      }
    },
    isActive: function(value) {
      if (this.background == value) {
        return { border: "solid 2px " + this.discordcolor}
      }
      else {
        return { border: "solid 2px transparent" }
      }
    }
  }
}
</script>
<style>
</style>
