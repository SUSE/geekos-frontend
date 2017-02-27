import Vue from 'vue'
import Router from 'vue-router'
import Search from 'components/Search'
import Teams from 'components/Teams'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Search
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    }
  ]
})
