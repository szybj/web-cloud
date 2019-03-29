<template>
  <content-block v-if='tabsConfig'>
    <orange-tabs :tabsConfig='tabsConfig'></orange-tabs>
  </content-block>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import utilMixin from 'mixin/util.js'

  export default {
    name: 'detailsPage',
    mixins: [utilMixin()],
    computed: {
      ...mapGetters(['detailQuery']),
      detailQueryParams () {
        return this.detailQuery.params || []
      }
    },
    components: {},
    created () {
      this.getTabsConfig()
    },
    data() {
      return {
        tabsConfig: null
      }
    },
    methods: {
      ...mapActions(['getViewConfig']),
      getTabsConfig() {
        this.getViewConfig(this.detailQuery.viewId).then(data => {
          if (!this.validateNull(data.tableView)) {
            this.tabsConfig = data.tableView
          } else {
            return this.$message.error({
              message: '获取配置信息出错'
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
