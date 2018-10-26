<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
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
</style>
