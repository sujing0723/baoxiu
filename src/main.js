// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'

import 'element-ui/lib/theme-chalk/index.css'

import '@/mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    failureReportingId: '',
    userPhone: '',
    campus: '',
    place: '',
    position: '',
    equipment: '',
    number: '',
    time: '',
    description: ''
  },
  mutations: {
    storeUserPhone (state, userPhone) {
      state.userPhone = userPhone
    },
    storeFailureReportingId (state, failureReportingId) {
      state.failureReportingId = failureReportingId
    }
  },
  getters: {
    userPhone: state => {
      return state.userPhone
    },
    failureReportingId: state => {
      return state.failureReportingId
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
