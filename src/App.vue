<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "view/layout/Header";
import Footer from "view/layout/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
:root {
  --bg: RGB(255, 164, 143);
  --bg_dark: RGB(220, 147, 132);
  --header_height: 10vh;
  --footer_height: 18vh;
  --content_height: calc(100vh - var(--header_height) - var(--footer_height));
}

body {
  margin: 0;
  #app {
    height: 100vh;
    width: 100%;
    #header {
      height: var(--header_height);
      width: 100%;
    } 
  }
}
</style>
