import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/element'
import App from './App.vue'

// vue-mdc-adapter
import 'vue-mdc-adapter/dist/vue-mdc-adapter.min.js';
import 'vue-mdc-adapter/dist/vue-mdc-adapter.min.css';
import VueMDCAdapter from 'vue-mdc-adapter'
Vue.use(VueMDCAdapter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// loading google charts
google.charts.load('current', { 'packages': ['corechart'] });
