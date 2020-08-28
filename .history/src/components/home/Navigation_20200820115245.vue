<template>
  <div class="container">
    <div>
      <div class="item d-f j-c-s-b">
        <div class="d-f f-s12 item1">
          <div>
            <i class="iconfont icon-icon-test2"></i>
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
      <div class="item4 d-f j-c-c">
        <div class="item d-f">
          <div class="d-f item6">
            <i class="iconfont icon-meituan icons"></i>
            <div class="fonts m-l1">美团</div>
          </div>
          <div class="item6 m-l3 d-f heigh">
            <input type="text" placeholder="搜索商家或地点" class="input" />
            <div class="item5 d-f j-c-c a-i-c">
              <i class="iconfont icon-sousuo iconn"></i>
            </div>
          </div>
        </div>
        <div class="d-f">
      <div>美团外卖</div>
      <div>猫眼电影</div>
      <div>美团酒店</div>
      <div>名宿 / 公寓</div>
      <div>商家入驻</div>
      <div>美团工艺</div>
    </div>
      </div>
    </div>
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
.iconn {
  font-size: 30px;
}
.heigh {
  height: 40px;
  position: relative;
  width: 500px;
}
.item5 {
  background-color: rgb(255, 195, 0);
  width: 104px;
  height: 44px;
  position: absolute;
  right: 60px;
  border-radius: 10px;
}
.input {
  height: 40px;
  width: 500px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #eee;
  padding-left: 20px;
}
.fonts {
  font-size: 36px;
  font-weight: 700;
}
.icons {
  color: rgb(255, 195, 0);
  font-size: 46px;
}
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
.item4 {
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
}
.item6 {
  padding: 30px 60px 30px 0;
}
</style>