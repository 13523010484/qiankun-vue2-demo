<template>
  <div class="home">
    <p>
      qiankun 主应用带过来的消息：{{ microInfo?.microData?.name }} ==
      {{ microInfo?.microData?.date }}
      uid::{{ $store.state.uid }}
    </p>
    <p>token: {{ microInfo.token }}</p>
    <el-button @click="handleActions">子应用按钮</el-button>
    <el-button @click="handleChildIncrement({ amount: 10 })">
      child increment{{ $store.state.home.count }}
    </el-button>
    count::{{ count }}
    <el-button @click="handleGetList({ payload: { ruleType: 0 } })"
      >在action中异步获取接口 getList</el-button
    >
    <el-button @click="handleGetPage({ payload: { id: 0 } })"
      >在action中异步获取接口 getPage</el-button
    >
    <!-- <el-button @click="handleCurDate">获取当前日期::{{ curDate }}</el-button> -->
    <el-table :data="ruleTypeList" style="width: 60vw; margin: 15px auto">
      <el-table-column prop="createdBy" label="创建人" width="150">
      </el-table-column>
      <el-table-column prop="differenceProcessing" label="差异处理" width="150">
      </el-table-column>
      <el-table-column prop="differenceValue" label="差异值" width="90">
      </el-table-column>
      <el-table-column prop="flowField" label="计划字段" width="90">
      </el-table-column>
      <el-table-column
        prop="flowMergeConditions"
        label="流水合并计划"
        width="150"
      >
        <template slot-scope="scope">{{
          scope.row.flowMergeConditions.name
        }}</template>
      </el-table-column>
      <el-table-column prop="logicalRules" label="逻辑规则" width="150">
      </el-table-column>
      <el-table-column prop="createdTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="updatedTime" label="更新时间" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
    ...mapState({
      count: (state) => state.home.count,
      // curDate: (state) => state.home.curDate,
      ruleTypeList: (state) => state.home.ruleTypeList,
    }),
  },
  created() {
    this.handleGetList({ payload: { ruleType: 0 } });
  },
  methods: {
    ...mapActions({
      handleChildIncrement: "incrementAsync",
      handleGetList: "getListReq",
      handleGetPage: "getPageReq",
    }),

    handleActions() {
      actions.setGlobalState({
        microData: {
          name: "child-vue-first",
          date: new Date().toLocaleString(),
        },
      });
    },

    // handleCurDate() {
    //   this.$store.commit("GET_CUR_DATE");
    // },

    // handleChildIncrement() {
    //   this.$store.dispatch({
    //     type: "incrementAsync",
    //     amount: 10,
    //   });
    // },

    // handleGetList() {
    //   this.$store.dispatch({
    //     type: "getListReq",
    //     payload: {
    //       ruleType: 0,
    //     },
    //   });
    // },
  },
};
</script>
