import { defineStore } from "pinia";
import axios from "axios";

type PeopleType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export const usePeopleStore = defineStore({
  id: "people",
  state: () => ({
    people: [] as PeopleType[],
    nextPage: "" as string,
    loading: false,
  }),
  getters: {
    getPeople: (state) => state.people,
  },
  actions: {
    async fetchPeople() {
      this.loading = true;
      const response = await axios.get("https://swapi.dev/api/people");
      this.people = response.data.results;
      this.nextPage = response.data.next;

      while (this.nextPage) {
        const response = await axios.get(this.nextPage);
        this.people = [...this.people, ...response.data.results];
        this.nextPage = response.data.next;
      }
      this.loading = false;
    },

    async fetchByName(name: string) {
      if (!name) {
        this.fetchPeople();
        return;
      }

      this.loading = true;
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${name}`
      );
      this.people = response.data.results;
      this.nextPage = response.data.next;
      this.loading = false;
    },
  },
});
