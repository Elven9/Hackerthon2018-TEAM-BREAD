<template>
  <div id="article-wrapper">
    <div id="idoidi">
      <img src="@/assets/img/svg/FavoriteLocation-01-01.png" alt="">
    </div>
    <!-- <Title title="我的最愛"></Title> -->
  </div>
</template>

<script>
import Title from '@/components/Title'

export default {
  name: 'article',
  components: {
    Title
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#article-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #DDF0F7;
  #idoidi {
    img {
      height: 100vh;
      width: 100vw;
    }
  }
}
</style>
