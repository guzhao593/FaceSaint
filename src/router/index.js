import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('pages/home')
const Main = () => import('pages/main')
const Knowledge = () => import('pages/knowledge')
const KnowledgeDetails = () => import('components/knowledge-details')
const QuestionDetails = () => import('pages/question-details')
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
        },
        {
          path: '/knowledge',
          name: '知识详情',
          component: Knowledge,
          redirect: '/knowledge/knowledge-details',
          children: [
            {
              path: '/knowledge/knowledge-details',
              name: '面试题详情',
              component: KnowledgeDetails
            },
            {
              path: '/knowledge/question-details',
              name: '面试题详情',
              component: QuestionDetails,
              props: (route) => ({question: route.query})
            }
          ]
        }
      ]
    }
  ]
})
