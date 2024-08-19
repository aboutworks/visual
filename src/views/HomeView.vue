<template>
  <div class="home">
    <!-- <LightMap /> -->
     <a href="esg">Esg</a>
     <a href="map">Map</a>
  </div>
</template>

<script>
// @ is an alias to /src
import LightMap from '@/components/LightMap.vue'

export default {
  name: 'HomeView',
  components: {
    LightMap
  }
}
</script>
