<script setup lang="ts">
import { usePlanetsStore } from "@/stores/planets";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import type { PlanetsType } from "@/stores/planets";

const planets = usePlanetsStore();
const route = useRoute();

function drawPlanet(planetObj: PlanetsType) {
  const parent = document.querySelector(".single-planet");
  if (parent) {
    const planetEl = document.createElement("div");
    const width = parseInt(planetObj.diameter, 10) / 50;
    const height = parseInt(planetObj.diameter, 10) / 50;
    const population = parseInt(planetObj.population, 10) / 1000000;
    const terrainColors = {
      desert: "#FFD700",
      forest: "#228B22",
      caves: "#8B0000",
      ice: "#00FFFF",
      jungle: "#006400",
      mountains: "#FFA500",
      ocean: "#000080",
      plains: "#FFFF00",
      swamp: "#8B0000",
      tundra: "#808080",
      glaciers: "#00FFFF",
      grasslands: "#228B22",
      rock: "#53125B",
    };

    const getTerrainColor = (terrain: string) => {
      if (Object.keys(terrainColors).includes(terrain.split(",")[0])) {
        return Object.values(terrainColors)[
          Object.keys(terrainColors).indexOf(terrain.split(",")[0])
        ];
      } else {
        return "#000000";
      }
    };
    planetEl.style.width = `${width}px`;
    planetEl.style.height = `${height}px`;
    planetEl.style.backgroundColor = `${getTerrainColor(planetObj.terrain)}`;
    planetEl.style.borderRadius = "50%";
    planetEl.style.position = "relative";
    planetEl.style.overflow = "hidden";

    for (let i = 0; i < population; i++) {
      const star = document.createElement("div");
      star.style.width = "1px";
      star.style.height = "1px";
      star.style.backgroundColor = "#FFFFFF";
      star.style.borderRadius = "50%";
      star.style.position = "absolute";
      star.style.top = `${Math.random() * height}px`;
      star.style.left = `${Math.random() * width}px`;
      planetEl.appendChild(star);
    }

    parent.appendChild(planetEl);
  }
}

onMounted(() => {
  planets.fetchSinglePlanet(route.params.id);
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
      <div v-else class="col-6">
        <div class="card">
          <div class="bg-overlay"></div>
          <div class="card-body">
            <h5 class="card-title">{{ planets.getPlanet.name }}</h5>
            <p class="card-text">
              <i>Terrain: {{ planets.getPlanet.terrain }}</i>
            </p>
            <p class="card-text">
              Population: {{ planets.getPlanet.population }}
            </p>
            <p class="card-text">
              Rotation period: {{ planets.getPlanet.rotation_period }}
            </p>
            <p class="card-text">
              Orbital period: {{ planets.getPlanet.orbital_period }}
            </p>
            <p class="card-text">Diameter: {{ planets.getPlanet.diameter }}</p>
          </div>
        </div>
      </div>
      <div class="col-6 single-planet">
        <button @click="drawPlanet(planets.getPlanet)">Draw planet</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  &:hover {
    cursor: default;
    transform: none;
  }
}
</style>
