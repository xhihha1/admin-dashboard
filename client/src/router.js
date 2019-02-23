import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Profile from './components/Profile.vue'
import Dashboard from './components/Dashboard.vue'
import AsideList from './components/AsideList.vue'
import Source from './components/Source.vue'
import MdEditor from './components/MdEditor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [{
        path: 'profile',
        components: {
          main: Profile,
          aside: AsideList
        }
      },{
        path: 'dashboard',
        components:{
          main: Dashboard,
          aside: AsideList
        } 
      },{
        path: 'source',
        components:{
          main: Source,
          aside: AsideList
        } 
      },{
        path: 'mdEditor',
        components:{
          main: MdEditor,
          aside: AsideList
        } 
      }]
    }
  ]
})