import { initGlobalState, MicroAppStateActions } from "qiankun";
const state = {
  microData: {},
};
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  console.log("state", state, "prev", prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();

export default actions;
