import { createStore } from "vuex";
import { moduleJokes } from "./modules/moduleJokes";
import { moduleNames } from "./modules/moduleNames";

export default createStore({
  modules: {
    jokes: moduleJokes,
    names: moduleNames,
  },
});
