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
        <tr>
          <!-- ACA VAN LOS MIEMBROS -->
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
    stats: Object
  }
}
</script>