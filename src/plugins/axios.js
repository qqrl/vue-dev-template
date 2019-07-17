import axios from 'axios'
import {AXIOS_DEFAULT_CONFIG} from '@/config'
import {DEFAULTS_BASEURL, DEFAULTS_WITHCREDENTIALS, requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc} from '../config/interceptors/axios'

let axiosInstance = {}

axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入响应拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

axiosInstance.defaults.withCredentials = DEFAULTS_WITHCREDENTIALS

axiosInstance.defaults.baseURL = DEFAULTS_BASEURL

export default axiosInstance
