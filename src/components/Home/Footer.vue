<template>
  <div id="footer-wrapper">
    <img src="@/assets/img/svg/homepage/leftDownTool (2).svg" alt="back" />
    <img src="" alt="weather" />
    <img src="" alt="favorite" />
    <img src="" alt="create" />
    <img src="" alt="footprint" />
    <img src="" alt="compass" />
    <el-switch v-model="traveler" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    <p class="mode_text">{{ cur_mode }}</p>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      traveler: false,
      cur_mode: 'map mode'
    }
  },
  watch: {
    traveler() {
      this.cur_mode = this.traveler? 'travel mode': 'map mode';
    }
  }
}
</script>

<style lang="scss">
  #footer-wrapper {
    display: flex;
    position: fixed;
    bottom: 0;
    width: calc(100vw - 2px);
    height: 8vh;
    background-color: var(--bg_white);
    border: 1px solid var(--bg_brown);
    img {
      width: 10vw;
      margin: 1vw;
    }
    .mode_text {
      font-size: 14px;
      color: var(--bg_brown);
    }
  }
</style>
