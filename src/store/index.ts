import { Store } from "vuex";
import { State } from "./state";

import { CounterModule } from "./modules/counter";

class StoreOption {}

export function configureStore(opts: StoreOption = {}): Store<State> {
  return new Store({
    modules: {
      counter: new CounterModule()
    }
  });
}
