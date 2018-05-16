<template>
  <div id="app">
    <el-container class="app">
      <el-aside width="270px" v-show="!onlyMain">
        <Menu />
      </el-aside>
      <el-container>
        <el-header height="80px" v-show="!onlyMain">Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer v-show="!onlyMain">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/Menu/index'
export default {
  name: 'app',
  components: {
    Menu
  },
  data() {
    return {

    }
  },
  computed: {
    onlyMain () {
      return this.$route.meta.onlyMain === true
    }
  },
  mounted() {
    console.log(this.$route)
  },
  watch: {
    '$route': (newVal, oldVal) => {
      // console.log(newVal)
    }
  }
}
</script>