import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// 引入全局通用样式
import "@/static/style/reset.scss";
import "@/static/style/mixin.scss";
// 引入全局js
import "@/static/js/flexible.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
