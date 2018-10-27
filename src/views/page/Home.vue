<template>
  <div id="home">
    <List v-if="isLeftListOpen" @closeLeftList="isLeftListOpen=false" />
    <div id="myMap" :class="{ 'dark': isLeftListOpen }">
      <Header @openLeftList="isLeftListOpen=true"/>
      <RightList />
    </div>
    <Footer :class="{ 'dark': isLeftListOpen }" @modeChange="cur_mode=$event" />
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import RightList from '@/components/Home/Right'
import Footer from '@/components/Home/Footer'
import List from '@/components/Home/List'

export default {
  name: 'home',
  components: {
    Header,
    RightList,
    Footer,
    List
  },
  data() {
    return {
      map: null,
      isLeftListOpen: false,
      cur_mode: 0
    }
  },
  methods: {
    loadMapScenario() {
      if (!this.cur_mode)
        this.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
      /* No need to set credentials if already passed in URL */
          center: new Microsoft.Maps.Location(47.616343, -122.203177),
          customMapStyle: {
            elements: {
                area: { fillColor: '#fbf2ea' },
                water: { fillColor: '#66b3ff' },
                tollRoad: { fillColor: '#fbf2ea', strokeColor: '#fbf2ea' },
                arterialRoad: { fillColor: '#fbf2ea', strokeColor: '#fbf2ea' },
                road: { fillColor: '#fbf2ea', strokeColor: '#fbf2ea' },
                street: { fillColor: '#fbf2ea', strokeColor: '#fbf2ea' },
                transit: { fillColor: '#000000' }
            },
            settings: { landColor: '#fbf2ea' }
          }
        });
      else 
        this.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    /* No need to set credentials if already passed in URL */
    center: new Microsoft.Maps.Location(23.5, 120.58),
        customMapStyle: {
          elements: {
            area: { fillColor: '#a8c4f0' },
            water: { fillColor: '#529ee0' },
            tollRoad: { fillColor: '#ffb3b3', strokeColor: '#ffb3b3' },
            arterialRoad: { fillColor: '# ffeee6', strokeColor: '#ffeee6' },
            road: { fillColor: '#ffddcc', strokeColor: '#ffddcc' },
            street: { fillColor: '#e6f7ff', strokeColor: '#e6f7ff' },
            transit: { fillColor: '#000000' }
          },
          settings: { landColor: '#c1ebff' }
    } });
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
      position: fixed !important;
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
    .dark {
      z-index: -1;
      overflow: hidden;
    }
  }
</style>
