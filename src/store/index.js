import Vue from "vue";
import Vuex from "vuex";
// 引入各个页面的vuex模块
import Home from "./modules/Home";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Home
  }
});

export default store;
