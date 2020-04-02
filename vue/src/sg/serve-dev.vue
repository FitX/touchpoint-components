<template>
  <div id="app">
    <s-g-usage
      headline="Farben">
      <s-g-colors></s-g-colors>
    </s-g-usage>

    <s-g-usage>
      <animation-satellite />
    </s-g-usage>

    <s-g-usage
      headline="Standard"
      :inverted="true">
      <app-rating></app-rating>
    </s-g-usage>

    <s-g-usage
      headline="Gut / Schlecht und modifier: Block"
      :inverted="true">
      <app-rating
        description="Mit einer Beschreibung"
        modifier="block"
        :numberOfVotings="2"></app-rating>
    </s-g-usage>

    <s-g-usage
      headline="3 Möglichkeiten mit Beschreibung"
      :inverted="true">
      <app-rating
        description="Mit einer Beschreibung"
        :numberOfVotings="3"></app-rating>
    </s-g-usage>

    <s-g-usage>
      <app-overlay
        headline="optionale Überschrift"
        :isVisible="showModal">
        <p>Whats up?</p>
      </app-overlay>
      <button @click="showModal = !showModal">Zeige Modal</button>
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
      showModal: false,
    };
  },
});
</script>

<style scoped>
#app {
  color: black;
  font-family: 'Niveau Grotesk',
  'Open Sans', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;;
}
</style>
