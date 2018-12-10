<template>
  <div class="containerWrap">
    <div class="sidebarWrap">
      <sidebar-menu />
    </div>
    <div class="contentWrap">
        <top />
        <nav-bar />
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
  </div>
</template>

<script>
  import top from './top/'
  import sidebarMenu from './sidebarMenu/'
  import navBar from './navBar'

  export default {
    components: {
      top,
      navBar,
      sidebarMenu
    },
    name: "web"
  }
</script>

<style scoped>
</style>
