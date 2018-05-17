<template>
  <div class="user-manager">
    <el-table :data="applies">
      <el-table-column label="用户名" prop="username">
      </el-table-column>
      <el-table-column label="姓名" prop="realname" width="100">
      </el-table-column>
      <el-table-column label="学号" prop="student_id">
      </el-table-column>
      <el-table-column label="学院" prop="college">
      </el-table-column>
      <el-table-column label="专业" prop="major">
      </el-table-column>
      <el-table-column label="年级" prop="grade" width="80">
      </el-table-column>
      <el-table-column label="性别" width="80">
        <template slot-scope="scope">
          {{scope.row.sex ? '男' : '女'}}
        </template>
      </el-table-column>
      <el-table-column label="生日" prop="born">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handlePass(scope.row.username)">通过</el-button>
          <el-button type="danger" size="mini" @click="handleReject(scope.row.username)">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from '../http.js'
export default {
  name: 'UserManager',
  data() {
    return {
      applies: []
      // loading: false
    }
  },
  mounted() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      axios.get('/User/application_list').then(({ data }) => {
        this.applies = data.data
      }).catch(err => this.$message.error(err.message))
    },
    handlePass(username) {
      this.sendResult(username, 1)
    },
    handleReject(username) {
      const data = {
        username,
        result: 1
      }
      this.$confirm('确定拒绝该申请？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.sendResult(username, 0)
      })
    },
    deleteLine(username) {
      this.applies = this.applies.filter(i => i.username !== username)
    },
    sendResult(username, result) {
      const data = {
        username,
        result
      }
      axios.get('/User/handle_application', {params: data}).then(({data}) => {
        if (data.type === 1) {
          this.$message.success('操作成功.')
          this.deleteLine(username)
        }
      }).catch(err => this.$message.error(err.message))
    }
  }
}
</script>
