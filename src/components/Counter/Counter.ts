import Vue from "vue";
import { Component, Inject } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Counter extends Vue {
  @Getter("counter/Value") counter: number;
  @Action("counter/Increase") Increase: Function;
  @Action("counter/Decrease") Decrease: Function;
}
