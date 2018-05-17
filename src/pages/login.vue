<template>
  <div class="login">
    <el-card class="login-form">
      <h3 class="title">SIGN IN</h3>
      <el-form :model="login" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="login.username" size="medium" prefix-icon="el-icon-fa-user-o" placeholder="USERNAME"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="login.password" size="medium" prefix-icon="el-icon-fa-lock" type="password" placeholder="PASSWORD"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loginLoading" type="primary" round class="full-width" @click="handleLogin">SIGN IN</el-button>
        </el-form-item>
        <el-form-item>
          <el-button round class="full-width">REGISTER</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import '../style/login.less'
import { mapMutations } from 'vuex'
import { USER_UPDATE } from '../store/mutation-types.js'
import axios from '../http.js'
export default {
  name: 'Login',
  data() {
    return {
      loginLoading: false,
      login: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true, message: '请输入用户名.', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码.', trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    ...mapMutations({
      handleUserUpdate: USER_UPDATE
    }),
    handleLogin() {
      let pass = false
      this.$refs['loginForm'].validate((value) => {
        pass = value
      })
      if (!pass) return false
      this.loginLoading = true
      const data = {...this.login}
      axios.post('/User/login', data).then(({data}) => {
        if (data.type === 1) {
          this.$message.success('登录成功.')
          this.handleUserUpdate(data.data)
          this.$router.push({name: 'Index'})
        } else {
          throw new Error(data.message)
        }
      }).catch(err => {
        this.$message.error(err.message)
      }).finally(() => {
        this.loginLoading = false
      })      
    }
  }
}
</script>

