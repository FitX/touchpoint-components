<template>
<div class="{{kebabCase componentName}}">
    <h1>{{sentenceCase componentName}}</h1>
</div>
</template>

<script>
export default {
  name: '{{pascalCase componentName}}',
};
</script>

<style lang="scss" scoped>
// @use currently only with dart-sass
// @use '~@/assets/styles/mixins.scss' as mixin;
@import '../styles/mixins.scss';
@import '../styles/colors.scss';
</style>
