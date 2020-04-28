<template>
<label class="checkbox-button">
  <input
    v-bind="attrs"
    @change="toggleCheck"
    :indeterminate.prop="indeterminate"
    :checked="isSelected"
    type="checkbox">
  <span class="label"><slot>{{ label }}</slot></span>
</label>
</template>

<script>
export default {
  name: 'CheckboxButton',
  props: {
    model: [String, Boolean, Object, Number, Array],
    value: {
      type: [String, Boolean, Object, Number],
    },
    label: {
      type: String,
      default: null,
    },
    name: [String, Number],
    required: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },
  model: {
    prop: 'model',
    event: 'change',
  },
  computed: {
    attrs() {
      const attrs = {
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        'true-value': this.trueValue,
        'false-value': this.falseValue,
      };
      if (Object.hasOwnProperty.call(this.$options.propsData, 'value')) {
        if (this.value === null || typeof this.value !== 'object') {
          attrs.value = (this.value === null || this.value === undefined) ? '' : String(this.value);
        }
      }

      return attrs;
    },
    isSelected() {
      if (this.isModelArray) {
        return this.model.includes(this.value);
      }

      if (this.hasValue) {
        return this.model === this.value;
      }

      return this.model === this.trueValue;
    },
    isModelArray() {
      return Array.isArray(this.model);
    },
    hasValue() {
      return Object.hasOwnProperty.call(this.$options.propsData, 'value');
    },
  },
  methods: {
    removeItemFromModel(newModel) {
      const index = newModel.indexOf(this.value);

      if (index !== -1) {
        newModel.splice(index, 1);
      }
    },
    handleArrayCheckbox() {
      const newModel = this.model;

      if (!this.isSelected) {
        newModel.push(this.value);
      } else {
        this.removeItemFromModel(newModel);
      }

      this.$emit('change', newModel);
    },
    handleSingleSelectCheckbox() {
      this.$emit('change', this.isSelected ? null : this.value);
    },
    handleSimpleCheckbox() {
      this.$emit('change', this.isSelected ? this.falseValue : this.trueValue);
    },
    toggleCheck() {
      if (!this.disabled) {
        if (this.isModelArray) {
          this.handleArrayCheckbox();
        } else if (this.hasValue) {
          this.handleSingleSelectCheckbox();
        } else {
          this.handleSimpleCheckbox();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// @use currently only with dart-sass
// @use '~@/assets/styles/mixins.scss' as mixin;
@import '../styles/mixins.scss';
@import '../styles/colors.scss';

.checkbox-button {
  --checkbox-btn-color-border: var(--color-ash, #{$color-ash});
  --checkbox-btn-color-bg: var(--color-chalk, #{$color-chalk});
  --checkbox-btn-color-text: var(--color-black, #{$color-black});

  cursor: pointer;
  user-select: none;
  display: inline-block;
  margin-right: var(--spacing-normal, 20px);
}
.label {
  display: inline-block;
  border: 1px solid var(--checkbox-btn-color-border);
  padding: 8px 32px;
  border-radius: 1em;
  font-size: var(--font-size-large);
}
input {
  display: none;
}
input:checked + .label{
  color: var(--checkbox-btn-color-text);
  background-color: var(--checkbox-btn-color-bg);
}
input:indeterminate + .label {
  border-color: currentColor;
}
</style>
