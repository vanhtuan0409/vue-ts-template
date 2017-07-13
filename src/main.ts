// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import App from "@src/components/App/index.vue";
import router from "./router";
import { configureStore } from "./store";

import "./components";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = configureStore();

new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>"
});
