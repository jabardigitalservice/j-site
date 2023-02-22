<template>
  <div class="relative" :style="style">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
