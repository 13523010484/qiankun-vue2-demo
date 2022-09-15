import Vue from "vue";
import Vuex from "vuex";
import {
  INCREMENT,
  GET_CUR_DATE,
  GET_EXTRAL_PARAMS,
  GET_COMMIT_IS_OBJECT,
  GET_UID,
} from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    curDate: "",
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
    extralParams: {
      default: "test",
    },
    commitIsObject: {},
    uid: "",
  },
  mutations: {
    [INCREMENT]: (state, payload) => {
      state.count += payload.amount;
    },

    [GET_CUR_DATE]: (state) => {
      state.curDate = new Date().toLocaleString();
    },

    [GET_EXTRAL_PARAMS]: (state, payload) => {
      state.extralParams = {
        ...state.extralParams,
        ...payload,
      };
    },

    [GET_COMMIT_IS_OBJECT]: (state, payload) => {
      state.commitIsObject = payload.payload;
    },

    [GET_UID]: (state, payload) => {
      state.uid = payload.payload.uid;
    },
  },
  getters: {
    incrementAsync: ({ commit }) => {
      setTimeout(() => {
        commit("INCREMENT");
      }, 1000);
    },

    [INCREMENT]: ({ commit }) => {
      commit("INCREMENT");
    },

    doneTodos: (state) => {
      return state.todos.filter((item) => item.done);
    },

    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },

    getTodoById: (state) => (id) => {
      return state.todos.find((item) => item.id === id);
    },
  },
  actions: {},
  modules: {},
});
