<template>
  <div>
    <h1>App Overlay</h1>

    <s-g-usage
      headline="Konfigurierbar"
      :code="modal.template"
      :example-output="modal.model"
      :inverted="true">
      <component
        :is="modal"></component>
      <div class="options">
        <button @click="model.showModal = !model.showModal">Zeige Modal</button>
        <label>
          Full Mode <input type="checkbox" v-model="model.fullMode">
        </label>
        <label>
          Headline <input type="text" v-model="model.headline">
        </label>
        <label>
          Headline Size <input type="text" v-model="model.styles['--overlay-headline-size']">
        </label>
        <label>
          Background Color <input type="text" v-model="model.styles['--overlay-color-background']">
        </label>
        <label>
          Width <input type="text" v-model="model.styles['--overlay-width']">
        </label>
        <label>
          Max-Width <input type="text" v-model="model.styles['--overlay-max-width']">
        </label>
      </div>
    </s-g-usage>
  </div>
</template>

<script>
import {
  AppOverlay,
} from '@/entry';

const removeEmpty = (original) => {
  const obj = original;
  Object.keys(obj)
    .forEach((k) => (!obj[k] && (obj[k] !== undefined || obj[k].length !== 0)) && delete obj[k]);
  return obj;
};

/**
 * defaultStyles from component
 * @type {
 * {"--overlay-color-text": string,
 * "--overlay-color-background": string,
 * "--overlay-headline-size": string,
 * "--overlay-close-size": string,
 * "--overlay-padding": string,
 * "--overlay-border-radius": string}
 * "--overlay-width": string}
 * "--overlay-max-width": string}
 * "--overlay-content-height": string}
 * }
 */
const styles = {
  '--overlay-color-text': '#fff',
  '--overlay-color-background': '#1a1a1a',
  '--overlay-headline-size': '4rem',
  '--overlay-close-size': '50px',
  '--overlay-border-radius': '1em',
  '--overlay-padding': '1em',
  '--overlay-width': '90vw',
  '--overlay-max-width': '1930px',
  '--overlay-content-height': 'auto',
};
const model = {
  showModal: false,
  headline: null,
  fullMode: false,
  styles,
};

export default {
  name: 'DocuAppOverlay',
  navName: 'AppOverlay',
  components: {
    AppOverlay,
    SGUsage: () => import('@/sg/components/SGUsage.vue'),
  },
  data() {
    return {
      model,
      modal: {
        name: 'AppOverlay1',
        model,
        data() {
          return {
            removeEmpty,
            model,
          };
        },
        components: { AppOverlay },
        template: `
<app-overlay
  :headline="model.headline"
  @close="model.showModal = false"
  :additional-styles="removeEmpty(model.styles)"
  :is-full="model.fullMode"
  :isVisible="model.showModal">
  <p>Whats up?</p>
</app-overlay>`,
      },
    };
  },
};
</script>

<style scoped>
.options label{
  display: block;
  margin: 0.5rem 0;
}
</style>
