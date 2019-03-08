<template>
  <p>主页 {{userInfo}}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style scoped>
</style>
