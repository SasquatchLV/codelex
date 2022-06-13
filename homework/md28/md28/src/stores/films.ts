import { defineStore } from "pinia";
import axios from "axios";

type FilmsType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export const useFilmsStore = defineStore({
  id: "films",
  state: () => ({
    films: [] as FilmsType[],
    filter: {
      type: "By episode id" || "By release date",
      value: "ascending" || "descending",
    },
    loading: false,
  }),
  getters: {
    filteredFilms: (state) => {
      if (state.filter.type === "By episode id") {
        if (state.filter.value === "ascending") {
          return state.films.sort((a, b) => a.episode_id - b.episode_id);
        }
        return state.films.sort((a, b) => b.episode_id - a.episode_id);
      } else if (state.filter.type === "By release date") {
        if (state.filter.value === "ascending") {
          return state.films.sort((a, b) =>
            a.release_date.localeCompare(b.release_date)
          );
        }
        return state.films.sort((a, b) =>
          b.release_date.localeCompare(a.release_date)
        );
      }
    },
  },

  actions: {
    async fetchFilms() {
      this.loading = true;
      const response = await axios.get("https://swapi.dev/api/films");
      this.films = response.data.results;
      this.loading = false;
    },
  },
});
