<template>
  <div>
    <div class="discordtext">
      <DiscordSwirl :height="height *2" :width="height *2" :discordfill="discordfill" :discordcolor="discordcolor"/>
      <svg id="svgElementContainer" :height="height">  <!--viewBox="0 0 185 200"-->
        <g>
          <svg id="svgElement2" preserveAspectRatio="none" :x="53" :height="200" viewBox="0 0 100 200">
              <path d="m100,0l-100,0l0,176.4l100,0l0,-176.4z" fill="white" id="svg_1"/>
          </svg>
          <svg>
            <path transform="scale(-1,1)" transform-origin="center" fill="white" d="m39.5,0l-39.5,0l0,176.4l18.9,0l-5.3,-18.5l12.8,11.9l12.1,11.2l21.5,19l0,-179.4c0,-11.4 -9.2,-20.6 -20.5,-20.6z" />
          </svg>
          <svg :x="width">
            <path transform="scale(-1,1)" transform-origin="center" fill="white" d="m55,0l-34.5,0c-11.3,0 -20.5,9.2 -20.5,20.6l0,135.2c0,11.4 9.2,20.6 20.5,20.6l34.5,0l0,-176.4z" />
          </svg>
          <text :fill="discordfill" font-size="90" id="textElement2" x="50" y="57%">{{standardText}}</text>
        </g>
      </svg>
    </div>
    <!-- <input type="text" v-model="standardText" /> -->
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
      standardText: "code generator for speech bubble coming soon.......",
      width: 0
    }
  },
	props: {
    height: {
      type: Number,
      default: 30
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
    updateSVG: function () {
      this.$nextTick(function () {
        var svgElement = document.getElementById("svgElement2");
        var textElement = document.getElementById("textElement2");
        textElement.textContent = this.standardText;
        this.width = Math.max(textElement.getComputedTextLength() + 60, this.height);
        svgElement.setAttribute("width", this.width);
        var svgElementContainer = document.getElementById("svgElementContainer");
        var vb=[0, 0, this.width+100, 200];
        svgElementContainer.setAttribute("viewBox", vb.join(" ") );
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
  }
}
</script>
<style>

position: relative;
top: 50%;
transform: translateY(-50%);
}

</style>
