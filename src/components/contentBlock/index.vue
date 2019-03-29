<template>
  <div class="contentBlock">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'contentBlock'
};
</script>

<style lang="scss">
.contentBlock {
  background: #fff;
  padding: 15px;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
}
</style>
