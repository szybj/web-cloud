<template>
  <div>
    <el-date-picker
      v-model="text"
      :type="type"
      :size="size"
      :align="dateAlgin"
      :unlink-panels="unlinkPanels"
      :picker-options="showShortcuts && pickerOptions"
      :range-separator="rangeSeparator"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :value-format="valueFormat"
      :format="format"
      :default-time="defaultTime"
      @change="handleChange">
    </el-date-picker>
  </div>
</template>

<script>
import componentMixin from 'mixin/componentMixin'
export default {
  name: 'orangeDate',
  mixins: [componentMixin()],
  props: {
    dateAlgin: {
      type: String,
      default: ''
    },
    unlinkPanels: {
      type: Boolean,
      default: false
    },
    rangeSeparator: {
      type: String,
      default: '-'
    },
    format: {
      type: String,
      default: 'yyyy 年 MM 月 dd 日'
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    defaultTime: {
      type: Array,
      default:() => ['00:00:00', '23:59:59']
    },
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '结束时间'
    },
    size: {
      type: String,
      default: 'mini'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: ''
    },
    dataType: {
      type: String
    },
    dataSplit: {
      type: Boolean,
      defalut: false
    },
    startProp: {
      type: String
    },
    endProp: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    showShortcuts: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
