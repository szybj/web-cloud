import * as util from 'utils/util.js'
import * as filter from 'utils/filter.js'
import DIC from 'assets/dic'

export default function () {
  return {
    created() {
      this.init()
    },
    methods: {
      init () {
        this.initFun()
      },
      initFun() {
        Object.keys(util).forEach(key => {
          this[key] = util[key]
        })
        Object.keys(filter).forEach(key => {
          this[key] = filter[key]
        })
      },
      // 处理数据
      detail(row, column) {
        let result = row[column.prop || column.value],
          type = column.type,
          formatter = column.formatter
        if (util.validateNull(result)){
          result = '----'
        }
        if (type) {
          if (['date'].includes(type)) {
            result = this.customDate(result, formatter)
          }
          if (['currency'].includes(type)) {
            result = this.customCurrency(result, formatter)
          }
          if (['district'].includes(type)) {
            result = this.districtFormatter(row)
          }
          if (['order'].includes(type)) {
            result = this.orderState(row)
          }
        }
        if (column.dicData && typeof column.dicData === 'string') {
          result = DIC[column.dicData][result] || '----'
        }
        if (column.formatter && typeof column.formatter === 'function') {
          result = column.formatter(row, row[column.prop], result, column)
        }
        return result
      },
      setData (val, defaultValue) {
        if (typeof val === 'boolean') {
          return val
        }
        return !util.validateNull(val) ? val : defaultValue
      }
    }
  }
}
