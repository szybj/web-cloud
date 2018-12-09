<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
        <i slot="prefix" class="icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "userLogin",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
        systemId: 1
      },
      checked: false,
      loginRules: {
        username: [
          { required: true, trigger: "blur",  message: "请输入用户名", }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      },
      passwordType: "password"
    }
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["tagWel"])
  },
  props: [],
  methods: {
    showPassword() {
      this.passwordType == ""? (this.passwordType = "password"): (this.passwordType = "")
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("logIn", this.loginForm).then(() => {
            this.$router.push({ path: this.tagWel.value })
          })
        }
      })
    }
  }
}
</script>
<style>
</style>
