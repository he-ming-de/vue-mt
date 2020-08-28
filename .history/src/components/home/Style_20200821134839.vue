<template>
  <div>
    <div>有格调</div>
    <div>
    <div v-for="(item,index in arr) :key='index' "></div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: ["美食", "丽人", "电影", "旅游", "景点"],
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>