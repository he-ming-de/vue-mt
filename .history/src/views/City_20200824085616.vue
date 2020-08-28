<template>
  <div class="container">
    <div>
      <div class="item d-f j-c-s-b">
        <div class="d-f f-s12 item1">
          <div>
            <i class="iconfont icon-icon-test2"></i>
          </div>
          <div class="d-f">
            <div>{{city}}</div>
            <div class="m-l1">切换城市</div>
          </div>
          <div>[</div>
          <div class="fon">旬阳县</div>
          <div class="fon">汉阴</div>
          <div class="fon">石泉</div>
          <div class="fon">]</div>
          <div class="m-l1 item2">立即登录</div>
          <div class="fon">注册</div>
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
            <input type="text" placeholder="搜索商家或地点" class="input" />
            <div class="item5 d-f j-c-c a-i-c">
              <i class="iconfont icon-sousuo iconn"></i>
            </div>
          </div>
        </div>
        <!-- <div class="d-f">
          <div class="p-l1 p-r1 f-w hov">美团外卖</div>
          <div class="p-l1 p-r1 f-w hovs">猫眼电影</div>
          <div class="p-l1 p-r1 f-w hovs">美团酒店</div>
          <div class="p-l1 p-r1 f-w hov">名宿 / 公寓</div>
          <div class="p-l1 p-r1 f-w hov">商家入驻</div>
          <div class="p-l1 p-r1 f-w hovs">美团工艺</div>
        </div>-->
      </div>
      <div class="b-c-f ci">
        <div class="d-f a-i-c p2 io">
          <div>按省份选择:</div>
          <div class="m-l1">
            <el-select v-model="value1" placeholder="省份" @change="change">
              <el-option
                v-for="item in province"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div class="m-l1">
            <el-select v-model="value2" placeholder="城市">
              <el-option
                v-for="item in citys"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div class="m-l3">直接搜索:</div>
          <div class="m-l1">
            <input type="text" placeholder="请输入城市中文或拼音" class="inputs" />
          </div>
        </div>
        <div class="p2">热门城市：</div>
        <div>
          <div></div>
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
      province: [],
      value1: "",
      id: "",
      citys: [],
      value2: "",
    };
  },
  components: {},
  methods: {
    //定位
    getData() {
      this.$api
        .position()
        .then((res) => {
          // console.log(res);
          this.city = JSON.parse(res.data).city;
        })
        .catch((err) => {});
    },
    //获取所有省份
    getDatas() {
      this.$api
        .province()
        .then((res) => {
          // console.log(res);
          this.province = res.data.province;
        })
        .catch((err) => {});
    },

    change(e) {
      //获取省份ID
      this.id = e;
      // console.log(this.id);
      // 获取省份所有城市
      this.$api
        .citys(this.id)
        .then((res) => {
          console.log(res);
          this.citys = res.data.city;
        })
        .catch((err) => {});
    },
  },

  mounted() {
    this.getData();
    this.getDatas();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.io {
  border-bottom: 1px solid #ccc;
}
.inputs {
  width: 180px;
  height: 36px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #ccc;
}
/deep/ .el-select {
  width: 120px;
}

.ci {
  margin-top: 160px;
  border: 1px solid #ccc;
  border-radius: 6px;
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
  padding: 10px 0;
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
.item2 {
  color: rgb(252, 154, 0);
}
.item4 {
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: 3px 3px 9px #ccc;
}
.item6 {
  padding: 30px 60px 40px 0;
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
</style>