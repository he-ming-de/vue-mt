<template>
  <div class="container">
    <div class="item">
      <div>
        <div class="d-f m-t1">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-meituan" />
            </svg>
          </div>
          <div class="font">美团</div>
        </div>
        <div class="m-t1 d-f">
          <div>
            <img
              src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
              alt
            />
          </div>
          <div class="m-t3">
            <div class="zh">账号登录</div>
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
                  <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
                  </el-form-item>
                  <el-form-item prop="pass">
                    <el-input
                      type="password"
                      v-model="ruleForm.pass"
                      placeholder="请输入密码"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div class="dl">登录</div>
            <div class="d-f fontc">
              <div>你还没有账号？</div>
              <div class="m-l1 color">免费注册</div>
            </div>
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
    return {
      ruleForm: {
        pass: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
      },
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
.fontc {
  margin-left: 100px;
  margin-top: 8px;
}
.color {
  color: sandybrown;
}
.dl {
  width: 240px;
  padding: 6px 0px;
  background: sandybrown;
  text-align: center;
  border-radius: 3px;
  margin-left: 100px;
  color: #fff;
}
.zh {
  margin-left: 100px;
  margin-bottom: 20px;
}
/deep/.el-input__inner {
  width: 240px;
}
/deep/.el-input {
  width: 240px;
}
.item {
  width: 960px;
}
.font {
  font-size: 28px;
  font-weight: 700;
  margin-left: 10px;
}
.icon {
  width: 40px !important;
  height: 40px !important;
}
</style>