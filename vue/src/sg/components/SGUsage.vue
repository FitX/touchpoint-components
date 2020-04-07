<template>
<section
  :class="[{ 'sg-usage--inverted' : isInverted }]"
  class="sg-usage">
  <header class="sg-usage__header">
    <h1 class="sg-usage__headline">
      {{ componentName }}
      <span v-if="headline">- {{ headline }}</span></h1>
    <button
      class="sg-usage__toggle-inverted"
      @click="toggleInverted">
      {{ isInverted ? 'zur Normalen Ansicht' : 'zur Invertierten Ansicht' }}
    </button>
  </header>
  <p>{{ description }}</p>
  <div class="sg-usage__component">
    <slot></slot>
    <pre>{{ parsedSlot }}</pre>
    <hr>
    <pre>
      {{ parsed.template }}
    </pre>
  </div>
</section>
</template>

<script>
export default {
  name: 'SGUsage',
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
  },
  computed: {
    componentName() {
      return this.$slots?.default[0]?.componentOptions?.tag;
    },
  },
  data() {
    return {
      isInverted: this.inverted,
      parsed: null,
      parsedSlot: null,
    };
  },
  methods: {
    parseSlot(slot) {
      class Parsed {
        constructor() {
          this.textNodes = [];
          this.tagNodes = [];
        }
      }
      const r = new Parsed();
      if (slot != null) {
        // eslint-disable-next-line no-restricted-syntax
        for (const node of slot) {
          (node.tag == null ? r.textNodes : r.tagNodes).push(node);
        }
      }
      console.log('r', r);
      return r;
    },
    toggleInverted() {
      this.isInverted = !this.isInverted;
    },
    boot(res) {
      const template = this.parseTemplate('template', res);
      this.parseComponent('app-rating', res);
      const demo = this.parseTemplate('app-rating', template);
      this.parsed = {
        template: demo,
        script: this.parseTemplate('script', res),
        style: this.parseTemplate('style', res),
      };
    },
    importTemplate() {
      // `!raw-loader!@/lib-components/${this.componentName}.vue`
      import(
        /* webpackChunkName: "examples-source" */
        /* webpackMode: "lazy-once" */
        `!raw-loader!@/sg/documentation/${this.componentName}.vue`
      ).then((comp) => this.boot(comp.default));
      // .then(this.unobserve);
    },
    parseTemplate(target, template) {
      const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
      const regex = new RegExp(string, 'g');
      const parsed = regex.exec(template) || [];
      return parsed[1] || '';
    },
    parseComponent(target, template) {
      const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
      const regex = new RegExp(string, 'g');
      const parsed = regex.exec(template) || [];
      console.log('parsed 0', parsed[0]);
      console.log('parsed 1', parsed[1]);
      return parsed[1] || '';
    },
  },
  mounted() {
    this.importTemplate();
    console.log(this.$slots.default);
    this.parseSlot(this.$slots?.default);
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

  padding: var(--spacing);
  margin-bottom: calc(4 * var(--spacing));
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);

  &__header {
    display: grid;
    grid-template-columns: 1fr auto;
    margin: calc(var(--spacing) * -1) calc(var(--spacing) * -1) 0;
    padding-left: var(--spacing);
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
  }
}
</style>
