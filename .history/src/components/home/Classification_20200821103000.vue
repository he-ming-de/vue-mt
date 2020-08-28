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
            <div class="item5">
              <div v-for="(item1,index1) in menu[indexs].child" :key="index1">
                <div class="d-f j-c-s-b p-b1">
                  <div class="f-s18">{{item1.title}}</div>
                  <div class="f-s12 fonts">更多></div>
                </div>
                <div class="d-f f-w-w p-t1 item6">
                  <div v-for="(item2,index2) in menu[indexs].child[0].child" :key="index2">
                    <div class="fonts f-s12 m-r1">{{item2}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item3">
        <div class="d-f">
          <div>
            <el-carousel trigger="click" height="200px" class="carou">
              <el-carousel-item v-for="item in image" :key="item">
                <h3 class="small">
                  <img :src="item" class="img" />
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="img-c">
            <img
              src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
              class="img-s"
            />
          </div>
          <div class="fong">
            <div class="">
              <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt />
            </div>
            <div>Hi! 你好</div>
            <div>
              <div>注册</div>
            </div>
            <div>
              <div>登录</div>
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
  props: {
    menu: {
      type: Array,
    },
  },
  data() {
    return {
      indexs: 0,
      indexc: 0,
      image: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "http://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.menu.map((item, index) => {
      return (this.indexs = index);
    });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.fong {
  width: 200px;
  height: 200px;
  background: #fff;
  text-align: center;
}
.img-s {
  width: 100%;
  height: 100%;
}
.img-c {
  height: 200px;
  width: 120px;
}
.carou {
  width: 400px;
}
.img {
  width: 100%;
  height: 100%;
}
.small {
  width: 400px;
  height: 200px;
}
.fonts {
  color: rgba(0, 0, 0, 0.7);
}
.item6 {
  border-top: 1px solid #ccc;
}
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
  width: 360px;
  height: 380px;
  position: absolute;
  top: 70px;
  left: 200px;
  padding: 30px 20px 0;
  display: block;
}
</style>