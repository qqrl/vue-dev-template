import {
  CONSOLE_REQUEST_ENABLE
} from '../index.js'
import md5 from 'md5'

// 默认请求地址
export const DEFAULTS_BASEURL = 'https://kaifa.xrcloud.net/'
// 跨域请求
export const DEFAULTS_WITHCREDENTIALS = true

export function requestSuccessFunc(requestObj) {
  CONSOLE_REQUEST_ENABLE && console.info('【request-interceptor】', `url: ${requestObj.url}`, requestObj)
  // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
  // ...
  if (requestObj.method === 'get') {
    if (requestObj.params) {
      requestObj.params = {
        zoneId: '1',
        ...requestObj.params
      }
      requestObj.params = appendMD5(requestObj.params)
    }
  } else if (requestObj.method === 'post') {
    requestObj.data = {
      ...requestObj.data,
      zoneId: '1'
    }
    requestObj.data = appendMD5(requestObj.data, 'post')
  }
  return requestObj
}

export function requestFailFunc(requestError) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  // ...

  return Promise.reject(requestError)
}

export function responseSuccessFunc(responseObj) {
  // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
  // ...
  let code = responseObj.data.status
  switch (code) {
    case 1: // 如果业务成功，直接进成功回调
      console.log('请求成功')
      return responseObj
    case 3: // 登录失效
      // 如果业务失败，根据不同 code 做不同处理
      // 比如最常见的授权过期跳登录
      // 特定弹窗
      // 跳转特定页面等
      console.log('未登录')
      if (responseObj.data.message === '尚未登录') {
        // location.href = 'https://www.xrcloud.net/login' // 这里的路径也可以放到全局配置里
      }
      return
    default:
      // 业务中还会有一些特殊 code 逻辑，我们可以在这里做统一处理，也可以下放它们到业务层
      // !responseObj.config.noShowDefaultError && global.vbus.$emit('business.response.incorrect', resData.msg)
      return Promise.reject(responseObj)
  }
}

export function responseFailFunc(responseError) {
  // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
  // ...
  console.log('响应失败')
  return Promise.reject(responseError)
}

function appendMD5(params, type) {
  if (params === undefined) {
    return undefined
  }
  var str = '';
  var count = 0;
  for (let i in params) {
    if (typeof (params[i]) !== "undefined") {
      str += i.substr(0, 1) + params[i];
      count++;
    }
  }
  str += count
  if (str !== '') {
    if (type !== 'post') {
      str = encodeURI(str)
    }
    str = md5(str);
    count = count % 10
    var mac = str.substr(0, count) + count + str.substr(count)
    return {
      ...params,
      mac: mac.toUpperCase()
    }
  }
}
