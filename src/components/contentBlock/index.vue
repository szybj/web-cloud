<template>
  <div class="contentBlock">
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'contentBlock'
};
</script>

<style lang="scss">
.contentBlock {
  margin: 0 10px;
  padding: 8px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  .el-card {
    width: 100%;
  }
  &:first-child {
    padding-top: 0;
  }
}
</style>
