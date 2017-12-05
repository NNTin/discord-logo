<template>
  <svg :color="discordcolor" :fill="discordfill" :width="width" :height="height" class="discord-logo-container" viewBox="0 0 48 48">
    <rect width="100%" height="100%" fill="currentfill" />
    <defs>
      <g>
        <path id="discord-logo" fill="currentcolor" d="m40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4s-10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.681,0.537 -10,4 -10,4s-5.121,7.425 -6,22c5.162,5.953 13,6 13,6l1.639,-2.185c-2.782,-0.967 -5.924,-2.694 -8.639,-5.815c3.238,2.45 8.125,5 16,5s12.762,-2.55 16,-5c-2.715,3.121 -5.857,4.848 -8.639,5.815l1.639,2.185c0,0 7.838,-0.047 13,-6c-0.879,-14.575 -6,-22 -6,-22zm-22.5,18c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4zm13,0c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4z"
        />
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
    <a v-if="customLink" :href="customLink">
      <rect width="100%" height="100%" fill-opacity="0" />
    </a>
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
      default: 'swirl'
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.discord-logo {
  transform: scale(0.7);
  transform-origin: 24px 24px;
}

.discord-logo.rotateY-animation .discord-original {
  transition: transform 300ms linear;
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .rotateY-animation .discord-original {
  transform: rotateY(180deg);
}

.discord-logo.rotateX-animation .discord-original {
  transition: transform 300ms linear;
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .rotateX-animation .discord-original {
  transform: rotateX(360deg);
}

.discord-logo.shake-animation .discord-original {
}

.discord-logo-container:hover .shake-animation .discord-original {
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

.discord-logo.swirl-animation .discord-outer-layer {
  transition: transform 800ms cubic-bezier(0.7, 1, 0.7, 1);
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .swirl-animation .discord-outer-layer {
  transform: scale(1.5) rotate(360deg);
}

.discord-logo.swirl-animation .discord-middle-layer {
  transition: transform 800ms cubic-bezier(0.5, 1, 0.5, 1);
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .swirl-animation .discord-middle-layer {
  transform: scale(1.4) rotate(360deg);
}

.discord-logo.swirl-animation .discord-inner-layer {
  transition: transform 800ms cubic-bezier(0.3, 1, 0.3, 1);
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .swirl-animation .discord-inner-layer {
  transform: scale(1.3) rotate(360deg);
}

.discord-logo.swirl-animation .discord-original {
  transition: visibility 0ms;
  transition-delay: 800ms;
}

.discord-logo-container:hover .swirl-animation .discord-original {
  visibility: hidden;
  transition-delay: 0ms;
}
</style>
