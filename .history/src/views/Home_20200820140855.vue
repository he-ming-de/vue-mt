<template>
  <div>
    <Navigation></Navigation>
    <Classification></Classification>
  </div>
</template>

<script>
import Classification from "../components/home/Classification"
import Navigation from "../components/home/Navigation";
export default {
  name: "",
  props: {},
  data() {
    return {};
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
          this.menu=res.data.menu
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
</style>