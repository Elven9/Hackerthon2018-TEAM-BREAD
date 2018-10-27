<template>
  <div class="start-container">
    <p>Loading ...</p>
  </div>
</template>

<script>
// Import API

export default {
  data() {
    return {

    }
  },
  mounted() {
    window.setTimeout(() => {
        this.$router.push('/Home');
    }, 1500);
  }
}
</script>

<style lang="scss" scoped>
.start-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}
</style>


