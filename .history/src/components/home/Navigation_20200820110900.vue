<template>
  <div class="container">
    <div class="item d-f j-c-s-b">
      <div class="d-f f-s12 item1">
        <div>
        <i class="iconfont "></i>
        </div>
        <div>成都市 切换城市</div>
        <div>[</div>
        <div class="fon">旬阳县</div>
        <div class="fon">汉阴</div>
        <div class="fon">石泉</div>
        <div class="fon">]</div>
        <div class="m-l1 item2">立即登录</div>
        <div class="fon">注册</div>
      </div>
      <div class="d-f">
        <div class="font">我的美团</div>
        <div class="font">手机APP</div>
        <div class="font">商家中心</div>
        <div class="font">美团规则</div>
        <div class="font">网站导航</div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.item {
  width: 960px;
}
.container {
  background: rgb(248, 248, 248);
}
.font {
  padding: 12px 14px;
  font-size: 12px;
  color: #ccc;
}
.item1 {
  padding-top: 12px;
}
.fon {
  margin-left: 6px;
  color: #ccc;
}
.item2 {
  color: rgb(252, 154, 0);
}
</style>