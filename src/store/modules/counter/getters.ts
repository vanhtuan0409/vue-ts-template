import { GetterTree, Getter } from "vuex";
import { CounterState } from "./state";

export function Value(state: CounterState): number {
  return state.count;
}

export default <GetterTree<CounterState, any>>{
  Value
};
