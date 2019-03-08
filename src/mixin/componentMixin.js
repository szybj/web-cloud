import * as util from 'utils/util'

export default function () {
  return {
    components: {},
    watch: {
      value () {
        this.initVal()
      }
    },
    data () {
      return {
        text: ''
      }
    },
    created () {
      this.init()
    },
    computed: {
      isString () {
        return this.dataType === 'string'
      }
    },
    methods: {
      init () {
        this.initVal()
        this.initFun()
      },
      initVal () {
        this.text = util.initVal({
          type: this.type,
          multiple: this.multiple,
          value: this.value
        })
      },
      initFun() {
        Object.keys(util).forEach(key => {
          this[key] = util[key]
        })
      },
      handleChange (value) {
        let result = ''
        if (this.isString && ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'cascader'].includes(this.type)) {
          result = value.join(',')
        } else {
          result = (this.isString && this.multiple) ? value.join(',') : value
        }
        this.$emit('input', result)
        this.$emit('change', result, this.$props)
      }
    }
  }
}
