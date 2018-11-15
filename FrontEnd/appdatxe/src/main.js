import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

//Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import UserRequest from "./components/UseRequest.vue";
import LocationIdentifier from "./components/LocationIdentifier.vue";


const routes = [
  { path: "/", component: UserRequest },
  { path: "/bookvehicle", component: UserRequest },
  { path: "/locationidentifier", component: LocationIdentifier }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});



new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
