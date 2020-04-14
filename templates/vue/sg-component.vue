<template>
  <div>
    <h1>{{sentenceCase componentName}}</h1>

    <s-g-usage
      headline="Standard">
      <{{kebabCase componentName}}></{{kebabCase componentName}}>
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
    return {};
  },
};
</script>

<style scoped>
</style>
