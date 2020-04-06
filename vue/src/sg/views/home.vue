<template>
  <main>
    <header>
      <s-g-nav :backlink="false"></s-g-nav>
    </header>
    <h1>Styleguide</h1>
  </main>
</template>

<script>
export default {
  name: 'Home',
  components: {
    SGNav: () => import('@/sg/components/SGNav.vue'),
  },
};
</script>

<style scoped>
</style>
