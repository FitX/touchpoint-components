import { shallowMount, mount } from '@vue/test-utils';
import CheckboxButton from '@/lib-components/checkbox-button.vue';

describe('Example Test for Checkbox button', () => {
  it('should render the component', () => {
    const component = shallowMount(CheckboxButton, {});
    expect(component.classes('checkbox-button')).toBe(true);
  });

  it('check if is selected if model === valuel', () => {
    const wrapper = mount({
      data() {
        return {
          model: 'string example',
        }
      },
      template: `
        <div>
          <checkbox-button v-model="model" value="string example"></checkbox-button>
        </div>
      `,
      components: {
        CheckboxButton,
      },
    });
    expect(wrapper.vm.$children[0].isSelected).toBe(true);
  });

  it('should toggle a value from model when model is an array', () => {
    const expectDefault = () => {
      expect(wrapper.vm.$children[0].isSelected).toBe(false);
      expect(wrapper.vm.$data.model).toEqual([1]);
    };
    const wrapper = mount({
      data() {
        return {
          model: [1],
        }
      },
      template: `
        <div>
          <checkbox-button v-model="model" :value="2"></checkbox-button>
        </div>
      `,
      components: {
        CheckboxButton,
      },
    });
    expectDefault();
    wrapper.find(CheckboxButton).trigger('click');
    expect(wrapper.vm.$children[0].isSelected).toBe(true);
    expect(wrapper.vm.$data.model).toEqual([1, 2]);
    wrapper.find(CheckboxButton).trigger('click');
    expectDefault()
  });
});
