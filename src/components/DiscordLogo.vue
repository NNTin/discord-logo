<template>
  <svg :color="discordcolor" :fill="discordfill" :width="width" :height="height" class="discord-logo-container" viewBox="0 0 48 48">
    <rect width="100%" height="100%" fill="currentfill" />
    <defs>
      <g>
        <defs>
          <path id="discord-logo-face" fill="currentcolor" d="M40,12C40,12,35.415,8.412,30,8L29.512,8.976C34.408,10.174,36.654,11.891,39,14C34.955,11.935,30.961,10,24,10S13.045,11.935,9,14C11.346,11.891,14.018,9.985,18.488,8.976L18,8C12.319,8.537,8,12,8,12S2.879,19.425,2,34C7.162,39.953,15,40,15,40L16.639,37.815C13.857,36.848,10.715,35.121,8,32C11.238,34.45,16.125,37,24,37S36.762,34.45,40,32C37.285,35.121,34.143,36.848,31.361,37.815L33,40C33,40,40.838,39.953,46,34C45.121,19.425,40,12,40,12Z" />
          <path id="discord-logo-face-left-eye" fill="currentfill" d="M17.5,30C15.567,30,14,28.209,14,26C14,23.791,15.567,22,17.5,22S21,23.791,21,26C21,28.209,19.433,30,17.5,30Z" />
          <path id="discord-logo-face-right-eye" fill="currentfill" d="M30.5,30C28.567,30,27,28.209,27,26C27,23.791,28.567,22,30.5,22S34,23.791,34,26C34,28.209,32.433,30,30.5,30Z" />
        </defs>
        <g id="discord-logo">
          <use href="#discord-logo-face" />
          <g id="discord-eyes">
            <use href="#discord-logo-face-left-eye" />
            <use href="#discord-logo-face-right-eye" />
          </g>
        </g>
        <mask id="mask-outer-layer">
          <rect width="100%" height="100%" fill="#FFFFFF" />
          <circle r="42%" cx="50%" cy="50%" fill="#000000" />
        </mask>
        <mask id="mask-middle-layer">
          <rect width="100%" height="100%" fill="#000000" />
          <circle r="43%" cx="50%" cy="50%" fill="#FFFFFF" />
          <circle r="32%" cx="50%" cy="50%" fill="#000000" />
        </mask>
        <mask id="mask-inner-layer">
          <rect width="100%" height="100%" fill="#000000" />
          <circle r="32%" cx="50%" cy="50%" fill="#FFFFFF" />
        </mask>
      </g>
    </defs>
    <g v-if="animationStyle == 'swirl'" class="discord-logo swirl-animation">
      <use class="discord-original" href="#discord-logo" />
      <use class="discord-outer-layer" href="#discord-logo" mask="url(#mask-outer-layer)" />
      <use class="discord-middle-layer" href="#discord-logo" mask="url(#mask-middle-layer)" />
      <use class="discord-inner-layer" href="#discord-logo" mask="url(#mask-inner-layer)" />
    </g>
    <g v-else-if="animationStyle == 'rotateY'" class="discord-logo rotateY-animation">
      <use class="discord-original" href="#discord-logo" />
    </g>
    <g v-else-if="animationStyle == 'rotateX'" class="discord-logo rotateX-animation">
      <use class="discord-original" href="#discord-logo" />
    </g>
    <g v-else-if="animationStyle == 'shake'" class="discord-logo shake-animation">
      <use class="discord-original" href="#discord-logo" />
    </g>
    <g v-else-if="animationStyle == 'softshake'" class="discord-logo softshake-animation">
      <use class="discord-original" href="#discord-logo" />
    </g>
    <g v-else class="discord-logo">
      <use class="discord-original" href="#discord-logo" />
    </g>
    <a v-if="customLink" :href="customLink">
      <rect width="100%" height="100%" fill-opacity="0" />
    </a>
    <animate v-if="isRainbow" fill="freeze" dur="4000ms" begin="0s" values="#DA7272;#DABF72;#A6DA72;#72DA8C;#72DADA;#728CDA;#A672DA;#DA72C0;#DA7272" calMode="linear" attributeName="color" repeatCount="indefinite" />
  </svg>
