<template>
  <div id="footer-wrapper">
    <img src="@/assets/img/svg/homepage/back.svg" alt="back" />
    <el-popover placement="top" width="160" v-model="visible2">
      <img :src="imgWeather" width="40%" />
      <p class="temp">{{ temperature }} °C</p>
      <img src="@/assets/img/svg/homepage/weather.svg" alt="weather" slot="reference" />
    </el-popover>
    <!-- <img src="@/assets/img/svg/homepage/weather.svg" alt="weather" /> -->
    <img src="@/assets/img/svg/homepage/favorite.svg" alt="favorite" />
    <img src="@/assets/img/svg/homepage/create.svg" alt="create" />
    <img src="@/assets/img/svg/homepage/footprint.svg" alt="footprint" />
    <img src="@/assets/img/svg/homepage/compass.svg" alt="compass" />
    <el-switch v-model="traveler"></el-switch>
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
  props: {
    weather: {
      type: Number,
      default: 5
    },
    temperature: {
      type: String,
      default: '無溫度資料'
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
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: calc(100vw - 2px);
    height: 11vw;
    background-color: var(--bg_blue);
    border: 1px solid var(--bg_white);
    .temp {
      font-size: 20%;
      color: var(--bg_white);
    }
    img {
      width: 6vw;
      margin: 1vw;
    }
    .el-switch__core {
      background-color: var(--bg_blue) !important;
      border-color: var(--bg_blue) !important;
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
    left: 15px !important;
  }
  .el-popper[x-placement^=top] .popper__arrow {
    border-top-color: var(--bg_blue) !important;
  }
  .el-popper[x-placement^=top] .popper__arrow::after {
    display: none !important;
  }
</style>
