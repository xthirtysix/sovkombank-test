import Vue from "vue";
import Vuex from "vuex";
import appFilter from "./modules/appFilter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appFilter
  }
});
