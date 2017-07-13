import { MutationTree } from "vuex";
import { CounterState } from "./state";

export function Increase(state: CounterState) {
  state.count++;
}

export function Decrease(state: CounterState) {
  state.count--;
}

export default <MutationTree<CounterState>>{
  Increase,
  Decrease
};
