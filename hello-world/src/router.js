// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './index.vue'
import Detail from './detail'
import Child from './child'

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
  {
    path: '/children/*', 
    component: Child,
  },
]

export default routes