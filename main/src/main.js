import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app';
import routes from './router'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['micro-app']

const router = new VueRouter({
  mode: 'history',
  routes,
})


new Vue({
  render: h => h(App),
  router
}).$mount('#main')

microApp.start();
