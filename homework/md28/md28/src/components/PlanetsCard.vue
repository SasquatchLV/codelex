<script setup lang="ts">
defineProps(["planet"]);
const emit = defineEmits(["clicked"]);
</script>

<template>
  <div class="col-md-4 mb-4">
    <div @click="emit('clicked', planet.url)" class="card">
      <div class="bg-overlay"></div>
      <div class="card-body">
        <h5 class="card-title">{{ planet.name }}</h5>
        <p class="card-text">
          <i>Terrain: {{ planet.terrain }}</i>
        </p>
        <p class="card-text">Population: {{ planet.population }}</p>
      </div>
    </div>
  </div>
</template>
