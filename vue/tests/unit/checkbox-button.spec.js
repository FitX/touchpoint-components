import { shallowMount } from '@vue/test-utils';
import CheckboxButton from '@/lib-components/checkbox-button.vue';

describe('Example Test for Checkbox button', () => {
  it('renders props.headline when passed', () => {
    const text = 'Checkbox button';
    const component = shallowMount(CheckboxButton, {});
    expect(component.text()).toMatch(text);
  });
});
