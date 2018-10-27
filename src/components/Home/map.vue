<template>
  <div id="mtMap">
  </div>
</template>

<script>

export default {
  name: 'map',
  data() {
    return {
      map: null,
      input: ''
    }
  },
  components: {
  },
  methods: {
    GetMap() {
        map = new Microsoft.Maps.Map('#myMap', {
            center: new Microsoft.Maps.Location(39.824647, -99.524267),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 4
        });
        //Add your post map load code here.
    },
    loadMapScenario() {
        this.map = new Microsoft.Maps.Map('#myMap');
    }
  },
  mounted() {
    this.loadMapScenario();
    // this.GetMap();
  }
}
</script>

<style lang="scss">
  #myMap {
    height: 100vh;
  }
  .ms-composite {
    z-index: -1!important;
  }
  input {
    height: 10px;
  }
</style>
