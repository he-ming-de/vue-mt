<template>
  <div class="container p-t3">
    <div class="item">
      <div class="d-f fong a-i-c">
        <div class="f-s18 c-f p-l1">有格调</div>
        <div class="d-f">
          <div v-for="(item,index) in arr" :key="index">
            <div class="d-f f-d-c j-c-c a-i-c xs">
              <div class="c-f m-l1">{{item.name}}</div>
              <div class="item1"></div>
              <div v-if="flag==true &&flags===index" class="item2"></div>
            </div>
          </div>
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
    return {
      arr: [
        { name: "约会聚餐", key: "美食" },
        { name: "丽人spa", key: "丽人" },
        { name: "电影演出", key: "电影" },
        { name: "品质出游", key: "旅游" },
        { name: "全部", key: "景点" },
      ],
      flag: true,
      flags: 0,
    };
  },
  components: {},
  methods: {
    mouseover() {
      this.flag = false;
    },
    mouseout() {
      this.flag = true;
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.item {
  width: 960px;
  background: rgb(243, 194, 71);
  border-radius: 10px 10px 0 0;
}
.fong {
  padding: 6px 0;
}
.item1 {
  position: absolute;
  margin-top: 26px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid white;
  display: none;
}
.item2 {
  position: absolute;
  margin-top: 26px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid white;
}
.xs:hover .item1 {
  display: block;
}
</style>