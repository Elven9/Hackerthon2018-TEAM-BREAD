<template>
  <div>
    <List v-if="isLeftListOpen" @closeLeftList="isLeftListOpen=false" />
    <div id="title-wrapper">
      <img id="leftBar" src="@/assets/img/svg/node_data/leftBar.svg" alt="leftBar" @click="isLeftListOpen=true"/>
      <p id="tit">{{ title }}</p>
      <div style="width: 7vh; height: 4vh; margin: 3vh;"></div>
    </div>
  </div>
</template>

<script>
import List from '@/components/Home/List'

export default {
  components: {
    List
  },
  data() {
    return {
      isLeftListOpen: false
    }
  },
  props: {
    title: {
      type: String,
      default: '足跡'
    }
  }
}
</script>

<style lang="scss">
  #left {
    width: 100vw;
    height: 100vh;
    z-index: 1;
    #list {
      
    }
  }
  #title-wrapper {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100vw;
    background-color: var(--bg_blue);
    #leftBar {
      height: 4vh;
      margin: 3vh;
    }
    #tit {
      color: white;
      font-size: 4vh;
    }
  }
</style>
