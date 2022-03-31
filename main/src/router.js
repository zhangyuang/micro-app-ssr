// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './index.vue'
import Child from './child.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: Index,
  },
  {
    path: '/main/children/:page*',
    component: Child,
  },
]

export default routes