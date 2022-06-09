import axios from "axios";
import { Commit } from "vuex";

type NameType = {
  id: number;
  name: string;
};

export const moduleNames = {
  namespaced: true,
  state: () => ({
    names: [] as NameType[],
    currentName: {} as NameType,
  }),
  actions: {
    async getAllNames({ commit }: { commit: Commit }) {
      await axios.get("http://localhost:3000/names").then((res) => {
        commit("setCurrentName", {});
        commit("setNames", res.data);
      });
    },
    getRandomName({
      commit,
      state,
    }: {
      commit: Commit;
      state: { names: NameType[] };
    }) {
      const randomName =
        state.names[Math.floor(Math.random() * state.names.length)];
      commit("setCurrentName", randomName);
      commit("removeName", randomName);
    },
  },
  mutations: {
    setNames(state: { names: NameType[] }, names: NameType[]) {
      state.names = names;
    },
    setCurrentName(state: { currentName: NameType }, name: NameType) {
      state.currentName = name;
    },
    removeName(state: { names: NameType[] }, name: NameType) {
      state.names = state.names.filter((n) => n.id !== name.id);
    },
  },
  getters: {
    getNames(state: { names: NameType[] }) {
      return state.names;
    },
    getCurrentName(state: { currentName: NameType }) {
      return state.currentName;
    },
  },
};
