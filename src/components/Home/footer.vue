<template>
  <div id="footer-wrapper">
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>

export default {
  name: 'footer',
  components: {

  }
}
</script>

<style lang="scss">
  #footer-wrapper {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    background-color: var(--bg_white)
  }
</style>
