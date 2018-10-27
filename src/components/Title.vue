<template>
  <div id="tit_w">
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
  #tit_w {
    height: var(--header_height);
    width: 100vw;
    #title-wrapper {
      position: fixed;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: var(--header_height);
      align-items: center;
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
  }
</style>
