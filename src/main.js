import {
    createApp
} from 'vue'
import App from './App.vue'

import BaseCard from "./components/UI/BaseCard.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

const api = createApp(App)

api.component('base-card', BaseCard)
api.component('base-dialog', BaseDialog)

api.mount('#app')