<template>
  <div>
    <div class="discordtext">
      <a v-if="customLink" :href="this.customLink">
        <DiscordSwirl :height="height *2" :width="height *2" :discordfill="discordfill" :discordcolor="discordcolor"/>
        <svg v-show="standardText" id="svgElement" class="speechbubble" :height="height" preserveAspectRatio="xMinYMin">
          <path transform="scale(-1,1)" id="pathElement" :fill="discordcolor" d="M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z"/>
          <text :fill="discordfill" font-size="90" id="textElement" x="95" y="57%">{{bubbleText}}</text>
        </svg>
      </a>
      <div v-else>
        <DiscordSwirl :height="height *2" :width="height *2" :discordfill="discordfill" :discordcolor="discordcolor"/>
        <svg v-show="standardText" id="svgElement" class="speechbubble" :height="height" preserveAspectRatio="xMinYMin">
          <path transform="scale(-1,1)" id="pathElement" :fill="discordcolor" d="M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z"/>
          <text :fill="discordfill" font-size="90" id="textElement" x="95" y="57%">{{bubbleText}}</text>
        </svg>
      </div>
    </div>
    <!-- <br/>
    <input type="text" v-model="standardText" /> -->
  </div>
</template>

<script>
import DiscordSwirl from '../components/DiscordSwirl.vue'

export default {
  name: 'DiscordText',
  components: {
    DiscordSwirl
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
      default: ''//https://discord.gg/gDHs8AV
    },
    standardText: {
      type: String,
      default: 'Join us on Discord!'
    }
	},
  methods: {
    typeText: function(position, text) {
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
      this.updateSVG();
    },
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    updateSVG: function () {
      this.$nextTick(function () {
        var svgElement = document.getElementById("svgElement");
        var textElement = document.getElementById("textElement");
        var newWidth = textElement.getComputedTextLength();
        var vb=[0, 0, newWidth+190, 200];
        svgElement.setAttribute("viewBox", vb.join(" ") );

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
        var pathElement = document.getElementById("pathElement");
        pathElement.setAttribute("d", new_d.join(" "))
        pathElement.setAttribute("transform-origin", (parseFloat(newWidth+190)/2).toString() + "100px")

      })
    },
    updateSVGContainer: function () {
    }
  },
  computed: {
    getTextHeight: {
      get: function () {
        return this.height/2
      }
    }
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
    this.typeText(0, this.standardText);
  }
}
</script>
<style>

.speechbubble {
position: relative;
top: 50%;
transform: translateY(-50%);

}
.discordtext {
opacity: 0.75;
display: inline-block
}
.discordtext:hover {
opacity: 1;
}
.discordtext a {
  text-decoration: none;
}

</style>
