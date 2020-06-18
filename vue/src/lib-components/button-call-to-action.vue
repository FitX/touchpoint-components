<template>
<button
  class="btn"
  :class="modifierClasses"
  :style="cssVars">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'ButtonCallToAction',
  props: {
    modifier: {
      type: [String, Array],
      default: null,
      validator: (value) => {
        const acceptedValues = ['small', 'full', 'special-case-1'];
        if (typeof value === 'string') {
          return acceptedValues.includes(value);
        }
        const checkArray = [];
        value.forEach((item) => {
          checkArray.push(acceptedValues.includes(item));
        });
        return checkArray.every((item) => item);
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
    modifierClasses() {
      if (this.modifier) {
        const classArray = (typeof this.modifier === 'string')
          ? new Array(this.modifier)
          : [...this.modifier];
        return classArray.map((modifier) => `btn--${modifier}`);
      }
      return null;
    },
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
  --btn-width: 100%;
  --btn-small-modifier-scale: 0.78;

  @media (min-width: 28.125rem) {
    --btn-width: 28.125rem;
  }

  font-size: var(--btn-font-size);
  display: inline-block;
  background: var(--btn-color-bg);
  color: var(--btn-color-text);
  height: var(--btn-height);
  max-width: var(--btn-width);
  width: var(--btn-width);
  border-radius: 0.625rem;
  padding: 0 1em;

  &--full {
    --btn-width: 100%;
  }

  &--small {
    height: calc(var(--btn-height) * var(--btn-small-modifier-scale));
    max-width: calc(var(--btn-width) * var(--btn-small-modifier-scale));
    font-size: calc(var(--btn-font-size) * var(--btn-small-modifier-scale));
  }

  &--special-case-1 {
    --btn-color-bg: var(--color-white, #{$color-white});
    --btn-color-text: var(--color-black, #000);
  }
}
</style>
