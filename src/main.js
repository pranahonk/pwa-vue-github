import Vue from 'vue'
import App from './App.vue'
import VuePwaInstallPlugin from "vue-pwa-install";

Vue.config.productionTip = false;

Vue.use(VuePwaInstallPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
