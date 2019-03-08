<template>
  <div>
    <el-select v-model="text"
               v-if="optionGroup"
               :size="size"
               :clearable="clearable"
               :multiple="multiple"
               :reserve-keyword="reserveKeyword"
               :filterable="filterable"
               @change="handleChange"
               placeholder="请选择">
      <el-option-group
        v-for="group in options"
        :key="group[selectLabel]"
        :label="group[selectLabel]">
        <el-option
          v-for="item in group[selectChildren]"
          :key="item[selectValue]"
          :label="`${group[selectLabel]}-${item[selectLabel]}`"
          :value="resultObj ? item : item[selectValue]">
        </el-option>
      </el-option-group>
    </el-select>
    <el-select v-model="text"
               v-else
               :size="size"
               :clearable="clearable"
               :multiple="multiple"
               :reserve-keyword="reserveKeyword"
               :filterable="filterable"
               @change="handleChange"
               placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item[selectValue]"
        :label="item[selectLabel]"
        :value="resultObj ? item : item[selectValue]">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import componentMixin from 'mixin/componentMixin'

export default {
  mixins: [componentMixin()],
  name: 'orangeSelect',
  props: {
    selectDataFormatFn: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'mini'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    filterable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    reserveKeyword: {
      type: Boolean,
      default: false
    },
    selectValue: {
      type: String,
      default: 'value'
    },
    selectLabel: {
      type: String,
      default: 'label'
    },
    isAll: {
      type: Boolean,
      default: true
    },
    optionGroup: {
      type: Boolean,
      default: false
    },
    selectChildren: {
      type: String,
      default: 'children'
    },
    type: {
      type: String,
      default: ''
    },
    dataType: {
      type: String,
      default: ''
    },
    dic: {
      type: [Array, Object]
    }
  },
  data () {
    return {
      options: []
    }
  },
  computed: {
    resultObj () {
      return this.dataType === 'object'
    }
  },
  created () {
    this.selectDataFormat()
  },
  methods: {
    selectDataFormat () {
      const isAll = this.isAll && !this.multiple
      if (this.selectDataFormatFn && typeof this[this.selectDataFormatFn] === 'function') {
        this[this.selectDataFormatFn]({ data: this.dic }, {isAll}).then(data => {
          this.options = data
        })
      } else {
        this.options = this.dic
      }
    }
  }
}
</script>

<style scoped>

</style>
