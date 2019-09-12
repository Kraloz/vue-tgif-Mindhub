<template>
  <div>
    <h4 class="text-muted">{{ title }}</h4>
    <table class="table">
      <thead>
        <tr class="align-items-center">
          <th scope="col">Name</th>
          <th scope="col">{{ tableHeadData }}</th>
          <th scope="col">% {{ tableHeadPct }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(member, index) in stats.members"
          :key="index">
          <td>{{`${member.first_name} ${member.middle_name || ''} ${member.last_name}`}}</td>
          <td>{{}}</td>
          <td>{{}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PartyTopTable',
  props: {
    title: String,
    tableHeadData: String,
    tableHeadPct: String,
    stats: Object,
    leasOrMost: String
  }
}
</script>