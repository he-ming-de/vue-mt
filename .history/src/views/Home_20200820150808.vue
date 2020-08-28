<template>
  <div>
    <Navigation></Navigation>
    <Classification :menu="menu"></Classification>
  </div>
</template>

<script>
import Classification from "../components/home/Classification";
import Navigation from "../components/home/Navigation";
export default {
  name: "",
  props: {},
  data() {
    return {
      menu: [],
      icons: [
        { icon: icon - meishi },
        { icon: icon - meituan },
        { icon: icon - jiudian },
        { icon: icon - minsu },
        { icon: icon - maoyan },
        { icon: icon - jipiaohuochepiao },
        { icon: icon - ktv },
        { icon: icon - shenghuofuwu },
        { icon: icon - lirenmeifa },
        { icon: icon - jiezhi },
        { icon: icon - qinziyou },
        { icon: icon - yundongjianshen },
        { icon: icon - jiazhuang },
        { icon: icon - xuexipeixun2 },
        { icon: icon - yiliaojiankang },
        { icon: icon - jiuba },
      ],
    };
  },
  components: {
    Navigation,
    Classification,
  },
  methods: {
    getData() {
      this.$api
        .menu()
        .then((res) => {
          console.log(res);
          this.menu = res.data.menu;
          this.menu.map((item, index) => {
            for (let i = 0; i < this.icons.length; i++) {
              if ((i = index)) {
                this.$set(item, "icon", this.icons[0].icon);
              }
            }
          });
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>