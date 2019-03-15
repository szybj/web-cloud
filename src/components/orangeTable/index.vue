<template>
  <div v-loading="loading"
       :element-loading-text="loadingText">
    <!--搜索项-->
    <div class="searchBox" v-if="setData(searchOption && searchOption.search,true) && searchOption && searchOption.option && searchOption.option.length">
      <slot name="search">
        <orange-form
        :formOption="searchOption"
        :DIC="formDIC"
        @submit-form="handleSubmitForm"></orange-form>
      </slot>
    </div>
    <div class="tableBox">
      <el-table
        v-if="columnOption && columnOption.length"
        :data="tableData"
        :size="setData(tableConfig.size, 'small')"
        :stripe="tableConfig.stripe"
        :border="tableConfig.border"
        :show-header="tableConfig.showHeader"
        :row-class-name="rowClassName"
        :default-sort="tableConfig.defaultSort"
        :cell-class-name="cellClassName"
        @sort-change="sortChange">
        <!-- 折叠面板  -->
        <el-table-column v-if="tableConfig.expand"
                         type="expand"
                         width="50"
                         fixed="left"
                         align="center">
          <template slot-scope="props">
            <slot :row="props.row"
                  name="expand"></slot>
          </template>
        </el-table-column>
        <!--选择框-->
        <el-table-column v-if="tableConfig.selection"
                         type="selection"
                         width="50"
                         fixed="left"
                         align="center">
        </el-table-column>
        <!--索引-->
        <el-table-column v-if="tableConfig.index"
                         :label="setData(tableConfig.indexLabel, '#')"
                         type="index"
                         width="50"
                         :index="indexMethod"
                         fixed="left"
                         align="center">
        </el-table-column>
        <!--遍历-->
        <el-table-column v-for="(column,index) in columnOption"
                         :key="index"
                         :width="column.width"
                         :prop="column.prop"
                         :label="column.label"
                         :sortable="column.sortable"
                         :align="setData(column.align, tableConfig.align)"
                         :header-align="setData(column.headerAlign, tableConfig.headerAlign)"
                         :show-overflow-tooltip="column.overHidden">
          <!--复合表头-->
          <el-table-column v-if="column.children"
          v-for="(k,index) in column.children"
          :sortable="k.sortable"
          :prop="k.prop"
          :label="k.label"
          >
            <template slot-scope="scope">
              <slot :row="scope.row"
                    :name="k.prop"
                    v-if="k.slot"></slot>
              <template v-else>
                <span v-html="detail(scope.row, k)"></span>
              </template>
            </template>
          </el-table-column>
          <template slot-scope="scope">
            <slot :row="scope.row"
                  :name="column.prop"
                  v-if="column.slot"></slot>
            <template v-else>
              <span v-html="detail(scope.row, column)"></span>
            </template>
          </template>
        </el-table-column>
        <!--操作-->
        <el-table-column fixed="right"
                         v-if="setData(tableConfig.menu, 'false')"
                         :label="setData(tableConfig.menuTitle, '操作')"
                         :align="setData(tableConfig.menuAlign, 'center')"
                         :header-align="setData(tableConfig.menuHeaderAlign, 'left')"
                         :width="setData(tableConfig.menuWidth, 200)">
          <template slot-scope="scope">
            <slot name="menu"
                  :row="scope.row">
            </slot>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="paginationWrap">
      <orange-pagination v-if="pageFlag && columnOption && columnOption.length"
                         :page="page"
                         @current-change="currentChange"
                         @size-change="sizeChange">
      </orange-pagination>
    </div>
  </div>
</template>

<script>
import utilMixin from 'mixin/util.js'
import * as util from 'utils/util.js'

export default {
  name: 'orangeTable',
  mixins: [utilMixin()],
  props: {
    rowClassName: Function,
    cellClassName: Function,
    tableDIC: {
      type: Object,
      default: () => {}
    },
    formDIC: {
      type: Object,
      default: () => {}
    },
    tableConfig: {
      type: Object,
      required: true,
      default: () => {}
    },
    searchOption: {
      type: Object,
      default: () => {}
    },
    page: {
      type: Object,
      default() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '加载中......'
    },
    tableData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    columnOption () {
      return this.tableConfig.column || []
    },
    pageFlag() {
      return !util.validateNull(this.pageUpdate.total)
    },
    pageUpdate () {
      return this.page
    }
  },
  created () {
    // this.dataInit()
  },
  data () {
    return {
      listData: [],
      form: {}
    }
  },
  methods: {
    dataInit() {
      this.listData = [].concat(this.tableData)
      //初始化序号
      this.listData.forEach((ele, index) => {
        ele.$index = index
      })
    },
    // 设置索引值
    indexMethod (index) {
      return (index + 1 + ((this.pageUpdate.page || 1) - 1) * (this.pageUpdate.pageRows || 10))
    },
    // 排序回调
    sortChange(val) {
      this.$emit("sortChange", val)
    },
    handleSubmitForm (val) {
      this.form = val
      this.$emit('form-change', val)
    },
    // 页大小回调
    sizeChange(val) {
      this.pageUpdate.page = 1
      this.pageUpdate.pageRows = val
      this.$emit("size-change", val, this.form)
    },
    // 页码回调
    currentChange(val) {
      this.pageUpdate.page = val
      this.$emit("current-change", val, this.form)
    },
  }
}
</script>

<style scoped lang="scss">
.searchBox{
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5
}
.tableBox{
  padding-top: 10px
}

.paginationWrap{
  margin: 10px 0;
  display: flex;
  justify-content: space-around
}
</style>
