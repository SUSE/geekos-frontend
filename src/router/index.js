import Vue from 'vue'
import Router from 'vue-router'
import Search from 'components/Search'
import Teams from 'components/Teams'
import Geeko from 'components/Geeko'

Vue.use(Router)

// https://mattstauffer.co/blog/getting-started-using-vues-vue-router-for-single-page-apps

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'search' }
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
    },
    {
      path: '/geeko/:workforceid',
      name: 'geeko',
      component: Geeko
    }
  ]
})
