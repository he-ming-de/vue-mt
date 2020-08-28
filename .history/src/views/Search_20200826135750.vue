<template>
  <div class="container">
    <div class="item">
      <div class="d-f j-c-s-b">
        <div class="d-f f-s12 item1">
          <div>
            <i class="iconfont icon-icon-test2"></i>
          </div>
          <div class="d-f">
            <div>{{city}}</div>
            <div class="m-l1" @click="citys">切换城市</div>
          </div>
          <div>[</div>
          <div class="fon">旬阳县</div>
          <div class="fon">汉阴</div>
          <div class="fon">石泉</div>
          <div class="fon">]</div>
          <div v-if="username!==null" class="m-l1 d-f">
            <div class="fon">{{username}}</div>
            <div class="fon" @click="out">退出登录</div>
          </div>
          <div class="d-f" v-else>
            <div class="m-l1 item2" @click="login">立即登录</div>
            <div class="fon" @click="register">注册</div>
          </div>
        </div>
        <div class="d-f">
          <div class="ij">
            <div class="font">我的美团</div>
            <div class="mt">
              <div class="font">我的美团</div>
              <div class="font">我的订单</div>
              <div class="font">我的收藏</div>
              <div class="font">抵用卷</div>
              <div class="font">账户设置</div>
            </div>
          </div>
          <div class="font">手机APP</div>
          <div class="ij">
            <div class="fontcc">商家中心</div>
            <div class="ms">
              <div class="fontv">团餐饮商户中心</div>
              <div class="fontv">登录商家中心</div>
              <div class="fontv">美团智能收银</div>
              <div class="fontv">我想合作</div>
              <div class="fontv">手机免费开店</div>
              <div class="fontv">餐饮代理商招募</div>
              <div class="fontv">商家申请开票</div>
              <div class="fontv">免费合作美团排队</div>
            </div>
          </div>
          <div class="ij">
            <div class="font">美团规则</div>
            <div class="mts">
              <div class="font">美团规则</div>
              <div class="font">规则中心</div>
              <div class="font">规则目录</div>
              <div class="font">规则评议院</div>
            </div>
          </div>
          <div class="ij">
            <div class="font">网站导航</div>
            <div class="ma">
              <div class="mas">
                <div class="m-l3">
                  <div class="sow1 d-f j-c-c a-i-c">酒店旅游</div>
                  <div class="d-f j-c-s-b">
                    <div class="d-f f-d-c a-i-c">
                      <div v-for="item in arr1" :key="item.id" class="fontccs">{{item}}</div>
                    </div>
                    <div class="d-f f-d-c a-i-c">
                      <div v-for="item in arr2" :key="item.id" class="fontccs">{{item}}</div>
                    </div>
                    <div class="d-f f-d-c a-i-c">
                      <div v-for="item in arr3" :key="item.id" class="fontccs">{{item}}</div>
                    </div>
                  </div>
                </div>

                <div class="m-l3">
                  <div class="sow3 d-f j-c-c a-i-c">吃美食</div>
                  <div class="sow4 d-f j-c-s-a">
                    <div class="d-f f-d-c a-i-c">
                      <div v-for="item in arr4" :key="item.id" class="fontccs">{{item}}</div>
                    </div>
                    <div class="d-f f-d-c a-i-c">
                      <div v-for="item in arr5" :key="item.id" class="fontccs">{{item}}</div>
                    </div>
                  </div>
                </div>

                <div class="m-l3">
                  <div class="sow5 d-f j-c-c a-i-c hei fz-16">看电影</div>
                  <div class="sow6 d-f j-c-c">
                    <div class="d-f f-d-c a-i-c">
                      <div v-for="item in arr6" :key="item.id" class="fontccs">{{item}}</div>
                    </div>
                  </div>
                </div>

                <div class="rbox d-f f-d-c a-i-c">
                  <div class="sow5 d-f f-d-c j-c-c">手机应用</div>
                  <div class="d-f he a-i-c m-l2 f-w-w">
                    <div v-for="item in imge" class="icon" :key="item.id">
                      <img class="imgccc" :src="item" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item4 d-f f-d-c a-i-c j-c-c p-b2">
        <div class="item d-f">
          <div class="d-f item6">
            <i class="iconfont icon-meituan icons"></i>
            <div class="fonts m-l1">美团</div>
          </div>
          <div class="item6 m-l3 d-f heigh">
            <input type="text" placeholder="搜索商家或地点" class="input" v-model="value" />
            <div class="item5 d-f j-c-c a-i-c">
              <i class="iconfont icon-sousuo iconn"></i>
            </div>
            <div v-if="this.value!==''">
              <div class="iiis">
                <div v-for="(item,index) in top" :key="index">
                  <div class="fontscd">{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="loop b-c-f p2">
        <div class="d-f">
          <div class="d-f">
            <div class="search-fontscs">分类</div>
            <div>
              <div class="search-fonts">全部</div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="d-f m-t1">
          <div class="d-f">
            <div class="search-fontscs">区域</div>
            <div>
              <div class="search-fonts">全部</div>
            </div>
          </div>
          <div class="d-f f-w-w m-l2">
            <div v-for="(item,index) in areas" :key="index" class="m-b1">
              <div class="search-fontss">{{item.type}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-t2 m-b2 b-c-f p2">
        <div class="d-f p-b2 xian">
          <div>智能排序</div>
          <div class="m-l1">价格排序</div>
          <div class="m-l1">人气最高</div>
          <div class="m-l1">评价最高</div>
        </div>
        <div class="m-t1">
          <div v-for="(item,index) in more" :key="index">
            <div class="d-f a-i-c">
              <div v-if="item.photos.length>0" class="m-b1">
                <img :src="item.photos[0].url" class="loop-img" />
              </div>
              <div v-else>
                <img src="./2.jpg" class="loop-img" />
              </div>
              <div class="m-l2">
                <div class="loop-font">{{item.name}}</div>
                <div class="d-f">
                  <div v-if="item.biz_ext.rating>0">
                    <el-rate
                      v-model="item.biz_ext.rating"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}分"
                    ></el-rate>
                  </div>
                  <div v-else>暂无评价</div>
                </div>
                <div class="d-f">
                  <div class="search-font m-r1 t-o-e">{{item.type}}</div>
                  <div class="search-font t-o-e">{{item.address}}</div>
                </div>
                <div v-if="item.biz_ext.cost>0">
                  <div>人均￥{{item.biz_ext.cost}}</div>
                </div>
                <div v-else>暂无价格</div>
              </div>
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
      arr1: ["国际机票", "经济型酒店", "公寓", "青年旅社", "农家院"],
      arr2: ["火车票", "主题酒店", "豪华酒店", "度假酒店"],
      arr3: ["民宿", "商务酒店", "客栈", "别墅"],
      arr4: ["烤鱼", "烧烤", "火锅"],
      arr5: ["特色小吃", "自助餐", "代金券"],
      arr6: [
        "热映电影",
        "热门影院",
        "热映电影口碑榜",
        "最受期待电影",
        "国内票房榜",
        "北美票房榜",
        "电影排行榜",
      ],
      imge: [
        require("../components/home/meituan.png"),
        require("../components/home/waimai.png"),
        require("../components/home/shuidi.png"),
        require("../components/home/dianping.png"),
        require("../components/home/maoyan.png"),
      ],
      city: "",
      value: "",
      cityc: "",
      top: [],
      lately: [],
      username: "",
      citycss: "",
      keyword: "",
      more: [],
      areas: [],
    };
  },
  components: {},
  methods: {
    //退出登录
    out() {
      localStorage.removeItem("username");
    },
    //立即登录
    login() {
      this.$router.push("/login");
    },
    //注册
    register() {
      this.$router.push("/register");
    },
    //定位
    getData() {
      this.$api
        .position()
        .then((res) => {
          // console.log(res);
          this.city = JSON.parse(res.data).city;
          this.cityc = this.city.slice(0, 2);
          // this.city = res.data.slice(34, 36);
          // console.log(this.city);
        })
        .catch((err) => {});
    },
    //切换城市
    citys() {
      this.$router.push("/city");
    },
    //商铺详情 products(keyword, city)
    getdatas() {
      this.$api
        .products(this.keyword, this.citycss)
        .then((res) => {
          console.log(res);
          this.more = res.data.more;
          this.more.map((item) => {
            item.biz_ext.rating = Number(item.biz_ext.rating);
          });
        })
        .catch((err) => {});
    },
    //获取城市具体信息
    getdatacs() {
      this.$api
        .crumbs(this.citycss)
        .then((res) => {
          // console.log(res);
          this.areas = res.data.areas;
        })
        .catch((err) => {});
    },
    //全部分类
    getdatax() {
      this.$api
        .menu()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.getData();
    //取 最近访问城市
    this.lately = JSON.parse(localStorage.getItem("lately"));
    // console.log(this.lately);
    //取 用户名
    this.username = localStorage.getItem("username");
    // console.log(this.username);
    //接受navigation传过来的参数keyword, city
    this.citycss = this.$route.query.city;
    this.keyword = this.$route.query.keyword;
    // console.log(this.citycss);
    // console.log(this.keyword);
    this.getdatas();
    this.getdatacs();
    this.getdatax()
  },
  watch: {
    //实时监听输入框类容
    value() {
      this.$api
        .searchTop(this.value, this.cityc)
        .then((res) => {
          console.log(res);
          this.top = res.data.top;
        })
        .catch((err) => {});
    },
  },
  computed: {},
};
</script>

