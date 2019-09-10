<template>
  <main>
    <div class="container my-3">
      <div class="row">
        <div class="col">
          <h2 class="mt-3">Attendance</h2>
          <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most cases, debates continue even if a majority is not present.</p>
          <p>The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating "aye" or "no" when his or her name is announced. The House reserves roll-call votes for the most formal matters, as a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device. In the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present) cast the tiebreaking vote.</p>
        </div>
        <ResumeTable class="col"/>
      </div>
      <hr>
      <div class="col d-flex justify-content-end">
          <PartyFilters class="row"/>
      </div>
      <div class="row mt-1">
          <PartyTopTable class="col"/>
          <PartyTopTable class="col"/>
      </div>
    </div>
  </main>
</template>

<script>
import ResumeTable from '@/components/ResumeTable.vue'
import PartyTopTable from '@/components/PartyTopTable.vue'
import PartyFilters from '@/components/PartyFilters.vue'

export default {
  components: {
    ResumeTable,
    PartyTopTable,
    PartyFilters
  }
}
</script>