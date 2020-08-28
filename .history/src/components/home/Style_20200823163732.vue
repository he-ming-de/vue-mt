<template>
  <div class="container p-t3">
    <div class="item">
      <div class="d-f fong a-i-c">
        <div class="f-s18 c-f p-l1">有格调</div>
        <div class="d-f">
          <div v-for="(item,index) in arr" :key="index">
            <div class="d-f f-d-c j-c-c a-i-c xs">
              <div
                class="c-f m-l1"
                @mouseover="mouseover"
                @mouseleave="mouseout(index,item)"
              >{{item.name}}</div>
              <div class="item1"></div>
              <div v-if="flag==true &&flags===index" class="item2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-f f-w-w">
        <div v-for="(item,index) in more" :key="index">
          <!-- <div v-for="(item1,index1) in item.photos" :key="index1">
            <div>
              <img :src="item1.url" alt class="img" />
            </div>
          </div>-->
          <div v-if="item.photos.length>0" class="imgs">
            <img :src="item.photos[0].url" alt class="img" />
          </div>
          <div v-else  class="imgs">
            <div class="img b-c-c"></div>
          </div>
          <div class="font t-o-e t-a-c">{{item.name}}</div>
          <div class="d-f font t-o-e j-c-c">
            <div class="t-o-e">{{item.adname}}</div>
            <div class="m-l1 t-o-e">{{item.address}}</div>
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
        { name: "约会聚餐", keyword: "美食" },
        { name: "丽人spa", keyword: "丽人" },
        { name: "电影演出", keyword: "电影" },
        { name: "品质出游", keyword: "旅游" },
        { name: "全部", keyword: "景点" },
      ],
      flag: true,
      flags: 0,
      city: "",
      keyword: "",
      more: [],
    };
  },
  components: {},
  methods: {
    mouseover() {
      this.flag = false;
    },
    mouseout(index, item) {
      //   console.log(item);
      this.flag = true;
      this.flags = index;
      this.keyword = item.keyword;
      this.getDatas();
    },
    getDatas() {
      this.$api
        .products(this.keyword, this.city)
        .then((res) => {
          console.log(res);
          this.more = res.data.more;
        })
        .catch((err) => {});
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
.img {
  width: 300px;
  height: 300px;
}
.imgs {
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.font {
  width: 320px;
}
</style>