<template>
  
</template>

<script>
export default {
  created () {
    if(!this.$store.getters.membersLength) {
      this.$store.dispatch('fetchMembers')
    }
  }
}
</script>

<style>

</style>