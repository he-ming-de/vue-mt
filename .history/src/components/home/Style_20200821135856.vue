<template>
  <div class="container p-t3">
    <div class="item">
      <div class="d-f">
        <div class="f-s18 c-f ">有格调</div>
        <div class="d-f">
          <div v-for="(item,index) in arr" :key="index">
            <div>{{item}}</div>
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
.item {
  width: 960px;
  background: rgb(243,194,71);
}
</style>