<template>
<div
  :class="{ 'animation' : animation }"
  class="satellite">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<script>
export default {
  name: 'AnimationSatellite',
  props: {
    animation: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$satellite-size: 1em;
$satellite-move: $satellite-size*7;

.satellite {
  position: absolute;
  left: 50%; top: 50%;
  width: ($satellite-size * 4);
  height: ($satellite-size * 4);
  margin-left: -($satellite-size * 2);
  margin-top: -($satellite-size * 2);
  pointer-events: none;

  span {
    position: absolute;
    width: $satellite-size;
    height: $satellite-size;
    border-radius: 50%;
    margin-top: -$satellite-size/2;
    margin-left: -$satellite-size/2;
    transition: all ease .5s;
    transform-origin: center 0;
    transform: translate(0,0) scale(0);
    animation-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }

  &.animation {
    span {
      &:nth-child(1) {
        top: 0; left: 50%;
        background: rgb(152, 138, 222);
        animation-name: satellite-top;
      }

      &:nth-child(2) {
        top: 25%; left: 100%;
        background: rgb(222, 138, 160);
        animation-name: satellite-top-right;
      }

      &:nth-child(3) {
        top: 75%; left: 100%;
        background: rgb(138, 174, 222);
        animation-name: satellite-bottom-right;
      }

      &:nth-child(4) {
        top: 100%; left: 50%;
        background: rgb(138, 222, 173);
        animation-name: satellite-bottom;
      }

      &:nth-child(5) {
        top: 75%; left: 0;
        background: rgb(222, 197, 138);
        animation-name: satellite-bottom-left;
      }

      &:nth-child(6) {
        top: 25%; left: 0;
        background: rgb(138, 209, 222);
        animation-name: satellite-top-left;
      }
    }
  }
}

@keyframes satellite-top-left {
  0% {
    transform: scale(1) translate(0,0);
  }
  100% {
    transform: scale(0) translate(-2*$satellite-move/2.236,- $satellite-move/2.236);
  }
}

@keyframes satellite-top {
  0% {
    transform: scale(1) translate(0,0);
  }
  100% {
    transform: scale(0) translate(0, -$satellite-move);
  }
}

@keyframes satellite-top-right {
  0% {
    transform: scale(1) translate(0,0);
  }
  100% {
    transform: scale(0) translate(2*$satellite-move/2.236,- $satellite-move/2.236);
  }
}

@keyframes satellite-bottom-right {
  0% {
    transform: scale(1) translate(0,0);
  }
  100% {
    transform: scale(0) translate(2*$satellite-move/2.236, $satellite-move/2.236);
  }
}

@keyframes satellite-bottom {
  0% {
    transform: scale(1) translate(0,0);
  }
  100% {
    transform: scale(0) translate(0, $satellite-move);
  }
}

@keyframes satellite-bottom-left {
  0% {
    transform: scale(1) translate(0,0);
  }
  100% {
    transform: scale(0) translate(-2*$satellite-move/2.236, $satellite-move/2.236);
  }
}


</style>
