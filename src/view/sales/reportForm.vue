<template>
  <content-block>
    <orange-table
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
      :row-class-name="tableRowClassName">
      <template slot-scope="scope" slot="search">
        <!--<el-form :inline="true" :model="searchForm" size="small" class="demo-form-inline">-->
        <!--<el-form-item label="审批人">-->
        <!--<el-input v-model="searchForm.user" placeholder="审批人"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="活动区域">-->
        <!--<el-select v-model="searchForm.region" placeholder="活动区域">-->
        <!--<el-option label="区域一" value="shanghai"></el-option>-->
        <!--<el-option label="区域二" value="beijing"></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<el-button type="primary" @click="onSubmit">查询</el-button>-->
        <!--</el-form-item>-->
        <!--</el-form>-->
      </template>
      <template slot-scope="scope"
                slot="username">
        <el-tag>{{scope.row.username}}</el-tag>
      </template>
      <template slot-scope="scope"
                slot="expand">
        <el-tag>{{scope.username}}</el-tag>
      </template>
      <template slot-scope="scope"
                slot="menu">
        <el-button @click.native="testClick(scope.row)" type="text" size="small">权限</el-button>
        <el-button size="small">权限</el-button>
        <el-button size="small">权限</el-button>
      </template>
    </orange-table>
  </content-block>
</template>

<script>
import { mapGetters } from 'vuex'
import * as util from 'utils/util.js'
import { view, salesList} from '@/api/reportForm'
import DIC from 'assets/dic'

export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  data () {
    return {
      DIC,
      tableLoading: false,
      tableLoadingText: 'wwwwwwwww',
      searchOption: {},
      tableOption: {},
      tableData: [],
      searchForm: {},
      isPage: false,
      page: {
        total: 0,
        page: 1,
        pageRows: 10
      }
    }
  },
  created () {
    this.getOption().then(data => {
      if (!util.validateNull(data.searchOption) || !util.validateNull(data.tableOption)) {
        this.searchOption = data.searchOption
        this.tableOption = data.tableOption
        this.isPage = data.isPage
        this.findReport(this.searchForm)
      } else {
        return this.$message.error({
          message: '获取配置信息出错'
        })
      }
    })
  },
  mounted () {},
  methods: {
    tableRowClassName ({ rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    testClick (rowData) {
      console.log('rowData', rowData)
    },
    handleFormChange (form) {
      console.log('搜索', form)
      this.page.page = 1
      this.findReport(form)
    },
    handleCurrentChange (val, formUpdate) {
      this.page.page = val
      this.findReport(formUpdate)
    },
    handleSizeChange (val, formUpdate) {
      this.page.pageRows = val
      this.findReport(formUpdate)
    },
    getOption () {
      return new Promise((resolve, reject) => {
        view(this.$route.params.viewId).then(res => {
          const resData = res.data.data
          resolve(resData)
        })
      })
    },
    findReport (form) {
      this.tableLoading = true
      salesList(this.$route.params.viewId, Object.assign({}, form, this.page)).then(res => {
        const data = res.data.data
        this.tableData = data.list
        this.page.total = data.total
        this.tableLoading = false
      })
    }
  }
}
</script>

<style lang="scss">
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style> o
