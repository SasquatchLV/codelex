<template>
  <div class="container">
    <AnimalFilter :viewMode="viewMode" :toggleView="toggleView" />
    <AnimalAdder @animalInfo="addAnimal" />
    <AnimalCard :animalsView="animalsView" @animal="removeAnimal" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnimalAdder from "@/components/AnimalAdder/AnimalAdder.vue";
import AnimalFilter from "@/components/AnimalFilter/AnimalFilter.vue";
import AnimalCard from "@/components/AnimalCard/AnimalCard.vue";

type ViewMode = "All" | "Cats";
type AnimalType = {
  id: string;
  name: string;
  type: string;
};

export default defineComponent({
  name: "HomeView",
  components: {
    AnimalAdder,
    AnimalFilter,
    AnimalCard,
  },
  data: () => ({
    count: 10,
    viewMode: "All" as ViewMode,
    animals: [] as AnimalType[],
  }),
  created() {
    this.animals = JSON.parse(localStorage.getItem("animals") || "[]");
  },
  computed: {
    animalsView() {
      if (this.viewMode === "Cats") {
        return this.showCatsOnly;
      } else {
        return this.animals;
      }
    },
    showCatsOnly() {
      return this.animals.filter((animal) => animal.type === "Cat");
    },
  },
  methods: {
    toggleView() {
      if (this.viewMode === "All") {
        this.viewMode = "Cats";
      } else {
        this.viewMode = "All";
      }
    },
    addAnimal(animalId: string, animalName: string, animalType: string) {
      const newAnimals = [
        ...this.animals,
        { id: animalId, name: animalName, type: animalType },
      ];

      this.animals = newAnimals;
    },
    removeAnimal(id: string) {
      const newAnimals = [...this.animals];
      newAnimals.splice(
        this.animals.findIndex((animal) => animal.id === id),
        1
      );
      this.animals = newAnimals;
    },
  },
  watch: {
    animals(newAnimals) {
      localStorage.setItem("animals", JSON.stringify(newAnimals));
    },
  },
});
</script>
<style scoped lang="scss"></style>
