<template>
<section
  :class="[{ 'sg-usage--inverted' : isInverted }]"
  class="sg-usage">
  <header class="sg-usage__header">
    <h1 class="sg-usage__headline">
      {{ componentName }}
      <span v-if="headline">- {{ headline }}</span></h1>
    <button
      class="sg-usage__toggle-inverted"
      @click="toggleInverted">
      {{ isInverted ? 'zur Normalen Ansicht' : 'zur Invertierten Ansicht' }}
    </button>
  </header>
  <p>{{ description }}</p>
  <div class="sg-usage__component">
    <slot></slot>
  </div>
</section>
</template>

<script>
export default {
  name: 'SGUsage',
  props: {
    headline: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    componentName() {
      return this.$slots?.default[0]?.componentOptions?.tag;
    },
  },
  data() {
    return {
      isInverted: this.inverted,
    };
  },
  methods: {
    toggleInverted() {
      this.isInverted = !this.isInverted;
    },
  },
};
</script>

<style lang="scss" scoped>
.sg-usage {
  --color-background: #fff;
  --color-text: #000;
  --spacing: 1rem;

  &--inverted {
    --color-background: #000;
    --color-text: #fff;
  }

  padding: var(--spacing);
  margin-bottom: calc(4 * var(--spacing));
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);

  &__header {
    display: grid;
    grid-template-columns: 1fr auto;
    margin: calc(var(--spacing) * -1) calc(var(--spacing) * -1) 0;
    padding-left: var(--spacing);
    color: #fff;

    background:
      radial-gradient(black 15%, transparent 16%) 0 0,
      radial-gradient(black 15%, transparent 16%) 8px 8px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
    background-color:#282828;
    background-size:16px 16px;

    position: sticky;
    top: 0;
  }

  &__toggle-inverted {
    color: #fff;
  }

  &__component {
    background: var(--color-background);
    color: var(--color-text);
  }
}
</style>
