import Vue from 'vue';
import VueRouter from 'vue-router';

import store from "../store";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Auth/Login")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/Auth/Register")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  if (store.getters.isLoggedIn && ["/login", "/register"].includes(to.path)) {
    next("/");
  } else if (!store.getters.isLoggedIn && !["/login", "/register"].includes(to.path)) {
    next("/login");
  } else {
    next();
  }
});

export default router;
