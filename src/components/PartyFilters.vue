<template>
  <div id="table-filters" class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option1" data-target="democrats" /> Democrats
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option2" data-target="republicans" /> Republicans
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option3" data-target="independents" /> Independents
    </label>
  </div>
</template>

<script>
export default {
  name: 'PartyFilters'
}
</script>