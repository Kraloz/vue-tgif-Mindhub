<template>
  <div>
    <div class="row mt-4 table-filters justify-content-between">
        <div class="col-9 d-flex">
          <label>Filter By Party:</label>
          <label>
            <input type="checkbox" name="party"  value="R">
            Republican
          </label>
          <label>
            <input type="checkbox" name="party" value="D">
            Democrat
          </label>
          <label>
            <input type="checkbox" name="party" value="I">
            Independent
          </label>
        </div>
        <div class="col-3">
          <label>Filter By State:
            <select id="states">
                <option value="">All</option>
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
              <template>
                <tr>
                  <td>
                    <a href="url">Nombre</a>
                  </td>
                  <td>Party</td>
                  <td>State</td>
                  <td>Seniority</td>
                  <td>votes %</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'PartyIntroTable'
}
</script>
