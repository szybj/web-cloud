<template>
  <el-tabs v-model="activeName">
    <el-tab-pane v-for="(tab, index) in tabsOption.config" :key="index" :label="tab.label" :name="tab.name">
      <el-tabs  v-if='tab.children' v-model="activeName">
        <el-tab-pane v-for="(tab, index) in tab.children" :key="index" :label="tab.label" :name="tab.name">
        </el-tab-pane>
      </el-tabs>
      <component v-else is='orangeTable'
                 :tableData="tableData"
                 :tableOption="tableOption"
                 :searchOption="searchOption"
                 :loading="tableLoading"
                 :loadingText="tableLoadingText"
                 :page="page"
                 :formDIC="DIC"
                 @current-change="handleCurrentChange"
                 @size-change="handleSizeChange"
                 @form-change="handleFormChange"
                 :row-class-name="tableRowClassName">没有子集了</component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

  export default {
    name: 'details',
    data() {
      return {
        activeName: 'first',
        tabsOption: {
          config: [{
            label: '用户管理',
            name: 'first',
            children: [{
              label: '用户管理1',
              name: 'first1',
            },
              {
                label: '配置管理1',
                name: 'second1'
              },
              {
                label: '定时任务1',
                name: 'fourth1'
              }]
          },
            {
              label: '配置管理',
              name: 'second'
            },
            {
              label: '定时任务',
              name: 'fourth'
            }]
        }
      }
    },
    components: {},
    methods: {}
  }
</script>

<style scoped>
</style>
