<template>
  <div ref="rootElement" class="buttons">
    <DiscordLogo background="starfield" :animationStyle="animationStyle" :discordEyes="discordEyes" class="button" :customLink="customLink" @click.native="setBackground('starfield')" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor" :style="isActive('starfield')" :isRainbow="isRainbow"/>
    <DiscordLogo background="none" :animationStyle="animationStyle" :discordEyes="discordEyes" class="button" :customLink="customLink" @click.native="setBackground('none')" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor" :style="isActive('none')" :isRainbow="isRainbow"/><br/>
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'BackgroundSelector',
  components: {
    DiscordLogo
  },
  data () {
    return {
      size: 48
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
  },
  created: function() {
    this.$nextTick(function () {
      setInterval(function () {
          this.addAnimatedClass();
          this.sleep(2500).then(() => {this.removeAnimatedClass();});
      }.bind(this), 5000);
    });
  }
}
</script>
<style>
</style>
