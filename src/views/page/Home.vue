<template>
  <div id="home">
    <transition name="fade">
      <List v-if="isLeftListOpen" @changeToSearch="change" @closeLeftList="isLeftListOpen=false" />
      <div class="header">
        <Header :changeToString="changeToSearch" v-show="!isListOpen" @openLeftList="isLeftListOpen=true" @locateq="cheat"/>
      </div>
    </transition>
    <div id="myMap" :class="{ 'dark': isLeftListOpen }">
    </div>
    <Footer @selectMapCenter="pingMapCenter" :toChangeMapMode="changeToMode" :class="{ 'dark': isLeftListOpen }" @modeChange="cur_mode=$event" />
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import Footer from '@/components/Home/Footer'
import List from '@/components/Home/List'

import heart from '@/assets/img/svg/heartIcon x 01.svg';

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    List
  },
  data() {
    return {
      map: null,
      isLeftListOpen: false,
      cur_mode: 0,
      changeToSearch: 0,
      changeToMode: false,
      selectedPing: []
    }
  },
  methods: {
    pingMapCenter() {
      this.selectedPing.push(this.map.getCenter());
      this.map.entities.push(new Microsoft.Maps.Pushpin(this.map.getCenter(), {icon: heart, anchor: new Microsoft.Maps.Point(25, 25)}))
    },
    change() {
      this.cur_mode = true;
      this.changeToSearch = "2";
      this.isLeftListOpen = false;
      this.changeToMode = true;
    },
    loadMapScenario() {
      if (this.cur_mode){
        this.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
      /* No need to set credentials if already passed in URL */
          center: new Microsoft.Maps.Location(23.5, 120.58),
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
        var center = this.map.getCenter();
        var polyline = new Microsoft.Maps.Polyline([new Microsoft.Maps.Location(24.8005253, 120.9907825),
        new Microsoft.Maps.Location(24.7947253, 120.9932316),
        new Microsoft.Maps.Location(24.789067, 120.999263)], { strokeColor: 'blue', strokeThickness: 5 });
        this.map.entities.push(polyline);
      }
      else {
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
        }
      });
      var pushpin = new Microsoft.Maps.Pushpin({latitude: 25.0173405,longitude: 121.5397518}, { icon:  '<svg xmlns="@/assets/img/svg/node_data/LocationMark.svg" width="50" height="50"><circle cx="25" cy="25" r="20" stroke="orange" stroke-width="4" fill="yellow" /></svg>',
          anchor: new Microsoft.Maps.Point(12, 39) });
        this.map.entities.push(pushpin);
      }
    },
    cheat(locate){
      console.log("QAQ");
      this.map.setView({
        center: new Microsoft.Maps.Location(locate.lat, locate.lng),
        zoom: 15
      });
    }
  },
  mounted() {
    this.loadMapScenario();
  },
  watch: {
    cur_mode(){
      this.loadMapScenario();
    }
  }
}
</script>

<style lang="scss">
  #home {
    position: relative;
    width: 100vw;
    height: 100vh;
    .header{
      position: absolute;
      z-index: 3;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 1s;
  opacity: 0;
}
</style>
