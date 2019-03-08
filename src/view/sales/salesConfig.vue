<template>
  <p>销售配置 {{userInfo}}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted () {
    console.log('a')
  }
}
</script>

<style scoped>
</style>
