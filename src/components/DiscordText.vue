<template>
  <div>
    <div class="discordtext">
      <a href="#" @click="updateSpeechBubble()">
        <DiscordSwirl :height="height *2" :width="height *2" :discordfill="discordfill" :discordcolor="discordcolor"/>
        <svg v-show="standardText" id="svgElement" class="speechbubble" :height="height" preserveAspectRatio="xMinYMin">
          <path transform="scale(-1,1)" id="pathElement" :fill="discordcolor" d="M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z"/>
          <text :fill="discordfill" font-size="90" id="textElement" x="95" y="57%">{{standardText}}</text>
        </svg>
      </a>
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
      isTyping: false,
      standardText: '',
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
    }
	},
  methods: {
    updateSpeechBubble: function () {
      var myArray = ['Code generator for speech bubble coming soon......',
                    'Click top right GitHub corner to fork!',
                    'Animation or style ideas? Raise an issue on GitHub!',
                    'Created with ♥ by NNTin.',
                    'Click on the Discord corner to get the code.',
                    "All discord logos are clickable and will not redirect you!"];
      var rand = myArray[Math.floor(Math.random() * myArray.length)];

      if (!this.isTyping) {
        this.isTyping = true;
        this.standardText = '';
        this.typeText(rand, 0);
      }
    },
    typeText: function(text, position) {
      if (position < text.length) {
        this.standardText += text.charAt(position)
        this.sleep(60).then(() => {
            this.typeText(text, position+1);
        });
      } else {
        this.isTyping = false;
      }
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

        var d = "M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z"
        var d = d.split(" ");
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
      this.updateSVG();
    }
  },
  created: function() {
    this.updateSVG();
    // setInterval(this.updateSpeechBubble, 5000);
    this.updateSpeechBubble()
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


</style>
