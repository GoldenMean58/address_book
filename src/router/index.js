import Vue from 'vue'
import Router from 'vue-router'
import mytabs from '../components/Tabs'
import tab1 from '../components/Tab1'
import tab2 from '../components/Tab2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table',
      name: 'tab1',
      component: tab1
    },
    {
      path: '/charts',
      name: 'tab2',
      component: tab2
    },
    {
      path: '/',
      name: 'Mytabs',
      component: mytabs
    }
  ]
})
