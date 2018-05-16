<template>
  <div class="login">
    <el-card class="login-form">
      <h3 class="title">LOGIN</h3>
      <el-form>
        <el-form-item>
          <el-input size="medium" prefix-icon="el-icon-fa-user-o" placeholder="USERNAME"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input size="medium" prefix-icon="el-icon-fa-lock" type="password" placeholder="PASSWORD"></el-input>
        </el-form-item>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import '../style/login.less'
export default {
  name: 'Login'
}
</script>

