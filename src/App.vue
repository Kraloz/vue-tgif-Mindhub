<template>
  <div id="app">
    <loader/>
    <the-header/>
    <router-view :key="$route.fullPath"/>
    <the-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Loader from '@/components/Loader.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    Loader
  }
}
</script>
<style>
  @import './assets/css/bg.css';
  @import './assets/css/styles.css';
</style>
