<template>
  <div class="container">
    <div class="item">
      <div class="d-f j-c-s-b">
        <div class="d-f">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-meituan" />
            </svg>
          </div>
          <div class="font">美团</div>
        </div>
        <div class="d-f a-i-c">
          <div>已有美团账号？</div>
          <div class="dl">登录</div>
        </div>
      </div>
      <div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.dl {
  margin-left: 10px;
  background: rgb(255, 192, 0);
  padding: 3px 6px;
  border-radius: 2px;
  cursor: pointer;
}
.icon {
  width: 40px !important;
  height: 40px !important;
}
.font {
  font-size: 28px;
  font-weight: 700;
  margin-left: 10px;
}
.item {
  width: 960px;
  padding: 20px 0;
}
</style>