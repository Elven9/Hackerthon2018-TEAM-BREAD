<template>
  <div id="map">
    map
  </div>
</template>

<script>

export default {
  name: 'map',
  data() {
    return {
      map: null
    }
  },
  components: {
  },
  methods: {
    loadMapScenario() {
        this.map = new Microsoft.Maps.Map(document.getElementById('map'), {});
    }
  },
  mounted() {
    this.loadMapScenario();
  }
}
</script>

<style lang="scss">
  #map {
    height: 100vh;
  }
</style>
