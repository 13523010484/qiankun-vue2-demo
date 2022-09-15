<template>
  <div id="app">
    <div id="nav">
      <span style="margin-right: 20px">
        <router-link to="/">Home</router-link>
      </span>
      <span style="margin-right: 20px">
        <router-link to="/about">About</router-link>
      </span>
      <span style="margin-right: 20px">
        <router-link to="/vue-child-first">vue-child-first</router-link></span
      >
      <span style="margin-right: 20px">
        <router-link to="/vue-child-second">vue-child-second</router-link>
      </span>
      <button @click="login">login</button>
    </div>
    <router-view />
    <!--微应用在此展示-->
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import actions from "./actions";

@Component({})
export default class App extends Vue {
  @State((state) => state.uid) uid;
  private mainInfo: any = null;

  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      console.log("主应用 state::", state, "prevState::", prevState);
      this.mainInfo = state;
    });
  }

  login() {
    actions.setGlobalState({
      token: "token_123456",
      uid: this.uid,
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
