import Vue from 'vue'
import App from './App.vue'
import VuePwaInstallPlugin from "vue-pwa-install";
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

Vue.config.productionTip = false;

Vue.use(VuePwaInstallPlugin);

if ('serviceWorker' in navigator) {
  runtime.register();
}

new Vue({
  render: h => h(App),
}).$mount('#app')
