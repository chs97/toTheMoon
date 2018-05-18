<template>
  <div class="home">
    <el-row :gutter="20" type="flex">
      <el-col :span="7">
        <el-row class="data-board" type="flex" justify="space-between">
          <div class="today">
            <el-card>
              <div class="contain">
                <span class="number">
                  8
                </span>
                <el-button type="primary" size="small">签到</el-button>
              </div>
            </el-card>
          </div>
          <div class="today-detail">
              <el-card><div class="contain">Morning：12</div></el-card>
              <el-card><div class="contain">Afternoon：12</div></el-card>
              <el-card><div class="contain">Evening：12</div></el-card>
            </div>
          <div class="pass-day">
              <el-card>
                <div class="contain">
                  <span class="number">
                    1
                  </span>
                  <span>3 Days</span>
                </div>
              </el-card>
              <el-card>
                <div class="contain">
                  <span class="number">
                    2
                  </span>
                  <span>7 Days</span>
                </div>
              </el-card>
            </div>
        </el-row>
      </el-col>
      <el-col :span="4">
        asdasd
      </el-col>
      <el-col :span="12">
        asdasd
      </el-col>
    </el-row>
  </div>
</template>
<script>
import '../style/home.less'
export default {
  
}
</script>