</template>

<script>
export default {
  name: 'DiscordLogo',
  data () {
    return {
    }
  },
	props: {
		width: {
			type: Number,
			default: 300
		},
		height: {
			type: Number,
			default: 300
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
      default: 'swirl'  //swirl rotateX rotateY shake softshake
    },
    isRainbow: {
      type: Boolean,
      default: false
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* discrd logo */
.discord-logo {
  transform: scale(0.7);
  transform-origin: 24px 24px;
}

/* ROTATEY animation */
.discord-logo.rotateY-animation .discord-original {
  transition: transform 300ms linear;
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .rotateY-animation .discord-original, .animated .rotateY-animation .discord-original {
  transform: rotateY(180deg);
}

/* ROTATEX animation */
.discord-logo.rotateX-animation .discord-original {
  transition: transform 300ms linear;
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .rotateX-animation .discord-original, .animated .rotateX-animation .discord-original {
  transform: rotateX(360deg);
}

/* SHAKE animation */
.discord-logo.shake-animation .discord-original {
}
.discord-logo-container:hover .shake-animation .discord-original, .animated .shake-animation .discord-original {
  animation-name:shake;
  animation-duration:100ms;
  animation-timing-function:ease-in-out;
  animation-iteration-count:infinite
}
@keyframes shake
{
  2% {transform:translate(.5px, 1.5px) rotate(1.5deg)}
  4% {transform:translate(.5px, 1.5px) rotate(1.5deg)}
  6% {transform:translate(-1.5px, -1.5px) rotate(-.5deg)}
  8% {transform:translate(.5px, -.5px) rotate(.5deg)}
  10% {transform:translate(.5px, 2.5px) rotate(.5deg)}
  12% {transform:translate(2.5px, 1.5px) rotate(-.5deg)}
  14% {transform:translate(-1.5px, 2.5px) rotate(-.5deg)}
  16% {transform:translate(-.5px, .5px) rotate(.5deg)}
  18% {transform:translate(.5px, 2.5px) rotate(1.5deg)}
  20% {transform:translate(-.5px, -.5px) rotate(.5deg)}
  22% {transform:translate(2.5px, .5px) rotate(-.5deg)}
  24% {transform:translate(-1.5px, -1.5px) rotate(.5deg)}
  26% {transform:translate(2.5px, -.5px) rotate(-.5deg)}
  28% {transform:translate(1.5px, -.5px) rotate(.5deg)}
  30% {transform:translate(.5px, .5px) rotate(-.5deg)}
  32% {transform:translate(-1.5px, .5px) rotate(-.5deg)}
  34% {transform:translate(.5px, 2.5px) rotate(-.5deg)}
  36% {transform:translate(-.5px, -.5px) rotate(1.5deg)}
  38% {transform:translate(-1.5px, -1.5px) rotate(.5deg)}
  40% {transform:translate(-1.5px, 1.5px) rotate(1.5deg)}
  42% {transform:translate(.5px, -1.5px) rotate(1.5deg)}
  44% {transform:translate(.5px, .5px) rotate(.5deg)}
  46% {transform:translate(-1.5px, -1.5px) rotate(1.5deg)}
  48% {transform:translate(.5px, -1.5px) rotate(.5deg)}
  50% {transform:translate(2.5px, .5px) rotate(-.5deg)}
  52% {transform:translate(-.5px, 2.5px) rotate(-.5deg)}
  54% {transform:translate(.5px, .5px) rotate(.5deg)}
  56% {transform:translate(-1.5px, 2.5px) rotate(.5deg)}
  58% {transform:translate(2.5px, .5px) rotate(.5deg)}
  60% {transform:translate(-1.5px, 2.5px) rotate(.5deg)}
  62% {transform:translate(1.5px, -.5px) rotate(-.5deg)}
  64% {transform:translate(1.5px, -1.5px) rotate(1.5deg)}
  66% {transform:translate(1.5px, -1.5px) rotate(-.5deg)}
  68% {transform:translate(.5px, 2.5px) rotate(-.5deg)}
  70% {transform:translate(1.5px, -1.5px) rotate(1.5deg)}
  72% {transform:translate(1.5px, 1.5px) rotate(-.5deg)}
  74% {transform:translate(-.5px, 1.5px) rotate(1.5deg)}
  76% {transform:translate(1.5px, 2.5px) rotate(.5deg)}
  78% {transform:translate(-.5px, .5px) rotate(.5deg)}
  80% {transform:translate(-1.5px, 2.5px) rotate(.5deg)}
  82% {transform:translate(.5px, 2.5px) rotate(-.5deg)}
  84% {transform:translate(2.5px, -.5px) rotate(.5deg)}
  86% {transform:translate(1.5px, .5px) rotate(.5deg)}
  88% {transform:translate(-.5px, -1.5px) rotate(-.5deg)}
  90% {transform:translate(1.5px, -.5px) rotate(1.5deg)}
  92% {transform:translate(.5px, 2.5px) rotate(.5deg)}
  94% {transform:translate(2.5px, .5px) rotate(-.5deg)}
  96% {transform:translate(.5px, 2.5px) rotate(.5deg)}
  98% {transform:translate(2.5px, -1.5px) rotate(1.5deg)}
  0%,100% {transform:translate(0, 0) rotate(0)}
}

/* SOFTSHAKE animation */
.discord-logo.softshake-animation .discord-original {
  transform-origin: 24px 24px;
}
.discord-logo-container:hover .softshake-animation .discord-original, .animated .softshake-animation .discord-original {
  animation: softshake 2000ms linear forwards;
}
@keyframes softshake
{
  0%,66%,100% {transform:rotate( 0deg)}
   3% {transform:rotate(-18.0deg)}
   6% {transform:rotate( 14.4deg)}
   9% {transform:rotate(-11.5deg)}
  12% {transform:rotate( 9.21deg)}
  15% {transform:rotate(-7.37deg)}
  18% {transform:rotate( 5.89deg)}
  21% {transform:rotate(-4.71deg)}
  24% {transform:rotate( 3.77deg)}
  27% {transform:rotate(-3.02deg)}
  30% {transform:rotate( 2.41deg)}
  33% {transform:rotate(-1.93deg)}
  36% {transform:rotate( 1.54deg)}
  39% {transform:rotate(-1.23deg)}
  42% {transform:rotate( 0.99deg)}
  45% {transform:rotate(-0.79deg)}
  48% {transform:rotate( 0.63deg)}
  51% {transform:rotate(-0.50deg)}
  54% {transform:rotate( 0.40deg)}
  57% {transform:rotate(-0.32deg)}
  60% {transform:rotate( 0.25deg)}
  63% {transform:rotate(-0.20deg)}
}

/* SWIRL animation */
.discord-logo.swirl-animation .discord-outer-layer {
  transition: transform 800ms cubic-bezier(0.7, 1, 0.7, 1);
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .swirl-animation .discord-outer-layer, .animated .swirl-animation .discord-outer-layer {
  transform: scale(1.5) rotate(360deg);
}
.discord-logo.swirl-animation .discord-middle-layer {
  transition: transform 800ms cubic-bezier(0.5, 1, 0.5, 1);
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .swirl-animation .discord-middle-layer, .animated .swirl-animation .discord-middle-layer {
  transform: scale(1.4) rotate(360deg);
}
.discord-logo.swirl-animation .discord-inner-layer {
  transition: transform 800ms cubic-bezier(0.3, 1, 0.3, 1);
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .swirl-animation .discord-inner-layer, .animated .swirl-animation .discord-inner-layer {
  transform: scale(1.3) rotate(360deg);
}
.discord-logo.swirl-animation .discord-original {
  transition: visibility 0ms;
  transition-delay: 800ms;
}
.discord-logo-container:hover .swirl-animation .discord-original, .animated .swirl-animation .discord-original {
  visibility: hidden;
  transition-delay: 0ms;
}
</style>
