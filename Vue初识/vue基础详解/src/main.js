import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(vueResource);
Vue.use(MintUi);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //render: h => h(App)
  template: '<App/>',
  // 注册成组件
  components: { App }
})
