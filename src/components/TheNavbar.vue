<template>
  <nav class="d-flex row border border-dark navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Congress 113</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/house">House</router-link>
              <router-link class="dropdown-item" to="/senate">Senate</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              Attendance</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/attendance/house">House</router-link>
              <router-link class="dropdown-item" to="/attendance/senate">Senate</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              Loyalty</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/loyalty/house">House</router-link>
              <router-link class="dropdown-item" to="/loyalty/senate">Senate</router-link>
            </div>
          </li>
        </ul>
      </nav>
</template>

<script>
export default {
  name: 'TheNavBar'
}
</script>

<style>

</style>