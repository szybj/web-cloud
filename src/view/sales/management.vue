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
                slot="expand">
        <el-tag>{{scope.row.salesmanName}}</el-tag>
      </template>
      <template slot-scope="scope"
                slot="salesmanName">
        <el-tag>{{scope.row.salesmanName}}</el-tag>
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
import * as util from 'utils/util'
import { mapGetters } from 'vuex'
import { salesList } from '@/api/salesman'
import DIC from 'assets/dic'
export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  data () {
    return {
      DIC,
      tableLotableRowClassNameading: false,
      tableLoadingText: 'wwwwwwwww',
      searchOption: {
        inline: true,
        size: 'mini',
        formName: 'searchForm',
        option:[{
          label: '销售姓名',
          prop: 'salesmanName'
        },{
          label: '手机号码',
          prop: 'phoneNumber'
        },
          {
            label: '身份证号',
            prop: 'cardId'
          },
          {
            label: '职位类型',
            prop: 'role',
            type: 'select',
            dataType: 'string',
            filterable: true,
            dicData: 'roleDict',
            selectDataFormatFn: 'getSelectData'
          },
          {
            label: '销售状态',
            prop: 'lifeCycle',
            type: 'select',
            filterable: true,
            dicData: 'salesmanStateDict',
            selectDataFormatFn: 'getSelectData'
          },
          {
            label: '账号状态',
            prop: 'status',
            search: true,
            type: 'select',
            filterable: true,
            dicData: 'accountStatusDict',
            selectDataFormatFn: 'orderSelectFormat'
          },
          {
            label: '区域',
            prop: 'districtCode',
            search: true,
            type: 'cascader',
            dataType: 'string',
            filterable: true,
            selectValue: 'district_code',
            selectLabel: 'district',
            selectChildren: 'subDistrict',
            dicData: 'area'
          }]
      },
      tableOption: {
        selection: true,
        index: true,
        indexLabel: '序号',
        border: true,
        expand: true,
        align: 'left',
        headerAlign: 'left',
        size: 'mini',
        stripe: false,
        showHeader: true,
        defaultSort: {
          prop: 'salesmanName',
          order: 'ascending'
        },
        column: [
          {
            label: '销售姓名',
            prop: 'salesmanName',
            width: 120,
            slot: true,
            sortable: true,
        },
        {
          label: '手机号',
          prop: 'phoneNumber'
        },
        {
          label: '身份证号',
          prop: 'cardId'
        },
        {
          label: '所在区域',
          prop: 'districtCode',
          type: 'district'
        },
        {
          label: '金额',
          prop: 'districtCode',
          type: 'currency',
        },
        {
          label: '职位类型',
          prop: 'role',
          dicData: 'roleDict'
        },
        {
          label: '申请时间',
          prop: 'createdAt',
          type: 'time',
          formatter: '%F %T'
        },
        {
          label: '销售状态',
          prop: 'status',
          dicData: 'salesmanStateDict'
        }]
      },
      tableData: [],
      searchForm: {},
      page: {
        total: 0,
        page: 1,
        pageRows: 10
      }
    }
  },
  created () {
    this.getTableData(this.searchForm)
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
      this.$router.push({path: 'work/view/details'})
      console.log('rowData', rowData)
    },
    handleFormChange (form) {
      console.log('搜索', form)
      this.page.page = 1
      this.getTableData(form)
    },
    handleCurrentChange (val, formUpdate) {
      this.page.page = val
      this.getTableData(formUpdate)
    },
    handleSizeChange (val, formUpdate) {
      this.page.pageRows = val
      this.getTableData(formUpdate)
    },
    onSubmit() {
      this.getTableData()
    },
    getTableData (form) {
      this.tableLoading = true
      salesList(Object.assign({}, form, this.page)).then(res => {
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
</style>
