<template>
  <div class="home">
    parent page about
    <button>count:{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({}) 
export default class App extends Vue {
  @State((state) => state.count) count;
}
</script>
