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
    },
    {
      type: 'modify',
      path: 'vue/src/lib-components/index.js',
      pattern: /(\/\/ -- KEEP LINES FOR GENERATOR APPEND --)/gi,
      template: '$1\r\nexport { default as {{pascalCase componentName}} } from \'./{{kebabCase componentName}}.vue\';'
    }]
  });
};
