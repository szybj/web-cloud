<template>
  <div class="containerWrap">
    <sidebar-menu class="leftBar"/>
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

<style lang="scss" scoped>
  .containerWrap{
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #f2f2f2;
    background-size: 100%;
    background-repeat: no-repeat;

    .contentWrap{
      flex: 1
    }
    .leftBar{
      width: 230px;
    }
  }
</style>
