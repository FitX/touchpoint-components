<template>
  <div>
    <h1>{{sentenceCase componentName}}</h1>

    <s-g-usage
      v-for="(example, index) in examples"
      :key="index"
      :headline="example.headline"
      :code="example.template"
      :example-output="example.model"
      :inverted="true">
      <component :is="example"></component>
    </s-g-usage>
  </div>
</template>

<script>
import {
  {{pascalCase componentName}},
} from '@/entry';

const model = {
  exampleData: true,
};

export default {
  name: 'Docu{{pascalCase componentName}}',
  navName: '{{pascalCase componentName}}',
  components: {
    {{pascalCase componentName}},
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
  data() {
    return model;
  },
  computed: {
    examples() {
      // get Data from Vue Data
      const { exampleData } = model;
      const items = [
        {
          headline: 'Standard',
          data() {
            return model;
          },
          // display 2way bindings of data()
          model: exampleData,
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
