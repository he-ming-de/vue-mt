<template>
  <div class="container">
    <div class="item">
      <div class="d-f j-c-s-b">
        <div class="d-f">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-meituan" />
            </svg>
          </div>
          <div class="font">美团</div>
        </div>
        <div class="d-f a-i-c">
          <div>已有美团账号？</div>
          <div class="dl">登录</div>
        </div>
      </div>
      <div>
        <input type="text" />
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
.dl {
  margin-left: 10px;
  background: rgb(255, 192, 0);
  padding: 3px 6px;
  border-radius: 2px;
  cursor: pointer;
}
.icon {
  width: 40px !important;
  height: 40px !important;
}
.font {
  font-size: 28px;
  font-weight: 700;
  margin-left: 10px;
}
.item {
  width: 960px;
  padding: 20px 0;
}
</style>