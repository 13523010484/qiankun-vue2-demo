import Vue from "vue";
import Vuex from "vuex";
import { loadModules } from "./util";

const { modules } = loadModules();

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
