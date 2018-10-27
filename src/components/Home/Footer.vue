<template>
  <div class="container">
    <div v-show="traveler" id="add"><img src="@/assets/img/svg/homepage/add.svg" alt="add" /></div>
    <div id="extraDiv">
      <el-switch v-model="traveler"></el-switch>
      <p class="mode_text">{{ cur_mode }}</p>
    </div>
    <div id="footer-wrapper">
      <img src="@/assets/img/svg/homepage/back.svg" alt="back" />
      <img src="@/assets/img/svg/homepage/compass.svg" alt="compass" />
      <img v-if="isFootClicked" src="@/assets/img/svg/homepage/footprint_clicked.svg" @click="createRoute()" alt="footprint" />
      <img v-else src="@/assets/img/svg/homepage/footprint.svg" @click="createRoute()" alt="footprint" />
      <img v-if="isHeartClicked" src="@/assets/img/svg/homepage/favorite_clicked.svg" @click="saveFavorite()" alt="favorite" />
      <img v-else src="@/assets/img/svg/homepage/favorite.svg" @click="saveFavorite()" alt="favorite" />
      <img src="@/assets/img/svg/homepage/create.svg" alt="create" />
      <el-popover placement="top" width="160">
        <img src="@/assets/img/svg/homepage/WeatherIcon1.svg" width="40%" />
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
      cur_mode: 'map mode',
      isFootClicked: false,
      isHeartClicked: false
    }
  },
  props: {
    weather: {
      type: Number,
      default: 1
    },
    temperature: {
      type: Number,
      default: 28
    }
  },
  methods: {
    saveFavorite() {
      this.isHeartClicked = !this.isHeartClicked;
      if (this.isHeartClicked)
        this.$message({
          message: '已儲存此地點',
          type: 'success',
            center: true
        });
      else
        this.$message({
          message: '已取消儲存此地點',
          type: 'warning',
            center: true
        });
    },
    createRoute() {
      this.isFootClicked = !this.isFootClicked;
      if (this.isFootClicked)
        this.$message({
          message: '已開始紀錄旅程',
          type: 'success',
            center: true
        })
      else
        this.$message({
          message: '旅程已結束',
          type: 'success',
            center: true
        })
    },
    imgWeather() {
      return `@/assets/img/svg/homepage/WeatherIcon${this.weather}.svg`
    }
  },
  watch: {
    traveler() {
      this.cur_mode = this.traveler? 'travel mode': 'map mode';
      this.$emit('modeChange', this.traveler);
    }
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    #add {
      position: absolute;
      width: 15vw;
      right: 5px;
      top: 30vh;
    }
    #extraDiv {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: var(--bg_blue);
      position: fixed;
      bottom: 12vh;
      left: 0;
      width: 30vw;
      height: 9vw;
      z-index: 10000;
      .el-switch {
        flex-grow: 0;
        flex-shrink: 0;
        z-index: 9999;
        .el-switch__core {
          background-color: var(--bg_white) !important;
          border-color: var(--bg_white) !important;
        }
        .el-switch__core:after {
          background-color: var(--bg_blue) !important;
        }
      }
      .mode_text {
        font-size: 1vw;
        color: var(--bg_white);
      }
    }
    #footer-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: fixed;
      bottom: 0;
      width: 100vw;
      height: var(--footer_height);
      background-color: var(--bg_blue);
      border-top: 1px solid var(--bg_white);
      .temp {
        font-size: 18%;
        color: var(--bg_white);
      }
      img {
        width: 8vw;
        margin: 1vw;
      }
    }
  }
  .el-popover {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw !important;
    border: 1px solid var(--bg_blue) !important;
    background-color: var(--bg_blue) !important;
    color: var(--bg_white) !important;
    top: calc(90vh - 25vw) !important;
    bottom: 10vh !important;
    left: 50vw !important;
    img {
      width: 10vw;
    }
  }
  .el-popper[x-placement^=top] .popper__arrow {
    border-top-color: var(--bg_blue) !important;
  }
  .el-popper[x-placement^=top] .popper__arrow::after {
    display: none !important;
  }
  .el-message {
    z-index: 100001 !important;
  }
</style>
