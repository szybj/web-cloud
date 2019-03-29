<template>
  <content-block>
    <orange-tabs :tabsConfig='tabsConfig'>
     </orange-tabs>
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
      console.log('this.detailQuery', this.detailQuery)
      this.getViewConfig(this.detailQuery.viewId).then(data => {
        if (!this.validateNull(data.tabsConfig)) {
          this.tabsConfig = data.tabsConfig
        } else {
          return this.$message.error({
            message: '获取配置信息出错'
          })
        }
      })
    },
    data() {
      return {
        tabsConfig: {
          'type': 'card',
          'activeName': 'second',
          'config': [
            {
              'label': '用户管理',
              'name': 'first',
              'type': 'table',
              'children': {
                'tabPosition': 'left',
                'activeName': 'first1',
                'detailQuery': {
                  'viewId': 5,
                  'url': '',
                  'params': ['cardId', 'salesmanId', 'step', 'status']
                },
                'config': [
                  {
                    'label': '用户管理子项',
                    'name': 'first1',
                    'firstLoad': true,
                    'type': 'table',
                    'detailQuery': {
                      'viewId': 5,
                      'url': '',
                      'params': ['cardId', 'salesmanId', 'step', 'status']
                    },
                    'data': [
                      {
                        'title': 'WWWWWWWWW',
                        'icon': '',
                        'tableData': [],
                        'tableConfig':  {
                          'selection': true,
                          'index': true,
                          'indexLabel': '序号',
                          'border': true,
                          'expand': true,
                          'align': 'left',
                          'headerAlign': 'left',
                          'size': 'mini',
                          'stripe': false,
                          'showHeader': true,
                          'defaultSort': {
                            'prop': 'salesmanName',
                            'order': 'ascending'
                          },
                          'column': [
                            {
                              'label': '用户子项姓名',
                              'prop': 'salesmanName',
                              'width': 120,
                              'slot': true,
                              'sortable': true,
                            },
                            {
                              'label': '手机号',
                              'prop': 'phoneNumber'
                            },
                            {
                              'label': '身份证号',
                              'prop': 'cardId'
                            },
                            {
                              'label': '所在区域',
                              'prop': 'districtCode',
                              'type': 'district'
                            },
                            {
                              'label': '金额',
                              'prop': 'districtCode',
                              'type': 'currency',
                            },
                            {
                              'label': '职位类型',
                              'prop': 'role',
                              'dicData': 'roleDict'
                            },
                            {
                              'label': '申请时间',
                              'prop': 'createdAt',
                              'type': 'time',
                              'formatter': '%F %T'
                            },
                            {
                              'label': '销售状态',
                              'prop': 'status',
                              'dicData': 'salesmanStateDict'
                            }]
                        },
                      }
                    ]
                  }
                ]
              }
            },
            {
              'label': '配置管理',
              'name': 'second',
              'type': 'detailsTable',
              'collapse': true,
              'detailQuery': {
                'viewId': 5,
                'url': '',
                'params': ['cardId', 'salesmanId', 'step', 'status']
              }
            },
            {
              'label': '定时任务',
              'name': 'fourth',
              'collapse': true,
              'type': 'detailsTable',
              'detailQuery': {
                'viewId': 5,
                'url': '',
                'params': ['cardId', 'salesmanId', 'step', 'status']
              },
              'data': [
                {
                  'title': 'AAAAA01',
                  'icon': 'el-icon-menu',
                  'tableData': {
                    'salesmanName': '测试的张三',
                    'phoneNumber': '13901234567',
                    'cardId': '110222XXXXXXXXXXXX',
                    'districtCode': '60140200',
                    'money': '50000',
                    'role': '0',
                    'createdAt': 1546931271000,
                    'status': '2'
                  },
                  'tableConfig': {
                    'columnNum': 3,
                    'column': [
                      {
                        'label': '任务名01',
                        'prop': 'salesmanName',
                        'width': 120,
                        'slot': true,
                        'sortable': true,
                      },
                      {
                        'label': '手机号',
                        'prop': 'phoneNumber'
                      },
                      {
                        'label': '身份证号',
                        'prop': 'cardId'
                      },
                      {
                        'label': '所在区域',
                        'prop': 'districtCode',
                        'type': 'district'
                      },
                      {
                        'label': '金额',
                        'prop': 'money',
                        'type': 'currency',
                      },
                      {
                        'label': '职位类型',
                        'prop': 'role',
                        'dicData': 'roleDict'
                      },
                      {
                        'label': '申请时间',
                        'prop': 'createdAt',
                        'type': 'time',
                        'formatter': '%F %T'
                      },
                      {
                        'label': '销售状态',
                        'prop': 'status',
                        'dicData': 'salesmanStateDict'
                      }]
                  },
                },
                {
                  'title': 'AAAAA02',
                  'icon': 'el-icon-info',
                  'tableData': {
                    'salesmanName': '测试的李四',
                    'phoneNumber': '13520763819',
                    'cardId': '110222XXXXXXXX9980',
                    'districtCode': '20440500',
                    'money': '50000.36',
                    'role': '15',
                    'createdAt': '1544605453000',
                    'status': '-2'
                  },
                  'tableConfig': {
                    'selection': true,
                    'index': true,
                    'indexLabel': '序号',
                    'border': true,
                    'expand': true,
                    'align': 'left',
                    'headerAlign': 'left',
                    'size': 'mini',
                    'stripe': false,
                    'showHeader': true,
                    'defaultSort': {
                      'prop': 'salesmanName',
                      'order': 'ascending'
                    },
                    'column': [
                      {
                        'label': '任务名02',
                        'prop': 'salesmanName',
                        'width': 120,
                        'slot': true,
                        'sortable': true,
                      },
                      {
                        'label': '手机号',
                        'prop': 'phoneNumber'
                      },
                      {
                        'label': '身份证号',
                        'prop': 'cardId'
                      },
                      {
                        'label': '所在区域',
                        'prop': 'districtCode',
                        'type': 'district'
                      },
                      {
                        'label': '金额',
                        'prop': 'money',
                        'type': 'currency',
                      },
                      {
                        'label': '职位类型',
                        'prop': 'role',
                        'dicData': 'roleDict'
                      },
                      {
                        'label': '申请时间',
                        'prop': 'createdAt',
                        'type': 'time',
                        'formatter': '%F %T'
                      },
                      {
                        'label': '销售状态',
                        'prop': 'status',
                        'dicData': 'salesmanStateDict'
                      }]
                  },
                }
              ]
            },
            {
              'label': '插槽测试1',
              'name': 'fourth1'
            },
            {
              'label': '插槽测试2',
              'name': 'fourth2'
            }
          ]
        }
      }
    },
    methods: {
      ...mapActions(['getViewConfig'])
    }
  }
</script>

<style scoped>
</style>
