<template>
  <div class="index">

  </div>
</template>
<script>
import axios from '../http.js'
import { mapMutations } from 'vuex';
export default {
  name: 'Index',
  mounted() {
    this.$router.push({ name: 'Home' })
  },
  computed: {
  },
}
</script>
