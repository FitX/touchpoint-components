<template>
<transition name="modal-fade">
  <div
    v-show="showOverlay"
    :style="cssVars"
    :class="{ 'overlay--full': isFull }"
    class="overlay">
    <div
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      class="overlay__inner">
      <h1
        class="overlay__headline"
        id="modalTitle">{{ headline }}</h1>
      <button
        class="overlay__close"
        @click="close"
        aria-label="Overlay schliessen">
        <icon-close
          class="overlay__close-icon"></icon-close>
      </button>
      <div
        id="modalDescription"
        class="overlay__content">
        <slot></slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import IconClose from '../img/icon-close.svg';

export default {
  name: 'AppOverlay',
  components: {
    IconClose,
  },
  props: {
    headline: {
      type: String,
      default: null,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    additionalStyles: {
      type: Object,
      default: () => ({}),
    },
    isFull: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showOverlay: this.isVisible,
      defaultStyles: {
        '--overlay-color-text': '#fff',
        '--overlay-color-background': this.isFull ? 'transparen' : '#1a1a1a',
        '--overlay-headline-size': '4rem',
        '--overlay-close-size': '50px',
        '--overlay-border-radius': '1em',
        '--overlay-padding': '1em',
        '--overlay-width': this.isFull ? '100%' : '90vw',
        '--overlay-max-width': this.isFull ? 'none' : '1930px',
        '--overlay-content-height': this.isFull ? '1fr' : 'auto',
      },
    };
  },
  computed: {
    cssVars() {
      return {
        ...this.defaultStyles,
        ...this.additionalStyles,
      };
    },
  },
  methods: {
    close() {
      this.showOverlay = false;
      this.$emit('close');
    },
  },
  watch: {
    showOverlay(isOpen) {
      if (isOpen) {
        document.body.classList.add('overlay-open');
      } else {
        document.body.classList.remove('overlay-open');
      }
    },
    isVisible(isOpen) {
      this.showOverlay = isOpen;
    },
  },
};
</script>

<style lang="scss">
.overlay-open {
  overflow: hidden;
}
</style>
<style scoped lang="scss">
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.9);
  z-index: 100;
  color: var(--overlay-color-text);

  &--full {
    align-items: start;
  }

  &__inner {
    width: var(--overlay-width);
    max-width: var(--overlay-max-width);
    display: grid;
    grid:
      '. close' auto
      'headline headline' auto
      'content content' var(--overlay-content-height)
        / 1fr auto;
    max-height: 100vh;
    overflow: auto;
    background: var(--overlay-color-background);
    border-radius: var(--overlay-border-radius);
    padding: var(--overlay-padding);
  }

  &__content {
    grid-area: content;
  }

  &__headline {
    grid-area: headline;
    font-size: var(--overlay-headline-size);
    font-weight: 700;
  }

  &__close {
    grid-area: close;
    background: none;
    border: 0;
    appearance: none;
    align-self: start;
    margin-bottom: 2em;
  }

  &__close-icon {
    width: var(--overlay-close-size);
  }
}
</style>
