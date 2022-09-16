<template>
  <div class="about">
    <p>vue-child-first about page</p>
    <p>使用mapState...</p>
    <el-button @click="handleGetCurDate">
      当前日期::{{ count }} || {{ curDate }}
    </el-button>
    <!-- <p>doneTodos::{{ JSON.stringify(doneTodos) }}</p>
    <p>doneTodosCount::{{ doneTodosCount }}</p> -->
    <!-- <p>getTodoById::{{ getTodoById(2) }}</p> -->
    <el-button @click="handleGetExtralParams">
      handleGetExtralParams::{{ JSON.stringify(extralParams) }}
    </el-button>
    <el-button @click="handleGetCommitIsObject">
      handleGetCommitIsObject::{{ JSON.stringify(commitIsObject) }}
    </el-button>
    <el-button @click="handleGetListData">获取mock的数据</el-button>
  </div>
</template>

<script>
// import { mapState, mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "about",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  // computed: mapState({
  //   // count: (state) => {
  //   //   console.log("count::", state.count);
  //   //   return state.count;
  //   // },
  //   count: "count",
  //   curDate: (state) => state.curDate,
  // }),
  // computed: {
  //   ...mapState({
  //     count: "count",
  //     curDate: "curDate",
  //   }),
  // },
  computed: {
    // ...mapState(["count", "curDate", "extralParams", "commitIsObject"]),
    ...mapState({
      count: (state) => state.about.count,
      curDate: (state) => state.about.curDate,
      extralParams: (state) => state.about.extralParams,
      commitIsObject: (state) => state.about.commitIsObject,
    }),
    // ...mapGetters(["doneTodos", "doneTodosCount", "getTodoById"]),
    // ...mapGetters({
    //   doneTodos: (state) => state.about.doneTodos,
    //   doneTodosCount: (state) => state.about.doneTodosCount,
    //   getTodoById: (state) => state.about.getTodoById,
    // }),
  },
  methods: {
    handleGetCurDate() {
      this.$store.commit("GET_CUR_DATE");
      this.$store.commit("INCREMENT");
    },

    handleGetExtralParams() {
      this.$store.commit("GET_EXTRAL_PARAMS", {
        id: "0",
        name: "jqh",
        desc: "jqh test desc",
      });
    },

    handleGetCommitIsObject() {
      this.$store.commit({
        type: "GET_COMMIT_IS_OBJECT",
        payload: {
          id: 0,
          amount: 10,
        },
      });
    },

    handleGetListData() {
      this.$axios.get("/setup/rule-base/list").then((res) => {
        console.log("/setup/rule-base/list res::", res);
      });
      this.$axios.get("/setup/rule-base/save").then((res) => {
        console.log("/setup/rule-base/save res::", res);
      });
    },
  },
};
</script>
