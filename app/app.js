import Vue from 'nativescript-vue'

import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';

Vue.use(BottomNavigation);

import App from './components/App'
Vue.config.silent = false
new Vue({
  render: (h) => h('Frame', [h(App)]),
}).$start()
