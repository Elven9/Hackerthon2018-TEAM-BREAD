<template>
  <div class="container">
    <div>
      <el-switch v-model="traveler"></el-switch>
      <p class="mode_text">{{ cur_mode }}</p>
    </div>
    <div id="footer-wrapper">
      <img src="@/assets/img/svg/homepage/back.svg" alt="back" />
      <img src="@/assets/img/svg/homepage/compass.svg" alt="compass" />
      <img src="@/assets/img/svg/homepage/footprint.svg" alt="footprint" />
      <img src="@/assets/img/svg/homepage/favorite.svg" alt="favorite" />
      <img src="@/assets/img/svg/homepage/create.svg" alt="create" />
      <el-popover placement="top" width="160" v-model="visible2">
        <img :src="imgWeather" width="40%" />
        <p class="temp">{{ temperature }} °C</p>
        <img src="@/assets/img/svg/homepage/weather.svg" alt="weather" slot="reference" />
      </el-popover>
    </div>
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
  props: {
    weather: {
      type: Number,
      default: 0
    },
    temperature: {
      type: String,
      default: 28
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
  .container {
    display: flex;
    flex-direction: column;
    .el-switch {
      left: 85vw;
      bottom: 25vw;
      z-index: 9999;
      .el-switch__core {
        background-color: var(--bg_white) !important;
        border-color: var(--bg_white) !important;
      }
      .el-switch__core:after {
        background-color: var(--bg_blue) !important;
      }
    }
    #footer-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: fixed;
      bottom: 0;
      width: calc(100vw - 2px);
      height: 17vw;
      background-color: var(--bg_blue);
      border: 1px solid var(--bg_white);
      .temp {
        font-size: 18%;
        color: var(--bg_white);
      }
      img {
        width: 8vw;
        margin: 1vw;
      }
      .mode_text {
        width: 20vw;
        font-size: 3vw;
        color: var(--bg_white);
      }
    }
    .el-popover {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      border: 1px solid var(--bg_blue) !important;
      background-color: var(--bg_blue) !important;
      color: var(--bg_white) !important;
      top: calc(90vh - 25vw) !important;
      bottom: 8vh !important;
      left: 35vw !important;
      z-index: 9999;
    }
    .el-popper[x-placement^=top] .popper__arrow {
      border-top-color: var(--bg_blue) !important;
    }
    .el-popper[x-placement^=top] .popper__arrow::after {
      display: none !important;
    }
  }
</style>
