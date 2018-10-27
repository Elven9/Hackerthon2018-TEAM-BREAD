<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
  :root {
    --bg_white: #ffffff;
    --bg_brown: #754741;
  }
  body {
    margin: 0;
    #app {
      width: 100vw;
      height: 100vh;
    }
  }
</style>
