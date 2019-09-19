<template>
  <div id="app">
    <Navbar/>
    <div class="container mx-auto mt-10">
       <router-view />
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: { Navbar},
  methods: {},
  mounted() {
    this.$store.dispatch('initCard')
  }
}
</script>

<style lang="scss">

</style>
