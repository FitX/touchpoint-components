<template>
<button
  class="btn"
  :class="[ modifier ? `btn--${modifier}` : null ]"
  :style="cssVars">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'ButtonCallToAction',
  props: {
    modifier: {
      type: String,
      default: null,
      validator: (value) => {
        const acceptedValues = ['small', 'full'];
        return acceptedValues.includes(value);
      },
    },
    additionalStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultStyles: {},
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
};
</script>

<style lang="scss" scoped>
// @use currently only with dart-sass
// @use '~@/assets/styles/mixins.scss' as mixin;
@import '../styles/mixins.scss';
@import '../styles/colors.scss';

.btn {
  @include btn-reset();
  --btn-color-bg: var(--color-orange, #{$color-orange});
  --btn-color-text: var(--color-white, #{$color-white});
  --btn-font-size: var(--font-size-normal);
  --btn-height: 5rem;
  --btn-width: 28.125rem;
  --btn-small-modifier-scale: 0.78;

  font-size: var(--btn-font-size);
  display: inline-block;
  background: var(--btn-color-bg);
  color: var(--btn-color-text);
  height: var(--btn-height);
  max-width: 100%;
  width: var(--btn-width);
  border-radius: 0.625rem;

  &--full {
    width: 100%;
  }

  &--small {
    height: calc(var(--btn-height) * var(--btn-small-modifier-scale));
    max-width: calc(var(--btn-width) * var(--btn-small-modifier-scale));
    font-size: calc(var(--btn-font-size) * var(--btn-small-modifier-scale));
  }
}
</style>
