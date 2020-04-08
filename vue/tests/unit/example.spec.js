import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import RedirectTimer from '@/lib-components/redirect-timer.vue';

jest.useFakeTimers();

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

    jest.runTimersToTime(3000);
    Vue.nextTick(() => {
      // you don't do your first reduction of the property until one second is elapsed, so after 3 seconds, timer will equal 8
      // expect(RedirectTimer.data().time).toBe(8)
      expect(wrapper.vm.time).toBe(37);
      expect(wrapper.text()).toBe('37');
    });
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
