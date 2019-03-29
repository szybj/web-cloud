<template>
  <div class='myTable'>
    <table border='0' cellspacing='1' cellpadding='0'>
      <template v-for='(k, index) in columnConfig'>
        <tr v-if='index %columnNum === 0'>
          <template v-for='columnIndex in columnNum'>
            <template  v-if='columnConfig[index + (columnIndex - 1)]'>
              <td>{{columnConfig[index + (columnIndex - 1)]['label']}}：</td>
              <td v-html='detail(tableData, columnConfig[index + (columnIndex - 1)])'></td>
            </template>
            <template v-else>
              <td></td>
              <td></td>
            </template>
          </template>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
  import utilMixin from 'mixin/util.js'

  export default {
    mixins: [utilMixin()],
    name: 'detailsTable',
    props: {
      tableConfig: {
        type: Object,
        required: true,
        default: () => {}
      },
      tableData: {
        type: [Object, Array],
        required: true
      }
    },
    computed: {
      columnConfig () {
        return this.tableConfig.column || []
      },
      columnNum () {
        return this.tableConfig.columnNum || 4
      }
    },
    data () {
      return {}
    },
    // created () {
    //   console.log('创建自定义表格')
    //   window.onresize = this.throttle(this.a, 1000)
    // },
    // destroyed () {
    //   console.log('销毁自定义表格')
    //   window.onresize = null
    // },
    methods: {
      // a () {
      //   let clientWidth = document.body.clientWidth
      //   console.log('width', clientWidth)
      //   this.$emit('resize', clientWidth)
      //   console.log('窗口变化')
      // }
    }
  }
</script>

<style scoped lang="scss">
.myTable{
  .line{
    &.el-form-item__label {
      border: 1px solid #999;
    }
  }
  table{
    background: #dfe6ec;
    width: 98%;
    font-size:12px!important;
    tr{
      td:nth-child(2n-1){
        background-color: #eef4f6;
        text-align: right;
        width: 10%;
        height: 20px;
        line-height: 20px
      }
    }
    td {
      background-color: #ffffff;
      width: 12%;
      padding: 5px;
      line-height: 20px;
      height: 20px
    }
  }
}
</style>
