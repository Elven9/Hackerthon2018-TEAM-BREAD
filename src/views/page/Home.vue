<template>
  <div id="home">
    <div id="myMap">
      <Header />
      <RightList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import RightList from '@/components/Home/Right'
import Footer from '@/components/Home/Footer'

export default {
  name: 'home',
  components: {
    Header,
    RightList,
    Footer
  },
  data() {
    return {
      map: null
    }
  },
  methods: {
    loadMapScenario() {
      this.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    }
  },
  mounted() {
    this.loadMapScenario();
  }
}
</script>

<style lang="scss">
  #home {
    width: 100vw;
    height: 100vh;
    #myMap {
      top: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      .NavBar {
        display: none !important;
      }
      .bm_bottomRightOverlay {
        display: none !important;
      }
      .bm_bottomLeftOverlay {
        display: none !important;
      }
      #MicrosoftNav {
        display: none !important;
      }
    }
  }
</style>
