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
