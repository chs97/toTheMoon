<template>
  <div class="home" v-loading="dataLoading">
    <el-row :gutter="20" type="flex">
      <el-col :span="7">
        <el-row class="data-board" type="flex" justify="space-between">
          <div class="today">
            <el-card>
              <div class="contain">
                <span class="number">
                  {{today}}
                </span>
                <el-button type="primary" size="small" @click="handleSign">签到</el-button>
              </div>
            </el-card>
          </div>
          <div class="today-detail">
            <el-card>
              <div class="contain">Morning：{{todayDetail.morning}}</div>
            </el-card>
            <el-card>
              <div class="contain">Afternoon：{{todayDetail.afternoon}}</div>
            </el-card>
            <el-card>
              <div class="contain">Evening：{{todayDetail.evening}}</div>
            </el-card>
          </div>
          <div class="pass-day">
            <el-card>
              <div class="contain">
                <span class="number">
                  {{threeDay}}
                </span>
                <span>3 Days</span>
              </div>
            </el-card>
            <el-card>
              <div class="contain">
                <span class="number">
                  {{sevenDay}}
                </span>
                <span>7 Days</span>
              </div>
            </el-card>
          </div>
        </el-row>
        <el-row>
          <el-card header="近期比赛" class="recent-contests">
            <el-collapse>
              <el-collapse-item v-for="(item, index) of todaycontest" :key="item.id" :title="item.name" :name="index">
                <div>OJ：{{item.oj}} 链接：<a :href="item.link" target="__blank">Contest</a></div>
                <div>开始时间：{{item.start_time}}</div>
               </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-card header="签到记录" class="sign-history">

        </el-card>
      </el-col>
      <el-col :span="12">
        asdasd
      </el-col>
    </el-row>
  </div>
</template>
<script>
import '../style/home.less'
import axios from '../http.js'
export default {
  name: 'Home',
  data() {
    return {
      dataLoading: false,
      today: 0,
      todayDetail: {
        morning: 0,
        afternoon: 0,
        evening: 0
      },
      threeDay: 0,
      sevenDay: 0,
      todaycontest: []
    }
  },
  mounted() {
    this.fetchDataBoard()
  },
  methods: {
    fetchDataBoard() {
      this.dataLoading = true
      axios
        .get('/Sign/dashboard')
        .then(({ data }) => {
          data = data.data
          this.today = data.today
          this.todayDetail = {
            morning: data.morning,
            afternoon: data.afternoon,
            evening: data.evening
          }
          this.todaycontest = data.todaycontest
          this.threeDay = data['3day']
          this.sevenDay = data['7day']
        })
        .catch(err => {
          this.$message.error(err.message)
        })
        .finally(() => (this.dataLoading = false))
    },
    handleSign() {
      axios.get('/Sign/register').then(({data}) => {
        if (data.type === 1) {
          this.$message.success(data.message)
        } else {
          throw new Error(data.message)
        }
      }).catch(err => this.$message.error(err.message))
    }
  }
}
</script>
