<template>
  <div class="container">
    <div class="item">
      <div>
        <div class="d-f m-t1">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-meituan" />
            </svg>
          </div>
          <div class="font">美团</div>
        </div>
        <div class="m-t1">
          <div><img
            src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt
          /></div>
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
.item {
  width: 960px;
}
.font {
  font-size: 28px;
  font-weight: 700;
  margin-left: 10px;
}
.icon {
  width: 40px !important;
  height: 40px !important;
}
</style>