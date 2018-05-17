<template>
  <div class="index">

  </div>
</template>
<script>
export default {
  name: 'Index',
  mounted() {
    this.$router.push({name: 'Login'})
  }
}
</script>
