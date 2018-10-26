<template>
  <div id="app">
    <Header id="header" />
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
  #header {
    height: 10%;
  } 
</style>
