import {createRouter, createWebHashHistory} from 'vue-router'

import demoA from '../components/demoA.vue'
import demoB from '../components/demoB.vue'
import Icon from '../components/Icon.vue'
import NoMatch from '../components/NoMatch.vue'

const history = createWebHashHistory()

const routes = [
  {path: '/', name: 'icon', component: Icon},
  {path: '/a', name: 'demoA', component: demoA},
  {path: '/b', name: 'demoB', component: demoB},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NoMatch}
]

const router = createRouter({
  history: history,
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.path === '/a') return next()
//
// //   获取Token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) {
//     return next('./a')
//   } else next()
// })

export default router

