import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
// 引入全局通用样式
import "@/static/style/reset.scss";
import "@/static/style/mixin.scss";
// 引入全局js
import "@/static/js/flexible.js";
// 300ms移动端点击延迟
import fastclick from "fastclick";
// 图片懒加载
import VueLazyload from "vue-lazyload";
// 网络请求
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
// Vue.prototype.$http = axios  this.$http.get() ... 也行
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error:
    "http://wanzao2.b0.upaiyun.com/14758515678631475754541_400x400.gif-460.gif",
  loading:
    "http://wanzao2.b0.upaiyun.com/14758515678631475754541_400x400.gif-460.gif",
  attempt: 1
});
fastclick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
