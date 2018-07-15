import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('pages/home')
const Main = () => import('pages/main')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: '首页',
          component: Main
        }
      ]
    }
  ]
})
