<template>
  <el-tabs v-model='configSource.activeName'
           :tab-position='configSource.tabPosition'
           :type='configSource.type'
           @tab-click='handleTabsClick'>
    <el-tab-pane v-for='(tab, index) in config'
                 :key='index'
                 :label='tab.label'
                 :name='tab.name'
                 :type='tab.type'
                 :detailQuery='tab.detailQuery'>
      <slot :name='tab.name'></slot>
      <orange-tabs v-if='tab.children' :tabsConfig='tab.children'></orange-tabs>
      <el-collapse accordion v-else-if='tab.collapse'>
        <el-collapse-item v-for='(item, index) in setData(configData, tab.data)' :key='index'>
          <template slot='title'>
            <i :class='item.icon' class='mr5' v-if='item.icon'></i>
            <i v-else class='titltIcon mr5'></i>
            {{item.title}}
          </template>
          <component :is='getComponent(tab.type)'
                     :tableConfig='item.tableConfig'
                     :tableData='item.tableData'>
          </component>
        </el-collapse-item>
      </el-collapse>
      <component v-else
                 :is='getComponent(tab.type)'
                 v-for='(item, index) in setData(configData, tab.data)'
                 :key='index'
                 :tableConfig='item.tableConfig'
                 :tableData='item.tableData'>
      </component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import utilMixin from 'mixin/util.js'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'orangeTabs',
    mixins: [utilMixin()],
    props: {
      tabsConfig: {
        type: Object,
        required: true,
        default: () => null
      },
      type: {
        type: String,
        reruired: true
      }
    },
    computed: {
      ...mapGetters(['detailQuery']),
      config () {
        return this.configSource.config || []
      }
    },
    created () {
      const firstTab = this.firstLoadTab(this.tabsConfig)
      this.loadViewConfig(firstTab[0].detailQuery)
    },
    data () {
      return {
        configSource: this.tabsConfig,
        tableConfig: {},
        tableData: {},
        configData: null,
        isPage: true,
        page: {
          total: 0,
          page: 1,
          pageRows: 10
        }
      }
    },
    methods: {
      ...mapActions(['getViewConfig', 'getViewData']),
      // 获取首次需加载的tab配置信息
      firstLoadTab (tabsConfig) {
        console.log('tabsConfigtabsConfig', tabsConfig)
        const viewConfig = tabsConfig.config
        let tabObj = viewConfig.filter((item, index) => {
          return (item.name === tabsConfig.activeName) && item.firstLoad
        })
        return tabObj
      },
      // 加载tab 视图和数据
      loadViewConfig(tabParams) {
        let params = {}
        let tabParamsSource = JSON.parse(JSON.stringify(tabParams))
        tabParamsSource.params.forEach((item, index) => {
            params[item] = this.detailQuery.params[item]
        })
        let setTabParams = Object.assign(tabParamsSource, {params})
        this.getViewConfig(setTabParams.viewId).then(data => {
          if (!this.validateNull(data.searchView) || !this.validateNull(data.tableView)) {
            this.tableConfig = data.tableView
            this.isPage = data.isPage
            this.findReport(setTabParams.params, setTabParams.viewId)
          } else {
            return this.$message.error({
              message: '获取配置信息出错'
            })
          }
        })
      },
      findReport (form, viewId) {
        this.tableLoading = true
        const url = this.isPage ? `/report/data/${viewId}?page=${this.page.page || 1}&pageRows=${this.page.pageRows || 10}` :
          `/report/data/${viewId}`
        this.getViewData({ formParams: form, url }).then(res => {
          const data = res.data.data
          this.tableConfig.forEach((v, index) => {
            if (data[v.group]) {
              v.tableData = data[v.group]
            }
          })
          this.configData = this.tableConfig
          console.log('this.tableConfig', this.tableConfig)
          this.tableLoading = false
        })
      },
      handleTabsClick (tab, event) {
        this.configData = null
        if (tab.$attrs.detailQuery) {
          console.log('tab.$attrs.detailQuery', tab.$attrs.detailQuery)
          this.loadViewConfig(tab.$attrs.detailQuery)
          // if (tab.$attrs.type === 'table') {
          //   this.tableConfig = {
          //     'selection': true,
          //       'index': true,
          //       'indexLabel': '序号',
          //       'border': true,
          //       'expand': true,
          //       'align': 'left',
          //       'headerAlign': 'left',
          //       'size': 'mini',
          //       'stripe': false,
          //       'showHeader': true,
          //       'defaultSort': {
          //       'prop': 'salesmanName',
          //         'order': 'ascending'
          //     },
          //     'column': [
          //       {
          //         'label': '改变了',
          //         'prop': 'salesmanName',
          //         'width': 120,
          //         'slot': true,
          //         'sortable': true,
          //       },
          //       {
          //         'label': '手机号',
          //         'prop': 'phoneNumber'
          //       },
          //       {
          //         'label': '身份证号',
          //         'prop': 'cardId'
          //       },
          //       {
          //         'label': '所在区域',
          //         'prop': 'districtCode',
          //         'type': 'district'
          //       },
          //       {
          //         'label': '金额',
          //         'prop': 'districtCode',
          //         'type': 'currency',
          //       },
          //       {
          //         'label': '职位类型',
          //         'prop': 'role',
          //         'dicData': 'roleDict'
          //       },
          //       {
          //         'label': '申请时间',
          //         'prop': 'createdAt',
          //         'type': 'time',
          //         'formatter': '%F %T'
          //       },
          //       {
          //         'label': '销售状态',
          //         'prop': 'status',
          //         'dicData': 'salesmanStateDict'
          //       }]
          //   }
          //   this.tableData = []
          // }
          // if (tab.$attrs.type === 'detailsTable' && tab.name === 'second') {
          //   this.configData =  [
          //     {
          //       'title': 'XXXX01',
          //       'id': 1,
          //       'icon': '',
          //       'tableData': {},
          //       'tableConfig': {
          //         'selection': true,
          //         'index': true,
          //         'indexLabel': '序号',
          //         'border': true,
          //         'expand': true,
          //         'align': 'left',
          //         'headerAlign': 'left',
          //         'size': 'mini',
          //         'stripe': false,
          //         'showHeader': true,
          //         'defaultSort': {
          //           'prop': 'salesmanName',
          //           'order': 'ascending'
          //         },
          //         'column': [
          //           {
          //             'label': '配置组01',
          //             'prop': 'salesmanName',
          //             'width': 120,
          //             'slot': true,
          //             'sortable': true,
          //           },
          //           {
          //             'label': '手机号',
          //             'prop': 'phoneNumber'
          //           },
          //           {
          //             'label': '身份证号',
          //             'prop': 'cardId'
          //           },
          //           {
          //             'label': '所在区域',
          //             'prop': 'districtCode',
          //             'type': 'district'
          //           },
          //           {
          //             'label': '金额',
          //             'prop': 'districtCode',
          //             'type': 'currency',
          //           },
          //           {
          //             'label': '职位类型',
          //             'prop': 'role',
          //             'dicData': 'roleDict'
          //           },
          //           {
          //             'label': '申请时间',
          //             'prop': 'createdAt',
          //             'type': 'time',
          //             'formatter': '%F %T'
          //           },
          //           {
          //             'label': '销售状态',
          //             'prop': 'status',
          //             'dicData': 'salesmanStateDict'
          //           }]
          //       }
          //     },
          //     {
          //       title: 'XXXX02',
          //       icon: '',
          //       tableData: {},
          //       tableConfig: {
          //         selection: true,
          //         index: true,
          //         indexLabel: '序号',
          //         border: true,
          //         expand: true,
          //         align: 'left',
          //         headerAlign: 'left',
          //         size: 'mini',
          //         stripe: false,
          //         showHeader: true,
          //         defaultSort: {
          //           prop: 'salesmanName',
          //           order: 'ascending'
          //         },
          //         column: [
          //           {
          //             label: '配置组02',
          //             prop: 'salesmanName',
          //             width: 120,
          //             slot: true,
          //             sortable: true,
          //           },
          //           {
          //             label: '手机号',
          //             prop: 'phoneNumber'
          //           },
          //           {
          //             label: '身份证号',
          //             prop: 'cardId'
          //           },
          //           {
          //             label: '所在区域',
          //             prop: 'districtCode',
          //             type: 'district'
          //           },
          //           {
          //             label: '金额',
          //             prop: 'districtCode',
          //             type: 'currency',
          //           },
          //           {
          //             label: '职位类型',
          //             prop: 'role',
          //             dicData: 'roleDict'
          //           },
          //           {
          //             label: '申请时间',
          //             prop: 'createdAt',
          //             type: 'time',
          //             formatter: '%F %T'
          //           },
          //           {
          //             label: '销售状态',
          //             prop: 'status',
          //             dicData: 'salesmanStateDict'
          //           }]
          //       }
          //     }
          //   ]
          // }
          console.log('tab', tab)
          console.log('event', event)
        }
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
