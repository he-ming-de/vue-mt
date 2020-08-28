<template>
  <div class="item">
    <Navigation></Navigation>
    <Classification :menu="menu"></Classification>
    <Style></Style>
  </div>
</template>

<script>
import Style from "../components/home/Style";
import Classification from "../components/home/Classification";
import Navigation from "../components/home/Navigation";
export default {
  name: "",
  props: {},
  data() {
    return {
      menu: [],
      icons: [
        { icon: "icon-meishi" },
        { icon: "icon-meituan" },
        { icon: "icon-jiudian" },
        { icon: "icon-minsu" },
        { icon: "icon-maoyan" },
        { icon: "icon-jipiaohuochepiao" },
        { icon: "icon-ktv" },
        { icon: "icon-shenghuofuwu" },
        { icon: "icon-lirenmeifa" },
        { icon: "icon-jiezhi" },
        { icon: "icon-qinziyou" },
        { icon: "icon-yundongjianshen" },
        { icon: "icon-jiazhuang" },
        { icon: "icon-xuexipeixun2" },
        { icon: "icon-yiliaojiankang" },
        { icon: "icon-jiuba" },
      ],
      city: "",
      keyword: "",
    };
  },
  components: {
    Navigation,
    Classification,
    Style,
  },
  methods: {
    getData() {
      this.$api
        .menu()
        .then((res) => {
          this.menu = res.data.menu;
          this.menu.map((item, index) => {
            for (let i = 0; i < this.icons.length; i++) {
              if (i == index) {
                this.$set(item, "icon", this.icons[i].icon);
              }
            }
          });
          console.log(this.menu);
        })
        .catch((err) => {});
    },
    getDatas() {
      this.$api
        .products(this.keyword, this.city)
        .then((res) => {
          console.log(res);
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
.item {
  background: rgb(248, 248, 248);
}
</style>