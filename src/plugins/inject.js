import axios from './axios'
import errorHandler from './errorHander'
import {DEBUG_VUE_TIP} from '@/config/index'
global.ajax = axios

export default {
  install: (Vue, options) => {
    Vue.config.productionTip = DEBUG_VUE_TIP
    Vue.config.errorHandler = errorHandler
    Vue.prototype.$throw = (error) => errorHandler(error, this)
    Vue.prototype.$ajax = axios
    // 需要挂载的都放在这里
  }
}
