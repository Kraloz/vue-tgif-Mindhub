<template>
  <header>
    <div class="container">
      <div class="d-flex my-1 justify-content-between align-items-center">
        <h2>TGIF Logo</h2>
        <span class="bg-white p-1 rounded">
            <a href="mailto:info@tgif.net">info@tgif.net</a>
        </span>
      </div>
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>