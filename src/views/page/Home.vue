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
      this.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    /* No need to set credentials if already passed in URL */
        center: new Microsoft.Maps.Location(23.5, 120.58),
        customMapStyle: {
          elements: {
            area: { fillColor: '#a8c5f0' },
            water: { fillColor: '#007ff1' },
            tollRoad: { fillColor: '#ff9999', strokeColor: '#ff9999' },
            arterialRoad: { fillColor: '# ffeee6', strokeColor: '#ffeee6' },
            road: { fillColor: '#ffccb3', strokeColor: '#ffccb3' },
            street: { fillColor: '#e6f7ff', strokeColor: '#e6f7ff' },
            transit: { fillColor: '#000000' }
          },
          settings: { landColor: '#b3e6ff' }
        }
      });
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
