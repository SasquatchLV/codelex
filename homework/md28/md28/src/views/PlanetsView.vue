<script setup lang="ts">
import { usePlanetsStore } from "@/stores/planets";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import PlanetsCard from "../components/PlanetsCard.vue";

const planets = usePlanetsStore();
const router = useRouter();

function handleClick(url: string) {
  const arr = url.split("/");
  const id = arr[arr.length - 2];
  console.log(id);
  router.push({ name: "planet", params: { id } });
}

onMounted(() => {
  planets.fetchPlanets();
});
</script>

<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div v-if="planets.loading" class="d-flex align-items-center">
        <b>Loading...</b>
        <div
          class="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
      <PlanetsCard
        v-else
        v-for="planet in planets.getPlanets"
        :key="planet.name"
        :planet="planet"
        @clicked="handleClick"
      />
    </div>
  </div>
</template>
