<template>
  <el-tabs v-model='configSource.activeName'
           :tab-position='configSource.tabPosition'
           :type='configSource.type'
           @tab-click='handleTabsClick'>
    <el-tab-pane v-for='(tab, index) in config'
                 :key='index'
                 :label='tab.label'
                 :name='tab.name'
                 :url='tab.url'>
      <orange-tabs v-if='tab.children' :tabsConfig='tab.children'></orange-tabs>
      <el-collapse accordion v-else-if='tab.collapse'>
        <el-collapse-item v-for='(item, index) in tab.data' :key='index'>
          <template slot='title'>
            <i :class='item.icon' class='mr5' v-if='item.icon'></i>
            <i v-else class='titltIcon mr5'></i>
            {{item.title}}
          </template>
          <component :is='getComponent(tab.type)'
                     :tableConfig='item.tableConfig || {}'
                     :tableData='item.tableData || []'></component>
        </el-collapse-item>
      </el-collapse>
      <component v-else
                 :is='getComponent(tab.type)'
                 v-for='(item, index) in tab.data'
                 :key='index'
                 :tableConfig='item.tableConfig || {}'
                 :tableData='item.tableData || []'></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import utilMixin from 'mixin/util.js'

  export default {
    name: 'orangeTabs',
    mixins: [utilMixin()],
    props: {
      tabsConfig: {
        type: Object,
        required: true,
        default: () => {}
      }
    },
    computed: {
      config () {
        return this.configSource.config || []
      }
    },
    created () {
      let currentTab = this.activeTab(this.configSource)
      console.log('激活的labelName', currentTab)
    },
    data () {
      return {
        configSource: this.tabsConfig,
        tabData: {}
      }
    },
    methods: {
      // 获取默认选中的tab
      activeTab (tagsConfig) {
        let activeObj = null
        const tags = tagsConfig.config
        tags.forEach((item, index) => {
          if (item.children) {
            this.activeTab(item.children)
          }
          activeObj = (item.name === tagsConfig.activeName) && item.firstLoad ? item : null
        })
        return activeObj
      },
      handleTabsClick (tab, event) {
        // 判断是否有子级
        const isChildren = tab.$children[0].config
        if (isChildren) {
          console.log('有子级')
        }
        console.log('tab', tab)
        console.log('event', event)
      }
    }
  }
</script>

<style lang="scss">
.titltIcon{
  width: 4px;
  background: #999;
  height: 20px;
  margin-right: 5px
}
  .mr5{
    margin-right: 5px
  }
</style>
