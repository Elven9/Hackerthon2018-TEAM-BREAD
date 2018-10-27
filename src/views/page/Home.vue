<template>
  <div class="home">
    <div ref="myMap" id='myMap' style='width: 100vw; height: 100vh;'></div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  mounted() {
    new Microsoft.Maps.Map(this.$refs.myMap, {});
  }
}
</script>

<style lang="scss">
</style>
