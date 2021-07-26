import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as jsPDF  from "jspdf"; // eslint-disable-line
import { jsPDF as $jsPDF }  from "jspdf"; // eslint-disable-line
console.log($jsPDF)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
