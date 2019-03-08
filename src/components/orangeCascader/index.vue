<template>
  <el-cascader
    v-model="text"
    :size="size"
    :options="options"
    :clearable="clearable"
    :filterable="filterable"
    :props="cascaderProps"
    placeholder="请选择"
    @change="handleChange">
  </el-cascader>
</template>

<script>
import componentMixin from 'mixin/componentMixin'

export default {
  mixins: [componentMixin()],
  name: 'orangeCascader',
  props: {
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
    selectValue: {
      type: String,
      default: 'value'
    },
    selectLabel: {
      type: String,
      default: 'label'
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
    cascaderProps () {
      return {
        label: this.selectLabel,
        value: this.selectValue,
        children: this.selectChildren
      }
    }
  },
  created () {
    this.selectDataFormate()
  },
  methods: {
    selectDataFormate () {
      this.options = this.dic
    }
  }
}
</script>

<style scoped>

</style>
