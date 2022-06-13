<script setup lang="ts">
import { useFilmsStore } from "@/stores/films";
import { onMounted } from "vue";
import FilmsCard from "../components/FilmsCard.vue";

const films = useFilmsStore();

onMounted(() => {
  films.fetchFilms();
});
</script>

<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-2">
        <select class="form-select" v-model="films.filter.type">
          <option value="By episode id">By episode id</option>
          <option value="By release date">By release date</option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-select" v-model="films.filter.value">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div v-if="films.loading" class="d-flex align-items-center">
        <b>Loading...</b>
        <div
          class="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
      <FilmsCard
        v-for="film in films.filteredFilms"
        :key="film.title"
        :film="film"
      />
    </div>
  </div>
</template>
