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
      headline="Full">
      <button-call-to-action
        :additionalStyles="{ '--btn-color-bg': 'red' }"
        modifier="full">click mich</button-call-to-action>
    </s-g-usage>

    <s-g-usage
      headline="Custom Styles">
      <button-call-to-action
        :additionalStyles="{
        '--btn-color-bg': 'white',
        '--btn-color-text': 'black',
        '--btn-height': '2rem',
      }">click mich</button-call-to-action>
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
