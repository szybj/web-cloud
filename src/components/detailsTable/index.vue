<template>
  <div class='myTable'>
    <table border='0' cellspacing='1' cellpadding='0'>
      <template v-for='(k, index) in columnconfig'>
        <tr v-if='index %columnNum === 0'>
          <template v-for='columnIndex in columnNum'>
            <template  v-if='columnconfig[index + (columnIndex - 1)]'>
              <td>{{columnconfig[index + (columnIndex - 1)]['label']}}：</td>
              <td v-html='detail(tableData, columnconfig[index + (columnIndex - 1)])'></td>
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
        type: Object,
        required: true,
        default: () => {}
      }
    },
    computed: {
      columnconfig () {
        return this.tableConfig.column || []
      },
      columnNum () {
        let clientWidth = document.body.clientWidth
        console.log('width', clientWidth)
        return 3
      }
    },
    data () {
      return {}
    },
    mounted () {
      window.addEventListener('resize', this.throttle(this.tableAuto, 100))
    },
    methods: {
      tableAuto () {
        console.log('asdad')
      }
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
