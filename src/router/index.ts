import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import VideoGames from '../views/VideoGames.vue'
import AppLayout from '../components/AppLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'VideoGames',
    component: VideoGames
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }

  /*
    *Following is another way to include template or layout into the views
  */

  // {
  //   path: '/',
  //   component: AppLayout,
  //   meta: {
  //     middleware: 'guest'
  //   },
  //   children: [
  //     {
  //       path: '/',
  //       name: 'VideoGames',
  //       component: VideoGames,
  //       meta: {
  //         title: 'VideoGames'
  //       }
  //     },
  //     {
  //       path: '/contact',
  //       name: 'Contact',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       meta: {
  //         title: 'Contact'
  //       },
  //       component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
