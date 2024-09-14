<template>
  <div class="home">
    <!-- <LightMap /> -->
     <a href="esg">Esg</a>
     <a href="map">Map</a>
     <a href="senkon">Senkon</a>
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
<style scoped>
.home{
  height: 100vh;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
a{
  font-size: 2rem;
  padding:1rem;
}
</style>
