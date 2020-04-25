<template>
<nav class="nav">
  <ul class="nav-list">
    <li class="nav__item nav__item--no-link">v.{{ version }}</li>
    <li
      class="nav__item"
      v-if="backlink"><a @click="$router.push('/')">🏠 Übersicht</a></li>
    <li
      class="nav__item">
      <router-link :to="{ name: 'detail-colors' }">🎨 Farben</router-link>
    </li>
    <!-- <li
      class="nav__item"
      v-if="backlink"><a @click="$router.go(-1)">⬅️ zurück</a></li> -->
    <li class="nav__item nav__item--no-link">
      Komponenten
      <ul>
        <router-link
          tag="li"
          class="nav__item"
          v-for="(nav, index) in navigation"
          :key="index"
          :to="{ name: 'detail', params: { component: transformUrl(nav.navName) } }" >
          {{ nav.navName }}
        </router-link>
      </ul>
    </li>
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
  props: {
    backlink: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    navigation() {
      const components = require.context('@/sg/documentation/', false, /.vue$/);
      return components.keys().map((x) => components(x).default);
    },
    version() {
      return process.env.VERSION;
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
@import '@/styles/colors.scss';

.nav {
  --color-background: #fff;
  --color-text: #000;
  --spacing: 1rem;

  font-size: 0.75rem;

  &--inverted {
    --color-background: #000;
    --color-text: #fff;
  }

  &-list {
    @include list-unstyled();
  }

  &__item {
    padding: 1em;
    color: $color-ash;

    &:not(&--no-link):hover {
      background: rgba($color-silver, 0.25);
      cursor: pointer;
    }
  }

  ul {
    list-style: none;

    ul {
      padding-left: 0;
    }
  }
}
</style>
