import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "@/scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
