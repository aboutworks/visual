<template>
  <div class="home">
     <!-- <a href="esg">Esg</a>
     <a href="map">Map</a>
     <a href="senkon">Senkon</a>
     <a href="park">Park</a>
     <a href="techmap">TechMap</a>
     <a href="createnew">CreateNew</a>
     <a href="createnewb">CreateNew B</a>
     <a href="keyboard">keyboard</a> -->

     <a v-for="r in routes" :href="r.path">{{ r.name }}</a>
  </div>
</template>

<script>
// @ is an alias to /src
import LightMap from '@/components/LightMap.vue'
import routes from '@/router/routes'

export default {
  name: 'HomeView',
  data (){
    return {
      routes:routes

    }
  },
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
  flex-wrap: wrap;
  align-items: center;
}
a{
  font-size: 2rem;
  padding:1rem;
}
</style>
