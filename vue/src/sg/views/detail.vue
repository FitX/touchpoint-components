<template>
  <div class="detail">
    <s-g-nav></s-g-nav>
    <component
      :is="detailComponent"
      :key="name"
      class="detail__content"
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

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.detail {
  display: grid;
  grid: 'nav' auto
        'content' 1fr / 1fr;
  grid-gap: 2rem;

  @media (min-width: 800px) {
    grid: 'nav content' 1fr / 200px 1fr;
  }
}
</style>
