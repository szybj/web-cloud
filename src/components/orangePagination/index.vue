<template>
  <el-pagination :current-page.sync="defaultPage.page"
                 :page-size="defaultPage.pageRows"
                 :page-sizes="defaultPage.pageSizes"
                 @size-change="sizeChange"
                 @current-change="currentChange"
                 layout="total, sizes, prev, pager, next, jumper"
                 :total="defaultPage.total"></el-pagination>
</template>

<script>
  export default {
    name: 'orangePagination',
    props: {
      page: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data () {
      return {
        defaultPage: {
          total: 0, // 总页数
          page: 1, // 当前页数
          pageRows: 10, // 每页显示多少条
          pageSizes: [10, 20, 30, 40, 50, 100],
          background: true // 背景颜色
        }
      }
    },
    methods: {
      // 页大小回调
      sizeChange(val) {
        this.defaultPage.page = 1
        this.defaultPage.pageRows = val
        this.$emit("size-change", val)
      },
      // 页码回调
      currentChange(val) {
        this.$emit("current-change", val)
      },
      pageInit() {
        this.defaultPage.total = this.page.total || 0
        this.defaultPage.page = this.page.page || 1
        this.defaultPage.pageRows = this.page.pageRows || 10
        this.defaultPage.pageSizes = this.page.pageSizes || [
          10,
          20,
          30,
          40,
          50,
          100
        ]
        this.defaultPage.background = this.page.background || true
      }
    },
    watch: {
      page: {
        handler() {
          this.pageInit()
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
