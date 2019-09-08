<template>
  <div id="app">
    <Loader/>
    <Header/>
    <router-view :key="$route.fullPath"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'
export default {
  components: {
    Header,
    Footer,
    Loader
  }
}
</script>
  
<style>
  @import './assets/css/bg.css';
  @import './assets/css/styles.css';
</style>
