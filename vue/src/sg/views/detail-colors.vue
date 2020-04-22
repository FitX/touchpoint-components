<template>
  <div class="detail">
    <s-g-nav></s-g-nav>
    <div class="detail__content">
      <s-g-colors></s-g-colors>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
    SGNav: () => import('@/sg/components/SGNav.vue'),
    SGColors: () => import('@/sg/components/SGColors.vue'),
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
    codeLink() {
      const uri = 'https://github.com/FitX/touchpoint-components/tree/master/vue/src/lib-components';
      return `${uri}/${this.name}.vue`;
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

.external-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-text);

  &__icon {
    width: 1rem;
    padding-right: 0.2rem;
  }
}
</style>
