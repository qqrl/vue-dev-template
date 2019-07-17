/* 抛出全局异常 */
const errorHandler = (error, vm) => {
  console.error('抛出全局异常')
  console.error(error)
}

export default errorHandler