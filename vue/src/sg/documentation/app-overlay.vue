<template>
  <div>
    <h1>App Overlay</h1>

    <s-g-usage
      headline="Standard">
      <app-overlay
        headline="optionale Überschrift"
        :isVisible="showModal">
        <p>Whats up?</p>
      </app-overlay>
      <button @click="showModal = !showModal">Zeige Modal</button>
    </s-g-usage>
  </div>
</template>

<script>
import {
  AppOverlay,
} from '@/entry';

export default {
  name: 'DocuAppOverlay',
  navName: 'AppOverlay',
  components: {
    AppOverlay,
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
</style>
