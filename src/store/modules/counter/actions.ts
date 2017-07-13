import { ActionTree, ActionContext } from "vuex";
import { CounterState } from "./state";

export function Increase(store: ActionContext<CounterState, any>) {
  if (store.state.count < 10) {
    store.commit("Increase");
  }
}

export function Decrease(store: ActionContext<CounterState, any>) {
  if (store.state.count > 0) {
    store.commit("Decrease");
  }
}

// export everything compliant to the vuex specification for actions
export default <ActionTree<CounterState, any>>{
  Increase,
  Decrease
};
