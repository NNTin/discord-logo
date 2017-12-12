<template>
  <div ref="discordTextRootElement">
    <div class="discordtext">
      <DiscordLogo :discordEyes="discordEyes" ref="discordLogoFromText" :isRainbow="isRainbow" :animationStyle="animationStyle" :customLink="customLink" :height="height *2" :width="height *2" :discordfill="discordfill" :discordcolor="discordcolor"/>
      <svg v-show="standardText" class="speechbubble" :height="height" preserveAspectRatio="xMinYMin">
        <g class="pathElementGroup">
          <path transform="scale(-1,1)" class="pathElement" :fill="discordcolor" d="M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z"/>
        </g>
        <text :fill="discordfill" font-size="90" class="textElement" x="95" y="57%" >{{bubbleText}}</text>
        <a v-if="customLink" :href="customLink">
          <rect width="100%" height="100%" fill-opacity="0" />
        </a>
      </svg>
    </div>
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'DiscordText',
  components: {
    DiscordLogo
  },
  data () {
    return {
      delay: 60,
      isTyping: false,
      bubbleText: '',
      width: 0
    }
  },
	props: {
    height: {
      type: Number,
      default: 40
    },
		discordcolor: {
      type: String,
      default: '#FFFFFF'
		},
    discordfill: {
      type: String,
      default: '#7289DA'
    },
    customLink: {
      type: String,
      default: ''
    },
    standardText: {
      type: String,
      default: 'Join us on Discord!'
    },
    writeText: {
      type: Boolean,
      default: true
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
  methods: {
    typeText: function(position, text) {
      if (this.writeText) {
        if (position == 0) {
          this.isTyping = true,
          this.bubbleText = '';
        } if (position < text.length) {
          this.bubbleText += text.charAt(position)
          this.sleep(this.delay).then(() => {
              this.typeText(position+1, text);
          });
        } else {
          this.isTyping = false
        }
      }
      else {
        this.bubbleText = text;
      }

      this.updateSVG();
    },
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    updateSVG: function () {
      this.$nextTick(function () {
        var discordTextRootElement = this.$refs.discordTextRootElement;
        var speechbubble = discordTextRootElement.getElementsByClassName("speechbubble")[0];
        var textElement = discordTextRootElement.getElementsByClassName("textElement")[0];
        var newWidth = textElement.getComputedTextLength();
        var vb=[0, 0, newWidth+190, 200];
        speechbubble.setAttribute("viewBox", vb.join(" ") );

        var original_d = "M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z"
        var d = original_d.split(" ");
        var new_d = [];
        for (var i = 0; i < d.length; i++){
          switch(d[i]) {
            case 'M':
            case 'C':
            case 'L':
            case 'Z':
              new_d.push(d[i]);
              break;
            default:
              var coordinates = d[i].split(',');
              if (coordinates[0] < 50) {
                new_d.push(coordinates.join(","));
              } else {
                new_d.push([(parseFloat(coordinates[0]) + parseFloat(newWidth)).toString(), coordinates[1]].join(","));
              }
          }
        }
        var pathElement = discordTextRootElement.getElementsByClassName("pathElement")[0];
        pathElement.setAttribute("d", new_d.join(" "))
        var pathElementGroup = discordTextRootElement.getElementsByClassName("pathElementGroup")[0];
        pathElementGroup.setAttribute("transform", 'translate(' + (parseFloat(newWidth+190)).toString() + ', 0)')

      })
      this.$emit('htmlModified');
    },
    updateSVGContainer: function () {
    }
  },
  computed: {
  },
  watch: {
    standardText: function () {
      if (!this.isTyping) {
        this.typeText(0, this.standardText);
      } else {
        this.delay = 0;
        this.sleep(500).then(() => {
          this.delay = 60;
        })
      }
    }
  },
  created: function() {
    this.$nextTick( function () {
      this.$refs.discordLogoFromText.update();
      this.typeText(0, this.standardText);
    })
  }
}
</script>
<style>

.speechbubble {
position: relative;
transform: translateY(-50%);
}
.discordtext {
opacity: 0.75;
}
.discordtext:hover {
opacity: 1;
}
.discordtext a {
  text-decoration: none;
}

</style>
