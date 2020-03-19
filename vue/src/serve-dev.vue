<script>
import Vue from 'vue';
import {
  AnimationSatellite,
  AppRating,
} from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AnimationSatellite,
    AppRating,
  },
});
</script>

<template>
  <div id="app">
    <h2>Animation Satellite</h2>
    <animation-satellite />
    <h2>App Rating</h2>
    <app-rating></app-rating>
  </div>
</template>

<style scoped>
#app {
  color: black;
}
</style>
