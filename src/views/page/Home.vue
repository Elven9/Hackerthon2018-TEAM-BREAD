<template>
  <div class="home">
    <div ref="myMap" id='myMap' style='width: 100vw; height: 100vh;'></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  mounted() {
    new Microsoft.Maps.Map(this.$refs.myMap, {});
  }
}
</script>
