import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ThingsDone from './components/done/ThingsDone.vue'
import MySchedule from './components/schedule/MySchedule.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/done',
      component: ThingsDone
    },
    {
      path: '/schedule',
    component: MySchedule
  },
  {
    path: '/*',
    component: Home,
    name: 'home'
  }
  ]
})
