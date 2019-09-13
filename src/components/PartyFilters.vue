<template>
  <div id="table-filters" class="btn-group btn-group-toggle" data-toggle="buttons">

    <label class="btn btn-secondary" @click="changeParty('d')" >
      <input type="radio" name="options" id="option1" /> Democrats
    </label>
    <label class="btn btn-secondary" @click="changeParty('r')" >
      <input type="radio" name="options" id="option2" /> Republicans
    </label>
    <label class="btn btn-secondary" @click="changeParty('i')" >
      <input type="radio" name="options" id="option3" /> Independents
    </label>
  </div>
</template>

<script>
export default {
  name: 'PartyFilters',
  methods: {
    changeParty(party) {
      this.$emit('changedParty', party)
    }
  }
}
// TODO: emit to parent
</script>