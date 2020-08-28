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
        { icon: icon-meituan },
        { icon: icon-jiudian },
        { icon: icon-minsu },
        { icon: icon-maoyan },
        { icon: icon-jipiaohuochepiao },
        { icon: icon-ktv },
        { icon: icon-shenghuofuwu },
        { icon: icon-lirenmeifa },
        { icon: icon-jiezhi },
        { icon: icon-yundongjianshen },
        { icon: icon-jiazhuang },
        { icon: icon - meishi },
        { icon: icon - meishi },
        { icon: icon - meishi },
        { icon: icon - meishi },
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