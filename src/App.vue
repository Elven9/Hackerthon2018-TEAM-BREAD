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
    --bg_blue: RGBA(50, 50, 50, 0.8);
    --li_blue: RGBA(50, 50, 60, 0.8);;
    --header_height: 10vh;
    --footer_height: 17vw;
    --content_height: calc(100vh - var(--header_height) - var(--footer_height));
  }
  body {
    margin: 0;
    #app {
      width: 100vw;
      height: 100vh;
    }
  }
</style>
