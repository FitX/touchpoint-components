module.exports = function (plop) {
  plop.setGenerator('vue-component', {
    description: 'add new touchpoint component',
    prompts: [{
      type: 'input',
      name: 'componentName',
      message: 'component name please. e.g. my-button'
    }],
    actions: [{
      type: 'add',
      path: 'vue/src/lib-components/{{kebabCase componentName}}.vue',
      templateFile: 'templates/vue/component.vue'
    },
    {
      type: 'add',
      path: 'vue/src/sg/documentation/{{kebabCase componentName}}.vue',
      templateFile: 'templates/vue/sg-component.vue'
    }]
  });
};
