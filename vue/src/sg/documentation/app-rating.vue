<template>
  <div>
    <h1>App Rating</h1>

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
  </div>
</template>

<script>
import {
  AppRating,
} from '@/entry';

export default {
  name: 'DocuAppRating',
  navName: 'AppRating',
  components: {
    AppRating,
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
};
</script>

<style scoped>
</style>
