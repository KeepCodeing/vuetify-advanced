import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const DefaultPage = {
  path: '/',
  redirect: '/home'
};

const Home = {
  component: () => import('../views/Home'),
  path: '/home'
};

const NotFound = {
  path: '/*',
  redirect: '/home'
};

const About = {
  path: '/about',
  component: () => import('../views/About')
};

const Record = {
  path: '/record',
  component: () => import('../views/Record')
};

const routes = [
  DefaultPage,
  Home,
  About,
  Record,
  // NotFound,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
