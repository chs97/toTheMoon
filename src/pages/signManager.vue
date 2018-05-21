<template>
  <div class="sign-manager">
    <el-table :data="sources">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="签到时间" prop="date"></el-table-column>
      <el-table-column label="签到时段" prop="label"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handlePass(scope.row.id)">通过</el-button>
          <el-button type="danger" size="mini" @click="handleReject(scope.row.id)">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from '../http.js'
export default {
  name: 'SignManager',
  data() {
    return {
      sources: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('/Sign/application_list').then(({data}) => {
        if (data.type === 1) {
          this.sources = data.data
        } else {
          throw new Error(data.message)
        }
      }).catch(err => this.$message.error(err.message))
    },
    handlePass(id) {
      this.sendResult(id, 1)
    },
    handleReject(id) {
      const data = {
        id,
        result: 1
      }
      this.$confirm('确定拒绝该申请？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.sendResult(id, 0)
      })
    },
    deleteLine(id) {
      this.sources = this.sources.filter(i => i.id !== id)
    },
    sendResult(id, result) {
      const data = {
        id,
        result
      }
      axios.get('/Sign/handle_application', {params: data}).then(({data}) => {
        if (data.type === 1) {
          this.$message.success('操作成功.')
          this.deleteLine(id)
        }
      }).catch(err => this.$message.error(err.message))
    }
  }
}
</script>
