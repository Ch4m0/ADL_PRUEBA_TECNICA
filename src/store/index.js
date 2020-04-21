import Vue from "vue";
import Vuex from "vuex";

import { ModuleProducts } from "./products/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: false,
  modules: {
    product: ModuleProducts
  }
});
