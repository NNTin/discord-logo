<template>
  <div ref="rootElement" class="buttons">
    <DiscordLogo class="button" :isRainbow="isRainbow" :customLink="customLink" :style="isActive('swirl')" @click.native="setStyle('swirl')" animationStyle="swirl" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo class="button" :isRainbow="isRainbow" :customLink="customLink" :style="isActive('rotateX')" @click.native="setStyle('rotateX')" animationStyle="rotateX" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/><br/>
    <DiscordLogo class="button" :isRainbow="isRainbow" :customLink="customLink" :style="isActive('rotateY')" @click.native="setStyle('rotateY')" animationStyle="rotateY" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo class="button" :isRainbow="isRainbow" :customLink="customLink" :style="isActive('shake')" @click.native="setStyle('shake')" animationStyle="shake" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/><br/>
    <DiscordLogo class="button" :isRainbow="isRainbow" :customLink="customLink" :style="isActive('softshake')" @click.native="setStyle('softshake')" animationStyle="softshake" :width="size" :height="size" :discordfill="discordfill" :discordcolor="discordcolor"/>
    <DiscordLogo class="button" :isRainbow="true"      :customLink="customLink" :style="rainbowActiveStyle" @click.native="setRainbow(true)" animationStyle="none" :width="size" :height="size" :discordfill="discordfill" />
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
      isRainbowSelected: false,
      activeStyle: 'swirl',
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
    }
  },
	methods: {
    setStyle: function (animationStyle) {
      this.activeStyle = animationStyle;
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
    },
    isActive: function(value) {
      if (this.activeStyle == value) {
        return { border: "solid 2px " + this.discordcolor}
      }
      else {
        return { border: "solid 2px transparent" }
      }
    },
    setRainbow: function (value) {
      if ( this.isRainbowSelected ? !value : value ) {
        this.isRainbowSelected = value;
        this.$emit('rainbowChange', value);
      }
      else if (value && this.isRainbowSelected) {
        this.isRainbowSelected = !this.isRainbowSelected;
        this.$emit('rainbowChange', this.isRainbowSelected);
      }
		}
  },
  computed: {
    rainbowActiveStyle: {
      get: function () {
        if (this.isRainbowSelected) {
          return { border: "solid 2px " + this.discordcolor}
        }
        else {
          return { border: "solid 2px transparent" }
        }
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
