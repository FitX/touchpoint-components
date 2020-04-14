<template>
  <div>
    <h1>Button call to action</h1>

    <s-g-usage
      headline="Standard">
      <button-call-to-action>click mich</button-call-to-action>
    </s-g-usage>

    <s-g-usage
      headline="Small">
      <button-call-to-action
        modifier="small">click mich</button-call-to-action>
    </s-g-usage>

    <s-g-usage
      headline="Inline">
      <button-call-to-action
        modifier="inline">click mich</button-call-to-action>
    </s-g-usage>
  </div>
</template>

<script>
import {
  ButtonCallToAction,
} from '@/entry';

export default {
  name: 'DocuButtonCallToAction',
  navName: 'ButtonCallToAction',
  components: {
    ButtonCallToAction,
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
