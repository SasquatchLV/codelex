<script setup lang="ts">
defineProps(["film"]);
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card">
      <div class="bg-overlay"></div>
      <div class="card-body">
        <h5 class="card-title">{{ film.title }}</h5>
        <p class="card-text">
          <i>{{ film.opening_crawl }}</i>
        </p>
        <p class="card-text">
          Episode ID: {{ film.episode_id }}
          <br />
          Director: {{ film.director }}cm
          <br />
          Producer: {{ film.producer }}kg
          <br />
          Release date: {{ film.release_date }}
        </p>
      </div>
    </div>
  </div>
</template>
