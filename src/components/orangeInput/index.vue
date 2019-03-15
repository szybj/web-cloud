<template>
  <el-input v-model.trim="text"
            :size="size"
            :clearable="clearable"
            @change="handleChange"
            placeholder="请输入内容">
  </el-input>
</template>

<script>
import componentMixin from 'mixin/componentMixin'
export default {
  mixins: [componentMixin()],
  name: 'orangeInput',
  props: {
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
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
