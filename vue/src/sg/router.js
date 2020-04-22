import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "sgHome" */ './views/home.vue'),
    },
    {
      path: '/documentation/:component',
      name: 'detail',
      component: () => import(/* webpackChunkName: "sgHome" */ './views/detail.vue'),
    },
    {
      path: '/colors',
      name: 'detail-colors',
      component: () => import(/* webpackChunkName: "sgHome" */ './views/detail-colors.vue'),
    },
    {
      path: '*',
      name: 'error',
      component: () => import(/* webpackChunkName: "sgHome" */ './views/detail.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
