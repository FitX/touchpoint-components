<template>
  <div>
    <h1>{{sentenceCase componentName}}</h1>

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
  {{pascalCase componentName}},
} from '@/entry';

export default {
  name: 'Docu{{pascalCase componentName}}',
  navName: '{{pascalCase componentName}}',
  components: {
    {{pascalCase componentName}},
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
  data() {
    return {
      exampleData: true,
    };
  },
  computed: {
    examples() {
      // get Data from Vue Data
      const { exampleData } = this;
      const items = [
        {
          headline: 'Standard',
          template: `<{{kebabCase componentName}} :is-example="${exampleData}"></{{kebabCase componentName}}>`,
        },
      ];
      return items.map((item) => ({ ...item, components: { {{pascalCase componentName}} } }));
    },
  },
};
</script>

<style scoped>
</style>
