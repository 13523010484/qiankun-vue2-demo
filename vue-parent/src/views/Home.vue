<template>
  <div class="home">
    parent page home
    <button @click="increment">count:{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { loadMicroApp } from "qiankun";

@Component({})
export default class App extends Vue {
  @State((state) => state.count) count;
  private microApp: any = null;

  mounted() {
    this.microApp = loadMicroApp({
      ...document.subApps[0],
    });

    this.$axios.get("/api/userinfo").then((res: any) => {
      this.$store.commit({
        type: "getUid",
        params: {
          uid: res.data.data.uid,
        },
      });
    });
  }

  increment() {
    this.$store.commit("increment");
  }

  beforeDestroy() {
    this.microApp.unmount();
  }
}
</script>
