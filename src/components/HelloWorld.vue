<template>
    <div class="d-none">
      <nav class="d-flex row border border-dark navbar navbar-expand-sm bg-dark navbar-dark">    
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Congress 113</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">House</a>
              <a class="dropdown-item" href="senate.html">Senate</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              Attendance</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="attendance-house.html">House</a>
              <a class="dropdown-item" href="attendance-senate.html">Senate</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              Loyalty</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="loyalty-house.html">House</a>
              <a class="dropdown-item" href="loyalty-senate.html">Senate</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
