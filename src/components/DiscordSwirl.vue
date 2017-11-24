<template>
  <svg :width="width" :height="height" xmlns:xlink="http://www.w3.org/1999/xlink" class="discord-logo-container" viewBox="0 0 48 48">
    <defs>
      <g>
        <path id="discord-logo" :fill="discordcolor" d="m40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4s-10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.681,0.537 -10,4 -10,4s-5.121,7.425 -6,22c5.162,5.953 13,6 13,6l1.639,-2.185c-2.782,-0.967 -5.924,-2.694 -8.639,-5.815c3.238,2.45 8.125,5 16,5s12.762,-2.55 16,-5c-2.715,3.121 -5.857,4.848 -8.639,5.815l1.639,2.185c0,0 7.838,-0.047 13,-6c-0.879,-14.575 -6,-22 -6,-22zm-22.5,18c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4zm13,0c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4z"
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
    <g class="discord-logo">
      <use class="discord-original" href="#discord-logo" />
      <use class="discord-outer-layer" href="#discord-logo" mask="url(#mask-outer-layer)" />
      <use class="discord-middle-layer" href="#discord-logo" mask="url(#mask-middle-layer)" />
      <use class="discord-inner-layer" href="#discord-logo" mask="url(#mask-inner-layer)" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'DiscordSwirl',
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

.discord-logo .discord-outer-layer {
  transition: transform 800ms cubic-bezier(0.7, 1, 0.7, 1);
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .discord-outer-layer {
  transform: scale(1.5) rotate(360deg);
}

.discord-logo .discord-middle-layer {
  transition: transform 800ms cubic-bezier(0.5, 1, 0.5, 1);
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .discord-middle-layer {
  transform: scale(1.4) rotate(360deg);
}

.discord-logo .discord-inner-layer {
  transition: transform 800ms cubic-bezier(0.3, 1, 0.3, 1);
  transform-origin: 50% 50%;
}

.discord-logo-container:hover .discord-inner-layer {
  transform: scale(1.3) rotate(360deg);
}

.discord-logo .discord-original {
  transition: visibility 0ms;
  transition-delay: 800ms;
}

.discord-logo-container:hover .discord-original {
  visibility: hidden;
  transition-delay: 0ms;
}
</style>
