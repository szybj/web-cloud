<template>
  <el-form :model="form"
           :inline="setData(formOption.inline, true)">
    <el-form-item v-for="(column, index) in option"
                  :key="index"
                  :prop="column.prop"
                  :label="column.label">
      <component :is="getComponent(column.type)"
                 :size="setData(formOption.size, 'mini')"
                 :type="column.type"
                 :dataType="column.dataType"
                 v-model="form[column.prop]"
                 :showShortcuts="column.showShortcuts"
                 :multiple="setData(column.multiple, false)"
                 :reserve-keyword="setData(column.reserveKeyword, false)"
                 :optionGroup="setData(column.optionGroup, false)"
                 :selectChildren="setData(column.selectChildren, 'children')"
                 :isAll="column.isAll"
                 :filterable="setData(column.filterable, false)"
                 :selectLabel="setData(column.selectLabel, 'label')"
                 :selectValue="setData(column.selectValue, 'value')"
                 :format="column.format"
                 :selectDataFormatFn="column.selectDataFormatFn"
                 :dataSplit="column.dataSplit"
                 :startProp="column.startProp"
                 :endProp="column.endProp"
                 :valueFormat="column.valueFormat"
                 :defaultTime="column.defaultTime"
                 :clearable="setData(column.clearable, true)"
                 :placeholder="column.label"
                 @change="searchItemChange"
                 :dic="setDic(column.dicData, DIC[column.dicData])"></component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="submitForm"
                 :size="setData(formOption.size, 'mini')">搜索</el-button>
      <slot name="searchMenu"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
  import utilMixin from 'mixin/util.js'

  export default {
    name: 'orangeForm',
    mixins: [utilMixin()],
    props: {
      formOption: {
        type: Object,
        required: true,
        default: () => {}
      },
      DIC:{
        type: Object
      }
    },
    computed: {
      option () {
        return this.formOption.option || []
      }
    },
    data () {
      return {
        form: {}
      }
    },
    created () {
      this.formInit()
    },
    methods: {
      submitForm() {
        this.$emit("submit-form", this.form)
      },
      // 检测表单项变化
      searchItemChange (val, props) {
        if (Array.isArray(val) && val.length && props.type === 'daterange' && props.dataSplit && props.startProp && props.endProp) {
          this.form[props.startProp] = val[0] || ''
          this.form[props.endProp] = val[1] || ''
        } else {
          delete(this.form[props.startProp])
          delete(this.form[props.endProp])
        }
      },
      formInit() {
        let submitFormInit = this.formInitVal(this.option)
        this.form = JSON.parse(JSON.stringify(submitFormInit))
      }
    }
  }
</script>

<style scoped>

</style>
