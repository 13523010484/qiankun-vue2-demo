import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

registerMicroApps([
  {
    name: "app1",
    entry: "//localhost:8081",
    container: "#container",
    activeRule: ["/vue-child-first"],
    props: {
      data: "vue-child-first 子应用",
    },
  },
  {
    name: "app2",
    entry: "//localhost:8082",
    container: "#container",
    activeRule: ["/vue-child-second"],
  },
]);
// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
