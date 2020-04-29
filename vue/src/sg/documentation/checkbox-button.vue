<template>
  <div>
    <h1>Checkbox button</h1>

    <s-g-usage
      v-for="(example, index) in examples"
      :key="index"
      :headline="example.headline"
      :code="example.template"
      :example-output="example.model"
      :inverted="true">
      <component
        :is="example"></component>
    </s-g-usage>

    <table>
      <tr>
        <th>Array</th>
        <th>Boolean</th>
        <th>String</th>
        <th>No Value</th>
        <th>Object</th>
      </tr>

      <tr>
        <td>{{ array }}</td>
        <td>{{ boolean }}</td>
        <td>{{ string }}</td>
        <td>{{ obj }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {
  CheckboxButton,
} from '@/entry';

const model = {
  boolean: false,
  string: null,
  array: ['val 2'],
  obj: null,
  obj1: { name: 'obj1' },
  obj2: { name: 'obj2' },
};

export default {
  name: 'DocuCheckboxButton',
  navName: 'CheckboxButton',
  components: {
    CheckboxButton,
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
  data() {
    return model;
  },
  computed: {
    examples() {
      // get Data from Vue Data
      const {
        boolean,
        string,
        array,
        obj,
        obj1,
        obj2,
      } = model;
      const items = [
        {
          headline: 'Ohne Funktion',
          template: '<checkbox-button>Checkbox</checkbox-button>',
        },
        {
          headline: 'Boolean Mode',
          data() {
            return model;
          },
          model: boolean,
          template: `<checkbox-button
    label="On fire?"
    v-model="boolean"></checkbox-button>`,
        },
        {
          headline: 'String Mode',
          data() {
            return model;
          },
          model: string,
          template: `<checkbox-button
    label="get string"
    value="ok"
    v-model="string"></checkbox-button>`,
        },
        {
          headline: 'Array Mode',
          data() {
            return model;
          },
          model: array,
          template: `<div>
  <checkbox-button
      value="val 1"
      v-model="array">Press me</checkbox-button>
  <checkbox-button
      value="val 2"
      v-model="array">Or me</checkbox-button>
</div>`,
        },
        {
          headline: 'Object Mode',
          data() {
            return model;
          },
          model: obj,
          template: `<div>
  <checkbox-button
      :value="obj1"
      v-model="obj">Press me</checkbox-button>
  <checkbox-button
      :value="obj2"
      v-model="obj">Or me</checkbox-button>
</div>`,
        },
      ];
      return items.map((item) => ({ ...item, components: { CheckboxButton } }));
    },
  },
};
</script>

<style scoped>
</style>
