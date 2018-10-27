<template>
  <div id="footer-wrapper">
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  #footer-wrapper {
    position: fixed;
    bottom: 0;
    width: calc(100vw - 2px);
    height: 8vh;
    background-color: var(--bg_white);
    border: 1px solid var(--bg_brown);
  }
</style>
