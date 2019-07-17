export default {
  getUserInfo({commit}) {
    console.log('调用action')
    let url = "user/GetUserInfo.do";
    console.log(this._vm)
    this._vm.$ajax.get(url).then(
      ({ data }) => {
        commit('SET_USER_INFO', data.result)
      }
    );
  }
}