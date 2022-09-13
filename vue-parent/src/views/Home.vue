<template>
  <div class="home">parent page home</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { loadMicroApp } from "qiankun";

@Component({})
export default class App extends Vue {
  private microApp: any = null;

  mounted() {
    console.log("mounted...");
    this.microApp = loadMicroApp({
      ...document.subApps[0],
    });
  }

  beforeDestroy() {
    this.microApp.unmount();
  }
}
</script>
