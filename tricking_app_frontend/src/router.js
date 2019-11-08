import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UsersNew from "./views/UsersNew.vue"
import DayAndTimesNew from "./views/DayAndTimesNew.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import GymsIndex from "./views/GymsIndex.vue";
import DayAndTimesIndex from "./views/DayAndTimesIndex.vue";
import FriendRequestsIndex from "./views/FriendRequestsIndex.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users_new',
      name: 'users-new',
      component: UsersNew
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/gyms",
      name: "gyms-index",
      component: GymsIndex
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: '/day_and_times_new',
      name: 'day_and_times-new',
      component: DayAndTimesNew
    },
    {
      path: '/day_and_times',
      name: 'day_and_times-index',
      component: DayAndTimesIndex
    },
    {
      path: "/friend_requests",
      name: "friend_requests-index",
      component: FriendRequestsIndex
    }
  ]
})
