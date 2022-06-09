import axios from "axios";
import { Commit, Dispatch } from "vuex";

type JokeType = {
  category: string;
  type: string;
  joke?: string;
  flags: {
    [key: string]: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
  message: string;
  setup?: string;
  delivery?: string;
};

export const moduleJokes = {
  namespaced: true,
  state: () => ({
    jokes: [] as JokeType[],
    singleJoke: {} as JokeType,
    reqErrorMsg: "" as string,
    flagErrorMsg: "" as string,
    flag: "all" as string,
    loading: false as boolean,
  }),
  actions: {
    getJokes({ commit, dispatch }: { commit: Commit; dispatch: Dispatch }) {
      commit("setLoading", true);
      axios
        .get("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10")
        .then(({ data }) => {
          dispatch("prepareJokesForCommiting", data);
        });
    },

    getJokesByCategory(
      { commit, dispatch }: { commit: Commit; dispatch: Dispatch },
      category: string
    ) {
      commit("setLoading", true);
      axios
        .get(`https://v2.jokeapi.dev/joke/${category}?amount=10`)
        .then(({ data }) => {
          dispatch("prepareJokesForCommiting", data);
        });
    },

    prepareJokesForCommiting({ commit }: { commit: Commit }, data: any) {
      console.log(data);
      let { jokes } = data;
      let errorMsg = "";
      const { error, message } = data;

      if (error) {
        errorMsg = message;
        jokes = [];
      } else {
        commit("setFlag", "all");
      }

      commit("setReqErrorMsg", errorMsg);
      commit("setJokes", jokes);
      commit("setLoading", false);
    },

    getSingleJoke({ commit }: { commit: Commit }, id: number) {
      commit("setLoading", true);
      axios.get(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`).then((res) => {
        if (res.data.error === true) {
          commit("setReqErrorMsg", res.data.message);
          commit("setSingleJoke", {});
          commit("setLoading", false);
          return;
        }

        commit("setFlag", "all");
        commit("setReqErrorMsg", "");
        commit("setSingleJoke", res.data);
        commit("setLoading", false);
      });
    },
  },

  mutations: {
    setJokes(state: { jokes: JokeType[] }, jokes: JokeType[]) {
      state.jokes = jokes;
    },
    setSingleJoke(state: { singleJoke: JokeType }, singleJoke: JokeType) {
      state.singleJoke = singleJoke;
    },
    setReqErrorMsg(state: { reqErrorMsg: string }, reqErrorMsg: string) {
      state.reqErrorMsg = reqErrorMsg;
    },
    setFlagErrorMsg(state: { flagErrorMsg: string }, flagErrorMsg: string) {
      state.flagErrorMsg = flagErrorMsg;
    },
    setFlag(state: { flag: string; flagErrorMsg: string }, flag: string) {
      if (flag === "all") {
        state.flagErrorMsg = "";
      }
      state.flag = flag;
    },
    setLoading(state: { loading: boolean }, loading: boolean) {
      state.loading = loading;
    },
  },
  getters: {
    getJokeList(state: {
      flag: string;
      jokes: JokeType[];
      flagErrorMsg: string;
    }) {
      if (state.flag === "all") {
        return state.jokes;
      } else if (
        state.jokes.filter((joke) => joke.flags[state.flag]).length === 0
      ) {
        state.flagErrorMsg = `No jokes found by the ${state.flag.toUpperCase()} attribute`;
        return;
      } else {
        state.flagErrorMsg = "";
        return state.jokes.filter((joke) => joke.flags[state.flag]);
      }
    },
    getJokeSingle(state: { singleJoke: JokeType }) {
      return state.singleJoke;
    },
    getFlagErrorMsg(state: { flagErrorMsg: string }) {
      return state.flagErrorMsg;
    },
    getReqErrorMsg(state: { reqErrorMsg: string }) {
      return state.reqErrorMsg;
    },
    getLoading(state: { loading: boolean }) {
      return state.loading;
    },
  },
};
