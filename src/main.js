// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ToggleButton from 'vue-js-toggle-button'
import PortalVue from 'portal-vue'

Vue.use(ToggleButton)
Vue.use(PortalVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
