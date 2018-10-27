<template>
  <div id="myMap" ref="myMap">
  </div>
</template>

<script>

export default {
  name: 'MapPage',
  data() {
    return {
      mm: null
    }
  },
  components: {
  },
  methods: {
    loadMapScenario: function() {
      if (typeof Microsoft.Maps.Map === undefined) {
        console.log('wow');
        return;
      }
      console.log(Microsoft.Maps.Map);
      this.mm = new Microsoft.Maps.Map(this.$refs.myMap, {});
      // debugger;
    }
  },
  mounted() {
    this.loadMapScenario();
  }
}
</script>

<style lang="scss">
  #myMap {
    height: 100vh;
  }
</style>
