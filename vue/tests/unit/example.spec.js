import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import RedirectTimer from '@/lib-components/redirect-timer.vue';

describe('RedirectTimer.vue', () => {
  it('try fake timer', () => {
    const countdown = 40;
    const wrapper = shallowMount(RedirectTimer, {
      propsData: {
        countdown,
        show: true,
      }
    });
    expect(wrapper.vm.countdown).toBe(countdown);
    expect(wrapper.vm.time).toBe(countdown);
    wrapper.trigger('click');
    jest.useFakeTimers();

    jest.advanceTimersByTime(5000);
    expect(wrapper.vm.time).toBe(35);
    expect(wrapper.text()).toBe(35);
  });

  /* it('countdown works', done => {
    const countdown = 40;
    const wrapper = shallowMount(RedirectTimer, {
      propsData: {
        countdown,
        autoStart: true,
      }
    });
    expect(wrapper.vm.countdown).toBe(countdown);
    expect(wrapper.vm.time).toBe(countdown);
    setTimeout(() => {
      expect(wrapper.vm.time).toBe(38);
      done();
    }, 1001);
  }) */
});
