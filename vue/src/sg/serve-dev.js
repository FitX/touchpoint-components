import Vue from 'vue';
import Dev from '@/sg/serve-dev.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
