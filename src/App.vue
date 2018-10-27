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
    --bg_blue: RGBA(24, 138, 181, 80%);
  }
  body {
    margin: 0;
    #app {
      width: 100vw;
      height: 100vh;
    }
  }
</style>
