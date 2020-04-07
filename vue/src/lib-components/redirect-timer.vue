<template>
<div>
  <slot></slot>
  <template v-if="show">
  {{ time }}
  </template>
</div>
</template>

<script>
/**
 * Add one or more listeners to an element
 * @param {Element|object} element - DOM element to add listeners to
 * @param {string} eventNames - space separated list of event names, e.g. 'click change'
 * @param {Function} listener - function to attach for each event as a listener
 * @Link
 * http://stackoverflow.com/questions/8796988/binding-multiple-events-to-a-listener-without-jquery
 */
function addListenerMulti(element, eventNames, listener) {
  [].forEach.call(eventNames.split(' '), (e) => {
    element.addEventListener(e, listener, true);
  });
}
function removeListenerMulti(element, eventNames, listener) {
  [].forEach.call(eventNames.split(' '), (e) => {
    element.removeEventListener(e, listener, true);
  });
}
export default {
  name: 'RedirectTimer',
  props: {
    /**
     * Countdown in Seconds
     */
    countdown: {
      type: Number,
      default: 1800,
    },
    routerName: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: '/',
    },
    show: {
      type: Boolean,
      default: false,
    },
    autoStart: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isRunning: false,
      timer: null,
      time: this.countdown,
    };
  },
  mounted() {
    this.stop();
    this.timer = null;
    addListenerMulti(window, 'keydown click scroll pauseRedirectTimer', this.eventHandling);
    if (this.autoStart) {
      this.start();
    }
  },
  beforeDestroy() {
    this.stop();
    clearInterval(this.timer);
  },
  destroyed() {
    removeListenerMulti(window, 'keydown click scroll pauseRedirectTimer', this.eventHandling);
    this.$destroy();
  },
  methods: {
    eventHandling() {
      if (this.timer) {
        this.resume(true);
      } else {
        this.start();
      }
    },
    start() {
      this.isRunning = true;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.$root.$emit('countdown-tick', this.time);
            this.time -= 1;
          } else {
            clearInterval(this.timer);
            this.reset();
          }
        }, 1000);
      }
    },
    resume() {
      this.reset(true);
      this.start();
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timer);
      this.timer = null;
    },
    reset(initial = false) {
      this.stop();
      if (initial) {
        this.time = this.countdown;
      } else {
        this.time = 0;
        if (this.routerName) {
          this.$emit('redirect', { name: this.routerName });
          if (this.$route.name === this.routerName) {
            this.$router.go(0);
          } else {
            this.$router.push({
              name: this.routerName,
              params: {
                redirect: {
                  name: this.routerName,
                },
              },
            });
          }
        } else {
          this.$emit('redirect', { url: this.url });
          if (this.$route.path === this.url) {
            this.$router.go(0);
          } else {
            this.$router.push({ path: this.url });
          }
        }
      }
    },
  },
};
</script>
