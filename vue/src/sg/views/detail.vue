<template>
  <div id="detail">
    <header>
      <a @click="$router.go(-1)">⬅️ zurück</a>
      <nav>
        <ul>
          <li
            v-for="(nav, index) in navigation"
            :key="index">
            {{ nav.navName }} {{ nav.__file }}
          </li>
        </ul>
      </nav>
    </header>
    <component
      :is="detailComponent"
      class="rating__icon"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {},
  data() {
    return {
      detailComponent: {},
    };
  },
  computed: {
    navigation() {
      const components = require.context('@/sg/documentation/', false, /.vue$/);
      return components.keys().map((x) => components(x).default);
    },
  },
  created() {
    this.detailComponent = () => import(`@/sg/documentation/${this.$route.params.component}.vue`)
      .then((m) => m.default)
      // .catch((err) => import ('404_component_does_not_exist'));
      .catch(() => this.$router.push('/'));
  },
};
</script>

<style scoped>
</style>
