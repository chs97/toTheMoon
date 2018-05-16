<template>
  <div class="menu">
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="role">
      <span>{{roler.label}}</span>
    </div>
    <ul class="routes">
      <p class="routes-title">MAIN</p>  
      <li v-for="route of mainRoutes" :key="route.name" class="route-link" :class="{active: route.name == $route.name}" @click="handleRouterGo(route.name)">
        <i :class="'el-icon-' + route.meta.icon"></i>
        <span>{{route.meta.text}}</span>
      </li>
    </ul>
    <ul class="routes" v-show="level > 5">
      <p class="routes-title">ADMIN</p>  
      <li v-for="route of adminRoutes" :key="route.name" class="route-link" :class="{active: route.name == $route.name}" @click="handleRouterGo(route.name)">
        <i :class="'el-icon-' + route.meta.icon"></i>
        <span>{{route.meta.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import './index.less'
import { mapGetters } from 'vuex'
import { allRoutes } from '../../router'
export default {
  name: 'Menu',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      level: 'getLevel'
    }),
    roler() {
      const informal = { value: 1, label: '非正式成员'}
      const formal = { value: 5, label: '正式成员'}
      const admin = { value: 9, label: '管理员'}
      const leader = { value: 10, label: 'Leader'}
      if (this.level === 1) return informal
      if (this.level === 5) return formal
      if (this.level === 9) return admin
      if (this.level === 10) return leader
    },
    mainRoutes() {
      return allRoutes.filter(item => item.meta.level && item.meta.level <= 5)
    },
    adminRoutes() {
      const self = this
      return allRoutes.filter(item => item.meta.level > 5 && item.meta.level <= self.level)
    }
  },
  methods: {
    handleRouterGo(name) {
      this.$router.push({name})
    } 
  }
}
</script>
