import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import { store } from '@/store/store'
import Home from '@/components/Home'
import Language from '@/components/Language'
import BookClass from '@/components/BookClass'
import ContactInfo from '@/components/ContactInfo'

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Vuex)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: "/",
      name: 'Home',
      component: Home,
    },
    {
      path: '/Language',
      name: 'Language',
      component: Language
    },
    {
      path: '/BookClass',
      name: 'bookClass',
      component: BookClass
    },
    {
      path: '/ContactInfo',
      name: 'ContactInfo',
      component: ContactInfo
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})

// export const store = new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {},
// });
