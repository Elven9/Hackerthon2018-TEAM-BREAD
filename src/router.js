import Vue from 'vue'
import Router from 'vue-router'

// Import Page component.
import Home from 'page/Home'
import Startpage from 'page/StarterPage'
import Article from 'page/Article'
import Register from 'page/Regist'
import Login from 'page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Startpage
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Article',
      name: 'article',
      component: Article
    },
    {
      path: '/Regist',
      name: 'regist',
      component: Register
    }, 
    {
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})
