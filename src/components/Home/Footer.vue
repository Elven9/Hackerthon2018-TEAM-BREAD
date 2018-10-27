<template>
  <div id="footer-wrapper">
    <img src="/assets/img/svg/homepage/leftBarIcon.svg">
    <!-- <el-popover placement="top" width="160" v-model="visible2">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
        <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
      </div>
      <el-button slot="reference">删除</el-button>
    </el-popover> -->
    <!-- <img src="img/svg/homepage/weather.svg" alt="weather" />
    <img src="img/svg/homepage/favorite.svg" alt="favorite" />
    <img src="img/svg/homepage/create.svg" alt="create" />
    <img src="img/svg/homepage/footprint.svg" alt="footprint" />
    <img src="img/svg/homepage/compass.svg" alt="compass" /> -->
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
      cur_mode: 'map mode',
      imgList: ['back', 'weather', 'favorite', 'create', 'footprint', 'compass']
    }
  },
  methods: {
    location(img) {
      return 'img/svg/homepage/'+img+'.svg';
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
    height: 8vh;
    background-color: var(--bg_white);
    border: 1px solid var(--bg_brown);
    img {
      width: 10vw;
      height: 10vw;
    }
    .el-switch__core {
      background-color: var(--bg_brown) !important;
      border-color: var(--bg_brown) !important;
    }
    .mode_text {
      font-size: 5%;
      color: var(--bg_brown);
    }
  }
</style>
