<template>
  <div id="app" v-loading.fullscreen.lock="loading" element-loading-background="rgba(255, 255, 255, 1)" element-loading-text="拼命加载中">
    <el-container class="app" v-show="!loading">
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
import { USER_UPDATE } from './store/mutation-types.js'
import axios from './http.js'
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  components: {
    Menu
  },
  created() {
    const token = window.localStorage.getItem('token')
    if (!token) {
      this.$router.push({ name: 'Login' })
      this.loading = false
    } else {
      axios
        .get('/User/profile')
        .then(({ data }) => {
          if (data.type === 1) {
            this.handleUserUpdate(data.data)
          } else {
            throw new Error('Fail')
          }
        })
        .catch(err => this.$router.push({ name: 'Login' }))
        .finally(() => (this.loading = false))
    }
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    onlyMain() {
      return this.$route.meta.onlyMain === true
    }
  },
  methods: {
    ...mapMutations({
      handleUserUpdate: USER_UPDATE
    })
  }
}
</script>