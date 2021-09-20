import Vue from "vue";
import Vuex from "vuex";

import alert from "./alert";
import dynamic from "./dynamic";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  name: "global",
  modules: {
    dynamic: {
      namespaced: true,
      ...dynamic,
    },
    alert,
  },
});
