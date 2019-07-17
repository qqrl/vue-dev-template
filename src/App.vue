<template>
  <div id="app">
    <div>
      <ul class="clearfix">
        <li @click="$router.push('/computed')">{{ $t('nav.computed')}}</li>
        <li @click="$router.push('/computed/host')">{{ $t('nav.host') }}</li>
        <li @click="$router.push('/net')">{{ $t('nav.net') }}</li>
        <li @click="$router.push('/net/ip')">{{ $t('nav.ip') }}</li>
      </ul>
      <h2 @click="changeLanguage('EN')">切换英文</h2>
      <h2 @click="changeLanguage('ZH')">切换中文</h2>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  created() {
    console.log("更新前信息++++++++++++++");
    console.log(this.userInfo);
    this.getUserInfo();
  },
  methods: {
    changeLanguage(val) {
      switch (val) {
        case "EN":
          this.$i18n.locale = "en-US";
          break;
        case "ZH":
          this.$i18n.locale = "zh-CN";
          break;
      }
    },
    ...mapActions(["getUserInfo"])
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  watch: {
    userInfo(val) {
      console.log("更新后信息++++++++++++++");
      console.log(val);
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  line-height: 30px;
}
h2 {
  cursor: pointer;
  color: #0269c8;
}
ul > li {
  width: 25%;
  float: left;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
</style>
