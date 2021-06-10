import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import firebase from "./firebase";
import auth from "./auth";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(firebase);
Vue.use(auth);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
