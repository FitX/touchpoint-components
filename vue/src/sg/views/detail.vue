<template>
  <div id="detail">
    <header>
      <s-g-nav></s-g-nav>
    </header>
    <component
      :is="detailComponent"
      :key="name"
      class="rating__icon"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
    SGNav: () => import('@/sg/components/SGNav.vue'),
  },
  data() {
    return {
      // name: this.$route.params.component,
      detailComponent: {},
    };
  },
  computed: {
    /* detailComponent() {
      return () => this.importComponent(this.name);
    }, */
    name() {
      return this.$route.params.component;
    },
  },
  created() {
    this.changeComponent();
  },
  watch: {
    name() {
      this.changeComponent();
    },
  },
  methods: {
    importComponent(name = this.name) {
      return import(`@/sg/documentation/${name}.vue`)
        .then((m) => m.default)
        // .catch((err) => import ('404_component_does_not_exist'));
        .catch(() => this.$router.push('/'));
    },
    changeComponent() {
      this.detailComponent = () => this.importComponent();
    },
  },
};
</script>

<style scoped>
</style>
