import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: "",
  },
  mutations: {
    getUid: (state, props) => {
      state.uid = props.params.uid;
    },
  },
  actions: {},
  modules: {},
});
