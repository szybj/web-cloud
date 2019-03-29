<template>
  <div>
    <content-block>
      <orange-table
      :tableData="tableData"
      :tableConfig="tableConfig"
      :searchConfig="searchConfig"
      :loading="tableLoading"
      :loadingText="tableLoadingText"
      :page="page"
      :formDIC="DIC"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      @form-change="handleFormChange"
      @viewClick='handleViewClick'
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
      <template slot-scope="scope" slot="menu">
      <!--<el-button @click.stop="testClick(scope.row)" type="text" size="small">权限</el-button>-->
      <!--<el-button size="small">权限</el-button>-->
      <!--<el-button size="small">权限</el-button>-->
      </template>
      </orange-table>
      <siderbar>
      <siderbarPane name="1" label="示例1">
      <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
      <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
      </el-form-item>
      </el-form>
      </siderbarPane>
      <siderbarPane name="2" label="示例2">
      component
      </siderbarPane>
      </siderbar>
    </content-block>
  </div>
</template>

<script>
import * as util from 'utils/util'
import { mapGetters } from 'vuex'
import { salesList } from '@/api/salesman'
import DIC from 'assets/dic'
export default {
  computed: {
    ...mapGetters(['userInfo']),
    detailQueryParams () {
      return this.detailQuery.params || []
    }
  },
  data () {
    return {
      DIC,
      tableLoding: false,
      tableLoadingText: 'wwwwwwwww',
      searchConfig: {
        'inline': true,
        'size': 'mini',
        'option':[{
          'label': '销售姓名',
          'prop': 'salesmanName'
        },{
          'label': '手机号码',
          'prop': 'phoneNumber'
        },
          {
            'label': '身份证号',
            'prop': 'cardId'
          },
          {
            'label': '职位类型',
            'prop': 'role',
            'type': 'select',
            'dataType': 'string',
            'filterable': true,
            'dicData': 'roleDict',
            'selectDataFormatFn': 'getSelectData'
          },
          {
            'label': '销售状态',
            'prop': 'lifeCycle',
            'type': 'select',
            'filterable': true,
            'dicData': 'salesmanStateDict',
            'selectDataFormatFn': 'getSelectData'
          },
          {
            'label': '账号状态',
            'prop': 'status',
            'type': 'select',
            'filterable': true,
            'dicData': 'accountStatusDict',
            'selectDataFormatFn': 'orderSelectFormat'
          },
          {
            'label': '区域',
            'prop': 'districtCode',
            'type': 'cascader',
            'dataType': 'string',
            'filterable': true,
            'selectValue': 'district_code',
            'selectLabel': 'district',
            'selectChildren': 'subDistrict',
            'dicData': 'area'
          }]
      },
      tableConfig: {
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
        'viewBtn': true,
        'viewBtnType': 'text',
        'viewBtnUrl': '',
        'viewBtnTitle': '查看',
        'detailQuery': {
          'viewId': 2,
          'url': '',
          'params': ['cardId', 'salesmanId', 'step', 'status']
        },
        'defaultSort': {
          'prop': 'salesmanName',
          'order': 'ascending'
        },
        'column': [
          {
            'label': '销售姓名',
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
      tableData: [],
      searchForm: {},
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      detailQuery: {
        'viewId': 5,
        'params': ['cardId', 'salesmanId', 'step', 'status']
      },
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
    handleViewClick (rowData) {
      let rouerQuery = {}
      this.detailQueryParams.forEach(k => {
        rouerQuery[k] = rowData[k]
      })
      let rouerParams = Object.assign({}, this.detailQuery, {params: rouerQuery})
      this.$store.commit('SET_DETAILQUERY', rouerParams)
      this.$router.push({ path: `details`, query: { ...rouerParams.params }})
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
