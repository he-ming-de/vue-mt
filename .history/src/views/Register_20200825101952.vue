<template>
  <div class="container">
    <div class="item">
      <div class="d-f j-c-s-b">
        <div class="d-f">
          <div>
            <!-- iconfont 颜色图标 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-meituan" />
            </svg>
          </div>
          <div class="font">美团</div>
        </div>
        <div class="d-f a-i-c">
          <div>已有美团账号？</div>
          <div class="dl" @click="login">登录</div>
        </div>
      </div>
      <div>
        <div>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="lj" @click="getData">立即注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    //跳转登录页面
    login() {
      this.$router.push("/login");
    },
    //注册
    getData() {
      this.$api
        .register({
          username: this.ruleForm.username,
          password: this.ruleForm.pass,
          email: this.ruleForm.email,
        })
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.$notify({
              title: "成功",
              message: res.msg,
              type: "success",
            });
            this.$router.push("/");
          } else {
            this.$notify.error({
              title: "错误",
              message: res.msg,
            });
          }
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
.lj {
  margin-left: 140px;
  width: 120px;
  text-align: center;
  padding: 3px 0;
  background: chocolate;
}
/deep/.el-input__inner {
  width: 240px;
}
/deep/.el-input {
  width: 240px;
}
.fonts {
  width: 100px;
}
.input1 {
  height: 26px;
  width: 240px;
  outline: none;
}
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