import Vue from 'vue'
import Router from 'vue-router'

// Import Page component.
import Home from 'page/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
