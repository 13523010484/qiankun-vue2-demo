import { Message } from "element-ui";
import { INCREMENT, GET_UID, RULE_TYPE_LIST, PAGE_DATA } from "./mutationTypes";
import {
  // ruleBaseBatchDeleteReq,
  // ruleBaseDeleteReq,
  // ruleBaseEditReq,
  // ruleBaseGetReq,
  ruleBaseListReq,
  ruleBasePageReq,
  // ruleBaseSaveReq,
} from "@/api/index";

const state = () => ({
  count: 0,
  curDate: "",
  uid: "",
  ruleTypeList: [],
  pageData: [],
});

const mutations = {
  [INCREMENT]: (state, payload) => {
    if (payload) {
      state.count += payload.amount;
    } else {
      state.count++;
    }
  },

  [GET_UID]: (state, payload) => {
    state.uid = payload.payload.uid;
  },

  [RULE_TYPE_LIST]: (state, params) => {
    state.ruleTypeList = params;
  },

  [PAGE_DATA]: (state, params) => {
    state.pageData = params;
  },
};

const actions = {
  incrementAsync: ({ commit }, payload) => {
    setTimeout(() => {
      commit("INCREMENT", payload);
    }, 1000);
  },

  [INCREMENT]: ({ commit }) => {
    commit("INCREMENT");
  },

  async getListReq({ dispatch, commit, state }, params) {
    await dispatch("getPageReq", { payload: { id: 0 } });
    ruleBaseListReq({
      ...params.payload,
      id: state.pageData[0]?.id,
    }).then((res) => {
      if (res.data.data.status === 200) {
        commit("RULE_TYPE_LIST", res.data.data.list);
      } else {
        Message.error(res.data.data.message);
      }
    });
  },

  getPageReq({ commit }, params) {
    return ruleBasePageReq(params.payload).then((res) => {
      if (res.data.data.status === 200) {
        commit("PAGE_DATA", res.data.data.list);
      } else {
        Message.error(res.data.data.message);
      }
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
