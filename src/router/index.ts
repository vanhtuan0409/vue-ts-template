import Vue from "vue";
import Router from "vue-router";
import Counter from "@src/components/Counter/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Counter",
      component: Counter
    }
  ]
});
