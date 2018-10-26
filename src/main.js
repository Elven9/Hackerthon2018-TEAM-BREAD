import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Install Bootstrap-vue
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

// Add lodash
Vue.prototype._ = require('lodash');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
