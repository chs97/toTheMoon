<template>
  <div class="register">
    <el-card class="register-form">
      <h3 class="title">REGISTER</h3>
      <el-form :model="register" ref="registerForm" :rules="rules">
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item prop="username">
              <el-input placeholder="Username" v-model="register.username" size="medium" prefix-icon="el-icon-fa-user-o"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="realname">
              <el-input placeholder="Realname" v-model="register.realname" size="medium" prefix-icon="el-icon-fa-address-card-o"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item prop="password">
          <el-input placeholder="Password" v-model="register.password" size="medium" type="password" prefix-icon="el-icon-fa-lock"></el-input>
        </el-form-item>
        <el-form-item prop="passconf">
          <el-input placeholder="Repeat" v-model="register.passconf" size="medium" type="password" prefix-icon="el-icon-fa-repeat"></el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-radio-group v-model="register.sex">
            <el-radio :label="1">Male</el-radio>
            <el-radio :label="0">FeMale</el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item prop="sex">
              <el-select size="medium" placeholder="Sex" v-model="register.sex" style="width: 100%;">
                <i slot="prefix" class="el-icon-fa-mars el-input__icon"></i>
                <el-option value="1" label="Male"></el-option>
                <el-option value="0" label="Female"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="born">
              <el-date-picker size="medium" v-model="register.born" type="date" placeholder="Born" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item prop="college">
              <el-input size="medium" v-model="register.college" placeholder="College" prefix-icon="el-icon-fa-university"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="major">
              <el-input size="medium" v-model="register.major" placeholder="Major" prefix-icon="el-icon-fa-graduation-cap"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item prop="student_id">
              <el-input size="medium" v-model="register.student_id" placeholder="Student No" prefix-icon="el-icon-fa-credit-card"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="grade">
              <el-input size="medium" v-model="register.grade" placeholder="Grade" prefix-icon="el-icon-fa-google"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button :loading="registerLoading" type="primary" round class="full-width" @click="handleResgiter">SIGN UP</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="goToLogin" round class="full-width">SIGN IN</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import '../style/register.less'
import axios from '../http.js'
export default {
  name: 'Register',
  data() {
    const validatePass = (rule, value, cb) => {
      if (value === '') cb(new Error('请输入密码.'))
      else {
        if (this.register.passconf !== '') {
          this.$refs.registerForm.validateField('passconf')
        }
        cb()
      }
    }
    const validatePassConf = (rule, value, cb) => {
      if (value === '') cb(new Error('请再次输入密码.'))
      else if (value !== this.register.password) cb(new Error('两次输入的密码不一致.'))
      else cb()
    }
    return {
      rules: {
        username: [{
          required: true, message: '请输入用户名.', trigger: 'blur'
        }],
        realname: [{
          required: true, message: '请输入真实姓名.', trigger: 'blur'
        }],
        password: [{
          validator: validatePass, trigger: 'blur'
        }],
        passconf: [{
          validator: validatePassConf, trigger: 'blur'
        }],
        sex: [{
          required: true, message: '请选择性别.', trigger: 'change'
        }],
        born: [{
          required: true, message: '请选择出生日期.', trigger: 'change'
        }],
        college: [{
          required: true, message: '请填写所在学院.', trigger: 'blur'
        }],
        major: [{
          required: true, message: '请填写所在专业.', trigger: 'blur'
        }],
        student_id: [{
          required: true, message: '请填写学号.', trigger: 'blur'
        }],
        grade: [{
          required: true, message: '请填写年级.', trigger: 'blur'
        }],
      },
      register: {
        username: '',
        password: '',
        passconf: '',
        sex: '',
        born: '',
        grade: '',
        college: '',
        major: '',
        student_id: ''
      },
      registerLoading: false
    }
  },
  methods: {
    handleResgiter() {
      let isPass = false
      this.$refs.registerForm.validate(v => isPass = v)
      if (!isPass) return
      const data = {...this.register}
      this.registerLoading = true
      axios.post('/User/register', data).then(({data}) => {
        if (data.type === 1) {
          this.$message.success('注册成功，请等待审核.')
          this.$router.push({ name: 'Login' })
        } else {
          throw new Error(data.message)
        }
      }).catch(err => {
        this.$message.error(err.message)
      }).finally(() => {
        this.registerLoading = false
      })
    },
    goToLogin() {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>
