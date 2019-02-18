import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.prototype.$EventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');
