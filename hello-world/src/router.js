// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './index.vue'
import Detail from './detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: Index,
  },
  {
    path: '/detail/:id', 
    component: Detail,
  },
]

export default routes