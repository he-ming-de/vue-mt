<template>
  <div class="container">
    <div class="item">
      <div class="b-c-f item2">
        <div class="t-a-c f-w p-t2">全部分类</div>
        <div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      menu:{
          type:Array
      }
  },
  data() {
    return {
        
    };
  },
  components: {},
  methods: {
     
  },
  mounted() {
   
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
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
</style>