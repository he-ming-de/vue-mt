<template>
  <div class="container">
    <div class="item">
      <div class="b-c-f item2">
        <div class="t-a-c f-w p-t2">全部分类</div>
        <div class="m-t3">
          <div v-for="(item,index) in menu" :key="index" class="d-f j-c-s-b font">
            <div class="d-f a-i-c">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`" />
              </svg>
              <div class="f-s12 m-l1 item4">{{item.name}}</div>
            </div>
            <div>></div>
          </div>
          <div class="item5">
            <div v-for="(item,index) in menu[0].child" :key="index">
              <div class="d-f j-c-s-b">
                <div>{{item.title}}</div>
                <div>更多</div>
              </div>
              <div v-for="(item1,index1) in menu[0].child[0].child" :key="index1">
                <div>{{item1}}</div>
              </div>
            </div>
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
.font :hover {
  cursor: pointer;
  color: #000;
  font-size: 700;
}
.icon {
  width: 16px !important;
  height: 16px !important;
}
.item4 {
  color: rgba(0, 0, 0, 0.7);
}
.item5 {
  width: 400px;
  height: 410px;
  position: absolute;
  top: 70px;
  left: 200px;
  padding: 30px 20px 0;
}
</style>