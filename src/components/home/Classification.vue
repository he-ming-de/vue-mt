<template>
  <div class="container">
    <div class="item">
      <div class="b-c-f item2">
        <div class="t-a-c f-w p-t2">全部分类</div>
        <div class="m-t3">
          <div v-for="(item,index) in menu" :key="index">
            <div class="title">
              <div class="d-f j-c-s-b font">
                <div class="d-f a-i-c">
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${item.icon}`" />
                  </svg>
                  <div class="f-s12 m-l1 item4">{{item.name}}</div>
                </div>
                <div>></div>
              </div>
              <div class="item5">
                <div v-for="(item1,index1) in item.child" :key="index1">
                  <div class="d-f j-c-s-b p-b1 m-t1">
                    <div class="f-s18">{{item1.title}}</div>
                    <div class="f-s12 fonts">更多></div>
                  </div>
                  <div class="d-f f-w-w p-t1 item6">
                    <div v-for="(item2,index2) in item1.child" :key="index2">
                      <div class="fonts f-s12 m-r1 hover">{{item2}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item3 m-l1 p-r1">
        <div class="d-f j-c-s-b">
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
            <div class="fongs">
              <img
                src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
                class="img-z"
              />
            </div>
            <div class="m-t1">Hi! 你好</div>
            <div class="m-t1">
              <div class="fontcz">注册</div>
            </div>
            <div class="m-t1">
              <div class="fontcz">登录</div>
            </div>
          </div>
        </div>
        <div class="d-f m-t2 j-c-s-b">
          <div class="fonu">
            <img
              src="http://p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png"
              class="img"
              alt
            />
          </div>
          <div class="fonu">
            <img
              src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
              class="img"
              alt
            />
          </div>
          <div class="fonuc">
            <img
              src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
              class="img"
              alt
            />
          </div>
          <div class="fongc">
            <div class="fongssc">
              <img
                src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                class="img-zz"
              />
            </div>
            <div class="m-t1">美团APP手机版</div>
            <div class="d-f mmi">
              <div class="colors f-s12">1元起</div>
              <div class="m-l1 f-s12">吃喝玩乐</div>
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
.mmi {
  margin-top: 5px;
}
.colors {
  color: red;
}
.hover:hover {
  color: rgb(255, 195, 0);
  cursor: pointer;
}
.fonu {
  width: 192px;
  height: 160px;
}
.fonuc {
  width: 120px;
  height: 160px;
}
.fontcz {
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
}
.img-z {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.img-zz {
  width: 40px;
  height: 40px;
}
.fongs {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.fongssc {
  width: 50px;
  height: 50px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.fongc {
  width: 200px;
  height: 160px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fong {
  width: 200px;
  height: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 30px;
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
  padding: 4px 8px 0 8px;
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
  margin-left: 1px;
  left: 200px;
  padding: 30px 20px 0;
  display: block;
  background: #fff;
  z-index: 9999;
  display: none;
}
.title:hover .item5 {
  display: block;
}
</style>