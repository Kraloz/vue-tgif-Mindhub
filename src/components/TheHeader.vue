<template>
  <header>
    <div class="container">
      <div class="d-flex my-1 justify-content-between align-items-center">
        <h2>TGIF Logo</h2>
        <span class="bg-white p-1 rounded">
            <a href="mailto:info@tgif.net">info@tgif.net</a>
        </span>
      </div>
      <the-navbar/>
    </div>
  </header>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'AppHeader',
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>