<template>
  <div class="top">
    <div class="topBtn">
      <i class="icon iconfont icon-shousuo"
         :class="[{ 'icon-zhankai': isCollapse }]"
         @click="showCollapse"></i>
    </div>
    <div class="topNav"></div>
    <div class="topBtn">
      <img class="top-userImg"
           :src="userInfo.userIcon">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{userInfo.userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout"
                            divided>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { fullscreenToggel, listenfullscreen } from 'utils/util'
export default {
  components: { },
  name: 'top',
  data () {
    return {};
  },
  filters: {},
  created () { },
  mounted () {
  },
  computed: {
    ...mapGetters(['isCollapse', 'userInfo'])
  },
  methods: {
    showCollapse () {
      this.$store.commit('SET_COLLAPSE')
    },
    logout () {
      this.$confirm('是否退出系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('logOut').then(() => {
          this.$router.push({ path: '/login' })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
