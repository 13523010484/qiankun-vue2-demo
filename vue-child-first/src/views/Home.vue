<template>
  <div class="home">
    <p>
      qiankun 主应用带过来的消息：{{ microInfo?.microData?.name }} ==
      {{ microInfo?.microData?.date }}
    </p>
    <p>token: {{ microInfo.token }}</p>
    <button @click="handleActions">子应用按钮</button>
    <button @click="handleChildIncrement">
      child increment{{ $store.state.count }}
    </button>
    count::{{ count }}
  </div>
</template>

<script>
// @ is an alias to /src
import actions from "../shared/actions";

export default {
  name: "Home",
  data() {
    return {
      microInfo: {},
    };
  },
  mounted() {
    // 注册观察者函数
    actions.onGlobalStateChange((state) => {
      this.microInfo = state;
    }, true);

    this.$store.commit({
      type: "GET_UID",
      payload: {
        uid: this.microInfo.uid,
      },
    });
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    handleActions() {
      actions.setGlobalState({
        microData: {
          name: "child-vue-first",
          date: new Date().toLocaleString(),
        },
      });
    },

    handleChildIncrement() {
      // this.$store.commit("INCREMENT");
      this.$store.dispatch({
        type: "incrementAsync",
        amount: 10,
      });
    },
  },
};
</script>
