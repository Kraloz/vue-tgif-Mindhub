<template>
  <div id="app">
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header: Header,
    Footer: Footer
  }
}
</script>
  
<style>
  @import './assets/css/bg.css';
  @import './assets/css/styles.css';
</style>
