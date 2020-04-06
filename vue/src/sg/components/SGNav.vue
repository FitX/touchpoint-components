<template>
<nav>
  <ul>
    <li><a @click="$router.go(-1)">⬅️ zurück</a></li>
    <router-link
      tag="li"
      v-for="(nav, index) in navigation"
      :key="index"
      :to="{ path: transformUrl(nav.navName) }" >
      {{ nav.navName }}
    </router-link>
  </ul>
</nav>
</template>

<script>
const camelToKebabCase = (str) => str
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
  .toLowerCase();

export default {
  name: 'SGNav',
  computed: {
    navigation() {
      const components = require.context('@/sg/documentation/', false, /.vue$/);
      return components.keys().map((x) => components(x).default);
    },
  },
  methods: {
    transformUrl(componentName) {
      return camelToKebabCase(componentName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

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
    @include btn-reset();

    color: #fff;
    padding: 0.25rem 1rem;
    margin: 0.25rem 1rem;
    align-self: center;
    background: black;
  }

  &__component {
    background: var(--color-background);
    color: var(--color-text);
  }
}
</style>
