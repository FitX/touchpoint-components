<template>
  <div>
    <h1>Redirect Timer</h1>

    <s-g-usage
      headline="Standard"
      description="Redirect nach 20 Sekunden auf die Startseite">
      <redirect-timer
        :countdown="countdown"
        :url="url"
        :show="show">
        optionaler Slot Content z.B. zurück in
      </redirect-timer>
      <label>
        <input
          type="checkbox"
          v-model="show">
        Zeige Timer</label>
      <label>
        <input
          type="text"
          v-model="url">
        Url ändern</label>
      <label>
        <input
          type="number"
          v-model.number="countdown">
        Zeit ändern</label>
    </s-g-usage>
  </div>
</template>

<script>
import {
  RedirectTimer,
} from '@/entry';

export default {
  name: 'DocuRedirectTimer',
  navName: 'RedirectTimer',
  components: {
    RedirectTimer,
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
  data() {
    return {
      countdown: 60,
      url: '/',
      show: true,
    };
  },
};
</script>

<style scoped>
</style>
