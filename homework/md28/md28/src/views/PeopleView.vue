<script setup lang="ts">
import { usePeopleStore } from "@/stores/people";
import { onMounted, ref } from "vue";
import PersonCard from "../components/PersonCard.vue";

const people = usePeopleStore();
const inputValue = ref("");

onMounted(() => {
  people.fetchPeople();
});
</script>

<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <form
        class="d-flex"
        role="search"
        @submit.prevent="people.fetchByName(inputValue)"
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="inputValue"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div class="row">
      <div
        v-if="people.people.length === 0 && !people.loading"
        class="alert alert-primary"
        role="alert"
      >
        No results found by your search criteria
      </div>
      <h2 v-if="!people.loading && people.people.length > 0">
        Found {{ people.people.length }} matches
      </h2>
      <div v-if="people.loading" class="d-flex align-items-center">
        <b>Loading...</b>
        <div
          class="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
      <PersonCard
        v-else
        v-for="person in people.getPeople"
        :key="person.name"
        :person="person"
      />
    </div>
  </div>
</template>

<style></style>
