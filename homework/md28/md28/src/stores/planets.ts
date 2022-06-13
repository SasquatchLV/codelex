import { defineStore } from "pinia";
import axios from "axios";

export type PlanetsType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export const usePlanetsStore = defineStore({
  id: "planets",
  state: () => ({
    planets: [] as PlanetsType[],
    planet: {} as PlanetsType,
    nextPage: "",
    loading: false,
  }),
  getters: {
    getPlanets: (state) => state.planets,
    getPlanet: (state) => state.planet,
  },
  actions: {
    async fetchPlanets() {
      this.loading = true;
      const response = await axios.get("https://swapi.dev/api/planets");
      this.planets = response.data.results;
      this.nextPage = response.data.next;

      while (this.nextPage) {
        const response = await axios.get(this.nextPage);
        this.planets = [...this.planets, ...response.data.results];
        this.nextPage = response.data.next;
      }

      this.loading = false;
    },
    async fetchSinglePlanet(id: string | string[]) {
      this.loading = true;
      const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
      this.planet = response.data;
      this.loading = false;
    },
  },
});
