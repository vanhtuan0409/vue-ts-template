import { Module } from "vuex";
import { CounterState } from "./state";
import Mutations from "./mutations";
import Getter from "./getters";
import Actions from "./actions";

export class CounterModule implements Module<CounterState, any> {
  namespaced = true;

  state: CounterState;
  mutations = Mutations;
  getters = Getter;
  actions = Actions;

  constructor() {
    this.state = new CounterState();
  }
}
