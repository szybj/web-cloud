<template>
  <div class="containerWrap" :class="{'is-active':isCollapse}">
    <!-- 顶部导航栏 -->
    <div class="headerNavBar">
      <top />
    </div>

    <div class="layout">
      <div class="leftNavBar">
        <!-- 左侧导航栏 -->
        <sidebar-menu />
      </div>
      <div class="main">
        <el-scrollbar style="height:100%">
        <keep-alive>
          <router-view class="view"
          v-if="$route.meta.$keepAlive" />
        </keep-alive>
          <router-view class="view"
          v-if="!$route.meta.$keepAlive" />
        </el-scrollbar>
      </div>
    </div>
    <!---->
    <!--<div class="contentWrap">-->
      <!--<div class="main">-->
        <!--<el-scrollbar style="height:100%">-->
          <!--<keep-alive>-->
            <!--<router-view class="view"-->
                         <!--v-if="$route.meta.$keepAlive" />-->
          <!--</keep-alive>-->
          <!--<router-view class="view"-->
                       <!--v-if="!$route.meta.$keepAlive" />-->
        <!--</el-scrollbar>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import top from './top/'
  import sidebarMenu from './sidebarMenu/'
  import navBar from './navBar'

  export default {
    computed: {
      ...mapGetters(['isCollapse']),
    },
    components: {
      top,
      navBar,
      sidebarMenu
    },
    name: "web"
  }
</script>

<style lang="scss" scoped>
</style>
