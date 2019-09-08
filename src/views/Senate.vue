<template>
  <main>
    <div class="container my-3">
      <div class="row">
        <div class="col">
          <h2 class="mt-3">Senators</h2>
          <p>First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S.
            Constitution. Each state is represented by two senators, regardless of population, who serve staggered
            six-year terms. The Senate has several exclusive powers not granted to the House, including consenting to
            treaties as a precondition to their ratification and consenting to or confirming appointments of Cabinet
            secretaries, federal judges, other federal executive officials, military officers, regulatory officials,
            ambassadors, and other federal uniformed officers, as well as trial of federal officials impeached
            by the House.
          </p>
        </div>
      </div>
      <PartyIntroTable/>
    </div>
  </main>
</template>

<script>
import PartyIntroTable from '@/components/PartyIntroTable.vue'
export default {
  components: {
    PartyIntroTable
  },
  created() {
    if(!this.$store.getters.membersLength){
      this.$store.dispatch('fetchMembers')
    }
  }
}
</script>