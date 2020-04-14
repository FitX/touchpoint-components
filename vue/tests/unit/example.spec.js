import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import RedirectTimer from '@/lib-components/redirect-timer.vue';

jest.useFakeTimers();

describe('RedirectTimer.vue', () => {
  it('countdown works and is showing', () => {
    const countdown = 40;
    const wrapper = shallowMount(RedirectTimer, {
      propsData: {
        countdown,
        show: true,
      },
    });
    expect(wrapper.vm.countdown).toBe(countdown);
    expect(wrapper.vm.time).toBe(countdown);
    window.dispatchEvent(new Event('click'));

    jest.runTimersToTime(3000);
    Vue.nextTick(() => {
      // you don't do your first reduction of the property until one second is elapsed,
      // so after 3 seconds, timer will equal 8
      // expect(RedirectTimer.data().time).toBe(8)
      expect(wrapper.vm.time).toBe(37);
      expect(wrapper.text()).toBe('37');
    });
    jest.clearAllTimers();
  });

  it('autostart false works', () => {
    const countdown = 40;
    const wrapper = shallowMount(RedirectTimer, {
      propsData: {
        countdown,
        autoStart: false,
      },
    });
    // Test defaults
    expect(wrapper.vm.countdown).toBe(countdown);
    expect(wrapper.vm.time).toBe(countdown);
    // run forward
    jest.runTimersToTime(5000);
    Vue.nextTick(() => {
      // default, cause no auto-start
      expect(wrapper.vm.countdown).toBe(countdown);
      expect(wrapper.vm.time).toBe(countdown);

      // trigger event
      window.dispatchEvent(new Event('click'));
      jest.runTimersToTime(5000);
      Vue.nextTick(() => {
        Vue.nextTick(() => {
          expect(wrapper.vm.time).toBe(35);
        });
      });
    });
  });

  it('timer reset works', () => {
    const countdown = 40;
    const wrapper = shallowMount(RedirectTimer, {
      propsData: {
        countdown,
        autoStart: true,
      },
    });
    // Test defaults
    expect(wrapper.vm.countdown).toBe(countdown);
    expect(wrapper.vm.time).toBe(countdown);
    // run forward
    jest.runTimersToTime(5000);
    Vue.nextTick(() => {
      expect(wrapper.vm.time).toBe(35);

      // trigger event
      window.dispatchEvent(new Event('click'));
      Vue.nextTick(() => {
        Vue.nextTick(() => {
          // default, cause event resets countdown
          expect(wrapper.vm.time).toBe(countdown);
        });
      });
    });
  });
});
