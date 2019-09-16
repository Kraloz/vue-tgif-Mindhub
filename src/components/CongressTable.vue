<template>
  <div>
    <div class="row mt-4 table-filters justify-content-between">
        <div class="col-9 d-flex">
          <label>Filter By Party:</label>
          <label>
            <input type="checkbox" name="party" v-model="filters.parties" value="R">
            Republican
          </label>
          <label>
            <input type="checkbox" name="party" v-model="filters.parties" value="D">
            Democrat
          </label>
          <label>
            <input type="checkbox" name="party" v-model="filters.parties" value="I">
            Independent
          </label>
        </div>
        <div class="col-3">
          <label>Filter By State:
            <select id="states" v-model="filters.state">
                <option value="">All</option>
                <option 
                v-for="(state, index) in states"
                :key="index"
                :value="state">{{ state }}</option>
            </select>
          </label>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <table id="house-data" class="table">
            <thead>
              <tr class="align-items-center">
                <th scope="col">FullName <span class="fas fa-link"></span></th>
                <th scope="col">Party</th>
                <th scope="col">State</th>
                <th scope="col">Seniority</th>
                <th scope="col">Votes</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(member,index) in members[congress]">
                <tr
                  :key="index"
                  v-if="
                    (member.state === filters.state || filters.state=='')
                    &&
                    (filters.parties.includes(member.party) || !filters.parties.length)">
                  <td><a :href="member.url">{{ `${member.first_name} ${member.middle_name || ''} ${member.last_name}` }}</a></td>
                  <td>{{member.state}}</td>
                  <td>{{ member.state }}</td>
                  <td>{{ member.seniority }}</td>
                  <td>{{ member.votes_with_party_pct }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'CongressTable',
  data() {
    return {
      filters: {
        state: '',
        parties: []
      }
    }
  },
  computed: {
    ...mapState(['members']),
    ...mapGetters(['states']),
    congress() {
      return this.$route.params.congress
    }
  }
}
</script>