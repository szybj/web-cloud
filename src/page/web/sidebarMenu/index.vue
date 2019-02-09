<template>
  <div class="sidebarWrap">
    <logo :isCollapse="isCollapse"></logo>
    <el-scrollbar>
      <transition name="fade">
        <el-menu unique-opened
                 :default-active="nowTagValue"
                 mode="vertical"
                 :show-timeout="200"
                 background-color="#20222a"
                 text-color="rgba(255,255,255,0.7)"
                 :collapse="isCollapse">
          <menu-item :menu="sysMenu.sub"
                     first
                     :menuProps="website.menu.props"
                     :collapse="isCollapse">
          </menu-item>
        </el-menu>
      </transition>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from './logo'
import menuItem from './menuItem'

export default {
  name: 'sidebarMenu',
  components: { menuItem, logo },
  data () {
    return {}
  },
  created () {
  },
  computed: {
    ...mapGetters(['sysMenu', 'tag', 'isCollapse', 'website']),
    nowTagValue() {
      return this.$router.$orangeRouter.getValue(this.$route)
    }
  },
  mounted () { },
  methods: {}
}
</script>
<style lang="scss" scoped>

</style>

