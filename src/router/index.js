import Vue from 'vue'
import Router from 'vue-router'
import BxHome from '@/view/BxHome'
import FailureReporting from '@/view/FailureReporting'
import Success from '@/view/Success'
import BxList from '@/view/BxList'
import ListDetails from '@/view/ListDetails'
import TelCheck from '@/view/TelCheck'
import Evaluate from '@/view/Evaluate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BxHome',
      component: BxHome
    },
    {
      path: '/FailureReporting',
      name: 'FailureReporting',
      component: FailureReporting
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    },
    {
      path: '/BxList',
      name: 'BxList',
      component: BxList
    },
    {
      path: '/ListDetails',
      name: 'ListDetails',
      component: ListDetails
    },
    {
      path: '/TelCheck',
      name: 'TelCheck',
      component: TelCheck
    },
    {
      path: '/Evaluate',
      name: 'Evaluate',
      component: Evaluate
    }
  ]
})
