<template>
  <main>
    <div class="container my-3">
      <div class="row">
        <div class="col">
          <h2 class="mt-3">Congressmen</h2>
          <p>The major power of the House is to pass federal legislation that affects the entire country, although its
            bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law
            (unless both the House and Senate re-pass the legislation with a two-thirds majority in each chamber).
            The House has some exclusive powers: the power to initiate revenue bills, to impeach officials
            (impeached officials are subsequently tried in the Senate), and to elect the U.S. President in case there
            is no majority in the Electoral College.</p>
          <p>Each U.S. state is represented in the House in proportion to its population as measured in the census, but
            every state is entitled to at least one representative. </p>
        </div>
      </div>
      <congress-table/>
    </div>
  </main>
</template>

<script>
import CongressTable from '@/components/CongressTable.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Congress',
  components: {
    CongressTable
  },
  methods: {
    ...mapActions(['fetchMembers'])
  },
  computed: {
    ...mapGetters(['membersSize']),
    congress() {
      return this.$route.params.congress
    }
  },
  created() {
    let congress = this.$route.params.congress
    if(!this.membersSize(congress)) {
      this.fetchMembers(congress)
    }
  }
}
</script>