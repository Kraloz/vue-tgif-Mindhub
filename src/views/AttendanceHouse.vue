<template>
  <main class="container my-3">
    <div class="row">
      <div class="col">
        <h2 class="mt-3">Attendance</h2>
        <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most cases, debates continue even if a majority is not present.</p>
        <p>The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating "aye" or "no" when his or her name is announced. The House reserves roll-call votes for the most formal matters, as a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device. In the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present) cast the tiebreaking vote.</p>
      </div>
      <div class="col">
        <h4 class="text-right text-muted mt-3">House at a glance</h4>
        <table id="resume-table" class="table">
          <thead>
            <tr>
              <th>Party</th>
              <th>No. of Reps</th>
              <th>% Voted w/Party</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    <hr>
    <div class="row mt-1">
      <div class="col">
        <h4 class="text-muted">Least Engaged (Bottom 10 Attendance)</h4>
        <div id="table-filters" class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option1" data-target="democrats"> Democrats
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option2" data-target="republicans"> Republicans
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option3" data-target="independents"> Independents
          </label>
        </div>
        <table id="least-engaged" class="table">
          <thead>
            <tr class="align-items-center">
              <th scope="col">Name</th>
              <th scope="col">No. Missed Votes</th>
              <th scope="col">% Missed</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div class="col">
        <h4 class="text-muted ">Most Engaged (Top 10 Attendance)</h4>
        <table id="most-engaged" class="mt-5 table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">No. of Missed Votes</th>
              <th scope="col">% Missed</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>