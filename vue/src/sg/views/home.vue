<template>
  <div id="detail">
    <h1>Styleguide</h1>
    <nav>
      <router-link
        :to="{ name: 'detail', params: { component: 'app-rating' } }">App Rating</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
</style>
