<template>
  <div id="home">
    <transition name="fade">
      <List v-if="isLeftListOpen" @changeToSearch="change" @closeLeftList="isLeftListOpen=false" />
      <div class="header">
        <Header :changeToString="changeToSearch" v-show="!isListOpen" @openLeftList="isLeftListOpen=true"/>
      </div>
    </transition>
    <div id="myMap" :class="{ 'dark': isLeftListOpen }">
    </div>
    <Footer :toChangeMapMode="changeToMode" :class="{ 'dark': isLeftListOpen }" @modeChange="cur_mode=$event" />
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import Footer from '@/components/Home/Footer'
import List from '@/components/Home/List'


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
      changeToMode: false
    }
  },
  methods: {
    change() {
      this.cur_mode = true;
      this.changeToSearch = "2";
      this.isLeftListOpen = false;
      this.changeToMode = true;
    },
    loadMapScenario() {
      if (this.cur_mode)
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
        }
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