<style scoped lang='scss'>
.xian {
  border-bottom: 1px solid #ccc;
}
.fontscd {
  padding: 3px 10px;
  font-size: 12px;
}
.fontscd:hover {
  background: rgba(1, 1, 1, 0.1);
  cursor: pointer;
  color: chocolate;
}
.iiis {
  position: absolute;
  background: #fff;
  left: 0;
  top: 72px;
  z-index: 9;
  width: 400px;
  margin-top: 6px;
}
.hov:hover {
  color: chocolate;
}
.hovs:hover {
  color: crimson;
}
.imgccc {
  width: 40px;
  height: 40px;
  margin: 0 10px;
}
.he {
  height: 100%;
}
.sow1 {
  width: 200px;
  height: 50px;
}
.sow3 {
  width: 150px;
  height: 50px;
}
.sow4 {
  width: 150px;
}
.sow5 {
  width: 100px;
  height: 50px;
}
.sow6 {
  width: 100px;
}
.mas {
  display: flex;
  justify-content: space-between;
}
.ij:hover .ma {
  display: block;
}
.ij:hover .mts {
  display: block;
}
.ma {
  background: #fff;
  width: 960px;
  height: 240px;
  position: absolute;
  z-index: 4;
  display: none;
  right: 0;
  top: 40px;
}
.mts {
  top: 0;
  background: #fff;
  position: absolute;
  width: 100px;
  height: 140px;
  z-index: 1;
  display: none;
}
.mt {
  top: 0;
  background: #fff;
  position: absolute;
  width: 100px;
  height: 180px;
  z-index: 1;
  display: none;
}
.ms {
  background: #fff;
  width: 120px;
  position: absolute;
  z-index: 4;
  margin-left: -20px;
  display: none;
  text-align: center;
  height: 290px;
}
.iconn {
  cursor: pointer;
  font-size: 30px;
}
.heigh {
  height: 40px;
  position: relative;
  width: 500px;
}
.item5 {
  background-color: rgb(255, 195, 0);
  width: 104px;
  height: 44px;
  position: absolute;
  right: 60px;
  border-radius: 10px;
}
.input {
  height: 40px;
  width: 500px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #eee;
  padding-left: 20px;
}
.fonts {
  font-size: 36px;
  font-weight: 700;
}
.icons {
  color: rgb(255, 195, 0);
  font-size: 46px;
}
.item {
  width: 960px;
}
.container {
  background: rgb(248, 248, 248);
}
.fontv {
  padding: 10px 0px;
  font-size: 12px;
  color: #ccc;
}
.fontv:hover {
  cursor: pointer;
  color: rgb(255, 195, 0);
}
.fontcc {
  width: 100px;
  font-size: 12px;
  text-align: center;
  padding: 10px 0;
  color: #ccc;
}
.fontcc:hover {
  background: #fff;
  color: rgb(255, 195, 0);
}
.font {
  text-align: center;
  width: 100px;
  padding: 10px 0;
  font-size: 12px;
  color: #ccc;
}
.fontccs {
  text-align: center;
  width: 100px;
  padding: 5px 0;
  font-size: 12px;
  color: #ccc;
}
.font:hover {
  cursor: pointer;
  color: rgb(255, 195, 0);
}
.fontccs:hover {
  cursor: pointer;
  color: rgb(255, 195, 0);
}
.item1 {
  padding-top: 12px;
}
.fon {
  margin-left: 6px;
  color: #ccc;
}
.fon:hover {
  cursor: pointer;
  color: rgb(255, 195, 0);
}
.item2 {
  color: rgb(252, 154, 0);
}
.item4 {
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
}
.item6 {
  padding: 30px 60px 30px 0;
}
.ij {
  position: relative;
}
.ij:hover .mt {
  display: block;
}
.ij:hover .ms {
  display: block;
}
.loop-img {
  width: 200px;
  height: 100px;
}
.loop-font {
  font-size: 20px;
}
.loop {
  margin-top: 180px;
  border-radius: 10px;
  color: rgba(2, 2, 2, 0.6);
}
.search-font {
  width: 160px;
}
.search-fonts {
  width: 60px;
  text-align: center;
  background: rgb(255, 195, 0);
  border-radius: 10px;
  margin-left: 30px;
}
.search-fontss {
  width: 100px;
}
.search-fontscs {
  width: 40px;
}
</style>