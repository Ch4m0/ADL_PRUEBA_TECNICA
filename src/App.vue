<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <NavBar />
      <Banks />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import NavBar from "./components/navbar/NavBar.vue";
import Banks from "./components/banks/Banks.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    NavBar,
    Banks
  }
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 20% 80%;
}
.content {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
