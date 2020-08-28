<template>
  <div class="container">
    <div class="item">
      <div class="d-f">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-meituan" />
          </svg>
        </div>
        <div class="font">美团</div>
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
.icon {
  width: 40px !important;
  height: 40px !important;
}
.font {
  font-size: 26px;
  margin-left: 10px;
}
.item {
    width: 960px;
}
</style>