<template>
  <div
    ref="rootElement"
    class="buttons"
  >
    <DiscordLogo
      :discord-eyes="discordEyes"
      class="button"
      :is-rainbow="isRainbow"
      :custom-link="customLink"
      :style="isActive('swirl')"
      animation-style="swirl"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
@click.native="setStyle('swirl')"
    />
    <DiscordLogo
      :discord-eyes="discordEyes"
      class="button"
      :is-rainbow="isRainbow"
      :custom-link="customLink"
      :style="isActive('rotateX')"
      animation-style="rotateX"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
@click.native="setStyle('rotateX')"
    /><br>
    <DiscordLogo
      :discord-eyes="discordEyes"
      class="button"
      :is-rainbow="isRainbow"
      :custom-link="customLink"
      :style="isActive('rotateY')"
      animation-style="rotateY"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
@click.native="setStyle('rotateY')"
    />
    <DiscordLogo
      :discord-eyes="discordEyes"
      class="button"
      :is-rainbow="isRainbow"
      :custom-link="customLink"
      :style="isActive('shake')"
      animation-style="shake"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
@click.native="setStyle('shake')"
    /><br>
    <DiscordLogo
      :discord-eyes="discordEyes"
      class="button"
      :is-rainbow="isRainbow"
      :custom-link="customLink"
      :style="isActive('softshake')"
      animation-style="softshake"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      :discordcolor="discordcolor"
@click.native="setStyle('softshake')"
    />
    <DiscordLogo
      :discord-eyes="discordEyes"
      class="button"
      :is-rainbow="true"
      :custom-link="customLink"
      :style="rainbowActiveStyle"
      animation-style="none"
      :width="size"
      :height="size"
      :discordfill="discordfill"
      @click.native="setRainbow(true)"
    />
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'StyleSelector',
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
    }
  },
  data () {
    return {
      size: 48
    }
  },
  computed: {
    rainbowActiveStyle: {
      get: function () {
        if (this.isRainbow) {
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
    },
    isActive: function(value) {
      if (this.animationStyle == value) {
        return { border: "solid 2px " + this.discordcolor}
      }
      else {
        return { border: "solid 2px transparent" }
      }
    },
    setRainbow: function (value) {
      if ( this.isRainbow ? !value : value ) {
        this.$emit('rainbowChange', value);
      }
      else if (value && this.isRainbow) {
        this.$emit('rainbowChange', !this.isRainbow);
      }
		}
  }
}
</script>
<style>
</style>
