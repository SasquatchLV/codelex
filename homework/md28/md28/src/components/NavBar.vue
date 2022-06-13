<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg transperancy">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand" href="#">Navbar</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/people" class="nav-link">People</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/films" class="nav-link">Films</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/planets" class="nav-link">Planets</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.transperancy {
  background-color: white;
  opacity: 0.6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
