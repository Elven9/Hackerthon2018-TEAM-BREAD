<template>
  <div id="home">
    <Header />
    <RightList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import RightList from '@/components/Home/RightList'
import Footer from '@/components/Home/Footer'

export default {
  name: 'home',
  components: {
    Header,
    RightList,
    Footer
  }
}
</script>

<style lang="scss">
  #home {
    width: 100vw;
    height: 100vh;
  }
</style>
