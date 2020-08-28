<template>
  <div class="container p-t3">
    <div class="item">
      <div class="d-f fong a-i-c">
        <div class="f-s18 c-f p-l1">有格调</div>
        <div class="d-f">
          <div v-for="(item,index) in arr" :key="index">
            <div class="d-f f-d-c j-c-c a-i-c">
              <div class="c-f m-l1" @mouseover="mouseover">{{item}}</div>
              <div v-if="flag==false"></div>
              <div v-if="flag==true" class="item1"></div>
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
      arr: ["美食", "丽人", "电影", "旅游", "景点"],
      flag: false,
      flags: 0,
    };
  },
  components: {},
  methods: {
    mouseover() {
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
}
</style>