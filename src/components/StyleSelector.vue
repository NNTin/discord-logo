<template>
  <div ref="rootElement" class="buttons">
    <DiscordLogo class="button" :customLink="customLink" @click.native="setStyle('swirl')" animationStyle="swirl" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo class="button" :customLink="customLink" @click.native="setStyle('rotateX')" animationStyle="rotateX" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/><br/>
    <DiscordLogo class="button" :customLink="customLink" @click.native="setStyle('rotateY')" animationStyle="rotateY" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo class="button" :customLink="customLink" @click.native="setStyle('shake')" animationStyle="shake" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/>
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
      size: 70
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
