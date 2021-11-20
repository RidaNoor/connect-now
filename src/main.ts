import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AppLayout from './components/AppLayout.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import moment from 'moment'
import LoadingButton from './components/LoadingButton.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.component('app-layout', AppLayout)
app.config.globalProperties.axios = axios
app.config.globalProperties.$filters = {
  formatDate (value: number) {
    return moment(value).format('DD/MM/YYYY')
  },
  formatRating (value: string) {
    return parseInt(value)
  }
}
app.component('loader-button', LoadingButton)
app.use(BootstrapVue3).use(store).use(router).mount('#app')
