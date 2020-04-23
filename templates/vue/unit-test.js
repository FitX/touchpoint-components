import { shallowMount } from '@vue/test-utils';
import {{pascalCase componentName}} from '@/lib-components/{{kebabCase componentName}}.vue';

describe('Example Test for {{sentenceCase componentName}}', () => {
  it('renders props.headline when passed', () => {
    const text = '{{sentenceCase componentName}}';
    const component = shallowMount({{pascalCase componentName}}, {});
    expect(component.text()).toMatch(text);
  });
});
