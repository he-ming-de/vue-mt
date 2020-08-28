<template>
  <div class="container">
    <div class="item">
      <div>
        <div class="f-s18">有格调</div>
        <div>
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