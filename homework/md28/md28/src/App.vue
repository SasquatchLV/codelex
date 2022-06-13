<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="bg"></div>
  <NavBar />

  <RouterView />
</template>

<style lang="scss">
body {
  color: #f8f8f8;
  transition: color 0.5s, background-image 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  background-image: url("https://wallpaperaccess.com/full/1987338.jpg");
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  z-index: -1;
}

.bg-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(255 255 255 / 24%),
    rgba(255 0 150 / 39%)
  );
  border-radius: 20px;
}

.card {
  background: url("https://i.giphy.com/media/aRZ4vTsHnyW6A/giphy.webp");
  border-radius: 20px;
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
}
</style>
