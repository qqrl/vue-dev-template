// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入插件
import router from '@/plugins/router'
import inject from '@/plugins/inject'
import store from '@/plugins/store'
import i18n from '@/plugins/i18n'

// 引入公用style
import '@/assets/css/reset.css'

// 引入根组件
import App from '@/App'

Vue.use(inject)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
