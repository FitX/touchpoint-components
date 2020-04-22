<template>
  <div>
    <h1>App Rating</h1>
    <s-g-usage
      v-for="(example, index) in examples"
      :key="index"
      :headline="example.headline"
      :code="example.template"
      :inverted="true">
      <component :is="example"></component>
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
  data() {
    return {
      foo: 2,
    };
  },
  computed: {
    examples() {
      const { foo } = this;
      const items = [
        {
          headline: 'Standard',
          template: '<app-rating></app-rating>',
        },
        {
          headline: 'Gut / Schlecht und modifier: Block',
          template:
`<app-rating
  description="Mit einer Beschreibung"
  modifier="block"
  :numberOfVotings="2"></app-rating>`,
        },
        {
          components: {
            AppRating,
          },
          headline: '3 Möglichkeiten mit Beschreibung',
          template:
`<app-rating
  description="Mit einer Beschreibung"
  :numberOfVotings="${foo}"></app-rating>`,
        },
      ];
      return items.map((item) => ({ ...item, components: { AppRating } }));
    },
  },
};
</script>

<style scoped>
</style>
