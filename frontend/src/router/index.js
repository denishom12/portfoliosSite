import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstSitePage from "@/views/FirstSitePage";
import SecondSitePage from "@/views/SecondSitePage";
import ThirdSitePage from "@/views/ThirdSitePage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/first',
    name: 'FirstSitePage',
    component: FirstSitePage
  },
  {
    path: '/second',
    name: 'SecondtSitePage',
    component: SecondSitePage
  },
  {
    path: '/third',
    name: 'ThirdSitePage',
    component: ThirdSitePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
