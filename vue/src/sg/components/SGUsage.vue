<template>
<section
  :class="[{ 'sg-usage--inverted' : isInverted }]"
  class="sg-usage">
  <header class="sg-usage__header">
    <h1 class="sg-usage__headline">{{ headline }}</h1>
    <button
      class="sg-usage__toggle-inverted"
      @click="toggleInverted">
      {{ isInverted ? 'zur Normalen Ansicht' : 'zur Invertierten Ansicht' }}
    </button>
  </header>
  <p v-if="description">{{ description }}</p>
  <div class="sg-usage__component">
    <slot></slot>
  </div>
  <codemirror
    v-if="code"
    :options="codeOptions"
    :value="code"></codemirror>
</section>
</template>

<script>
import 'codemirror/mode/vue/vue';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/tomorrow-night-eighties.css';
import 'codemirror/theme/darcula.css';

export default {
  name: 'SGUsage',
  components: {
    // codemirror: () => import('vue-codemirror'),
    codemirror: () => import('vue-codemirror')
      .then(({ codemirror }) => codemirror),
  },
  props: {
    headline: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      default: null,
    },
    codeLanguage: {
      type: String,
      default: 'text/x-vue',
    },
  },
  data() {
    return {
      isInverted: this.inverted,
      codeOptions: {
        // codemirror options
        tabSize: 2,
        mode: this.codeLanguage,
        theme1: 'tomorrow-night-eighties',
        theme0: 'monokai',
        theme: 'darcula',
        lineNumbers: true,
        line: true,
      },
    };
  },
  methods: {
    toggleInverted() {
      this.isInverted = !this.isInverted;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.sg-usage {
  --color-background: #fff;
  --color-text: #000;
  --spacing: 1rem;

  &--inverted {
    --color-background: #000;
    --color-text: #fff;
  }

  margin-bottom: calc(4 * var(--spacing));
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);

  &__header {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: calc(var(--spacing) / 2) var(--spacing);
    color: #fff;

    background:
      radial-gradient(black 15%, transparent 16%) 0 0,
      radial-gradient(black 15%, transparent 16%) 8px 8px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
    background-color:#282828;
    background-size:16px 16px;

    position: sticky;
    top: 0;
  }

  &__toggle-inverted {
    @include btn-reset();

    color: #fff;
    padding: 0.25rem 1rem;
    margin: 0.25rem 1rem;
    align-self: center;
    background: black;
  }

  &__component {
    background: var(--color-background);
    color: var(--color-text);
    padding: var(--spacing);
  }
}
</style>

<style lang="scss">
/**
@TODO prism.js as Alternative?
 */
.CodeMirror {
  height: auto;
}
.cm-s-darcula {
  &.cm-s-darcula span.cm-tag {
     color: #E8BF6A; font-weight: normal; font-style: normal; text-decoration: none;
   }
  &.cm-s-darcula span.cm-attribute { color: #BABABA; } // #D0D0D0
  &.cm-s-darcula span.cm-string { color: #9876AA; }
}
</style>
