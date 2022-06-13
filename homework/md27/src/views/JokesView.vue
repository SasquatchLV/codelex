<template>
  <div class="container">
    <div class="row mt-5 gap-2">
      <div class="col-12 mb-5">
        <h2>Jokes by category</h2>
        <div class="btn-group" role="group">
          <button
            v-for="category in categories"
            v-bind:key="category"
            type="button"
            class="btn btn-primary"
            @click="getJokesByCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
      <div class="col-2">
        <div
          class="btn-group-vertical sticky-top"
          role="group"
          aria-label="Basic example"
        >
          <button
            v-for="flag in flags"
            v-bind:key="flag"
            @click="handleFlag(flag)"
            type="button"
            class="btn btn-secondary"
          >
            {{ flag.toUpperCase() }}
          </button>
        </div>
      </div>
      <div class="col-8">
        <div class="row gap-2">
          <LoadingComp v-if="getLoading" />
          <div v-else v-for="joke in getJokeList" :key="joke.id">
            <div class="card" @click="handleClick(joke.id)">
              <div class="card-body">
                <h5 class="card-title">{{ joke.category }}</h5>
                <p v-if="joke.joke" class="card-text">{{ joke.joke }}</p>
                <p v-else class="card-text">
                  {{ joke.setup }} {{ joke.delivery }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="getReqErrorMsg">
            <div class="alert alert-danger" role="alert">
              {{ getReqErrorMsg }}
            </div>
          </div>
          <div v-if="getFlagErrorMsg">
            <div class="alert alert-danger" role="alert">
              {{ getFlagErrorMsg }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import LoadingComp from "../components/LoadingComp.vue";

export default defineComponent({
  name: "JokesView",

  components: {
    LoadingComp,
  },

  computed: {
    flags() {
      return [
        "all",
        "nsfw",
        "religious",
        "political",
        "racist",
        "sexist",
        "explicit",
      ];
    },

    categories() {
      return [
        "Programming",
        "Miscellaneous",
        "Dark",
        "Pun",
        "Spooky",
        "Christmas",
      ];
    },

    ...mapGetters("jokes", [
      "getJokeList",
      "getFlagErrorMsg",
      "getReqErrorMsg",
      "getLoading",
    ]),
  },

  methods: {
    ...mapActions("jokes", ["getJokes", "getJokesByCategory"]),
    ...mapMutations("jokes", ["setFlag"]),

    handleClick(id: number) {
      this.$router.push({
        name: "random-jokes-id",
        params: {
          id,
        },
      });
    },

    handleFlag(flag: string) {
      this.setFlag(flag);
    },
  },

  created() {
    this.getJokes();
    this.setFlag("all");
  },
});
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
}

.sticky-top {
  top: 100px;
}
</style>
