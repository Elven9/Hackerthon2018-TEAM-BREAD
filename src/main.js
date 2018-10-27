import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Install Bootstrap-vue
import ElementUI from 'element-ui';
import BootstrapVue from 'bootstrap-vue'

Vue.use(ElementUI);
Vue.use(BootstrapVue);

// Install element ui
import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
