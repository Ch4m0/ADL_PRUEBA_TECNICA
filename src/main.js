import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/index.js";

//Filters
import "./assets/js/filters.js";

//Plugins
import "./plugins/moment.js";
import "./plugins/fontAwesome.js";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
