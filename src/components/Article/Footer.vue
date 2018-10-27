<template>
  <div id="footer-wrapper">
    <img src="@/assets/img/svg/node_data/garbage.svg" alt="back" />
    <img src="@/assets/img/svg/node_data/add.svg" alt="back" />
    <img src="@/assets/img/svg/node_data/pen.svg" alt="back" />
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  #footer-wrapper {
    width: 100vw;
    height: var(--footer_height);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--bg_blue);
    img {
      height: 70%;
    }
  }
</style>
