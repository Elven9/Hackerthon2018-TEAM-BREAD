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
body {
  margin: 0;
  #app {
    height: 100vh;
    width: 100%;
    #header {
      height: 10%;
      width: 100%;
    } 
  }
}
</style>
