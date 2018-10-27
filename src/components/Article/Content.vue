<template>
  <div id="content-wrapper">
    <div id="article_title">{{ article.title }}</div>
    <img :src="article.img" alt="img" />
    <div id="words">{{ article.words}}</div>
  </div>
</template>

<script>

export default {
  props: {
    article: {
      type: Object,
      default: function() {
        return {
          title: '新社花海',
          img: '@/assets/img/svg/homepage/back.svg',
          words: '的花海真的很漂亮！這裡的花海真的很漂亮！的花海真的很漂亮！這裡的花海真的很漂亮！這裡的花海真的很漂亮！這裡的花海真的很漂亮！這裡的花海真的很漂亮！這裡的花海真的很漂亮！這裡的花海真的很漂亮！的花海真的很漂亮！這裡的花海真的很漂亮！這裡的花海真的很漂亮！這裡的花海真的很漂亮！'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  #content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: var(--content_height);
    background-color: var(--li_blue);
    overflow-y: scroll;
    div {
      margin: 3vw;
      display: flex;
      width: 85%;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--bg_blue);
    }
    #article_title {
      margin-top: 20px;
      font-size: 6vw;
      color: var(--bg_blue);
      overflow-x: scroll;
      white-space: nowrap;
    }
    img {
      margin: 3vw;
      width: 85%;
      height: 180px;
    }
    #words {
      height: 150px;
      color: #555555;
      overflow-y: scroll;
      padding: 25px 0 10px 10px;
      white-space: pre-wrap;
    }
  }
</style>
