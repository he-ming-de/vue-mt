<template>
  <div class="container">
    <div class="item">
      <div class="b-c-f item2">
        <div class="t-a-c f-w p-t2">全部分类</div>
        <div class="m-t3">
          <div v-for="(item,index) in menu" :key="index" class="d-f j-c-s-b font">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-haimianbaobao-" />
            </svg>
            <div class="f-s12">{{item.name}}</div>
            <div>></div>
          </div>
        </div>
      </div>
      <div class="item3">5555</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    menu: {
      type: Array,
    },
  },
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
.item3 {
  padding-left: 200px;
}
.item {
  width: 960px;
}
.container {
  background: rgb(248, 248, 248);
  margin-top: 180px;
}
.item2 {
  width: 200px;
  position: absolute;
  border: 1px solid #ccc;
  top: 160px;
}
.font {
  padding: 0 8px;
  margin-top: 5px;
}
</style>