import Vue from "vue";
import * as VueGoogleMap from "vuejs-google-maps";
import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

const api = createApp(App);

Vue.use(VueGoogleMap, {
  load: {
    apiKey: "AIzaSyDExysVcmGyDf5UdYCZsKCYp1UVAC5UtjM",
  },
});

api.component("base-card", BaseCard);
api.component("base-dialog", BaseDialog);

api.mount("#app");
