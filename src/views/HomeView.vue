<template>
  <div class="home">
    <LightMap />
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
