<template>
  <div id="app">
    <h1>Farben</h1>
    <s-g-colors></s-g-colors>
    <ul
      class="sg-colors">
      <li
        class="sg-colors__item"
        :style="{ background: declaration.value }"
        v-for="(declaration, index) in colors"
        :key="index">
        {{ declaration.name }}
      </li>
    </ul>
    <s-g-usage
      headline="Animation Satellite">
      <animation-satellite />
    </s-g-usage>

    <s-g-usage
      headline="App Rating"
      :is-inverted="true">
      <app-rating></app-rating>
    </s-g-usage>

    <s-g-usage
      headline="App Overlay">
      <app-overlay :isVisible="false"></app-overlay>
    </s-g-usage>

  </div>
</template>

<script>
import Vue from 'vue';
import {
  AnimationSatellite,
  AppRating,
  AppOverlay,
} from '@/entry';
import colors from '!raw-loader!@/styles/colors.scss';

const getColorDefinitionsFromString = (string = colors, separator = ';') => string
  // replace whitespace
  .replace(/\s/g, '')
  // replace line breaks
  .replace(/(?:\r\n|\r|\n)/g, '')
  .split(separator)
  // remove empty
  .filter((notEmpty) => notEmpty);

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AnimationSatellite,
    AppRating,
    AppOverlay,
    SGColors: () => import('./components/SGColors.vue'),
    SGUsage: () => import('./components/SGUsage.vue'),
  },
  data() {
    return {
      headline: 'gg',
    };
  },
  computed: {
    colors() {
      return [...getColorDefinitionsFromString()]
        // get declaration array from string
        .map((declaration) => getColorDefinitionsFromString(declaration, ':'))
        // convert array to object
        // .map((declarationArray) => ({ ...declarationArray }));
        .map((declarationArray) => ({
          name: declarationArray[0],
          value: declarationArray[1],
        }));
    },
  },
});
</script>

<style scoped>
#app {
  color: black;
}
</style>
