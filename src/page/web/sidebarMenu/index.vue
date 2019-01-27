<template>
  <div class="sidebarWrap"
       :class="{'is-active':isCollapse}">
    <logo :isCollapse="isCollapse"></logo>
    <el-menu unique-opened
             style="overflow:hidden"
             :default-active="nowTagValue"
             mode="vertical"
             :show-timeout="200"
             background-color="rgb(0, 20, 42)"
             text-color="rgba(255,255,255,0.7)"
             :collapse="isCollapse">
      <menu-item :menu="sysMenu.sub"
                 first
                 :menuProps="website.menu.props"
                 :collapse="isCollapse">
      </menu-item>
    </el-menu>
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

