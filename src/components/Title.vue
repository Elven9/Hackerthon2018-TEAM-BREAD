<template>
  <div id="title-wrapper">
    <img id="leftBar" src="@/assets/img/svg/node_data/leftBar.svg" alt="leftBar"/>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
  #title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 13vh;
    width: 100vw;
    background-color: var(--bg_blue);
    #leftBar {
      height: 5vh;
    }
  }
</style>
