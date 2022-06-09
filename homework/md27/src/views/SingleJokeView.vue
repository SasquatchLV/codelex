<template>
  <div class="container">
    <div class="row mt-5 mb-5 gap-2">
      <div class="col-12">
        <div v-if="getReqErrorMsg">
          <div class="alert alert-danger" role="alert">
            {{ getReqErrorMsg }}
          </div>
        </div>
        <div v-else class="card">
          <div class="card-header">{{ getJokeSingle.category }}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-4">
              <p v-if="getJokeSingle.joke" class="card-text">
                {{ getJokeSingle.joke }}
              </p>
              <p v-else class="card-text">
                {{ getJokeSingle.setup }} {{ getJokeSingle.delivery }}
              </p>
              <footer class="blockquote-footer">
                Someone from
                <cite title="Source Title"
                  ><a href="https://jokeapi.dev/" target="_blank"
                    >Joke Api</a
                  ></cite
                >
              </footer>
            </blockquote>
            <h5 class="card-title">Flags</h5>
            <div
              v-for="(value, name) in getJokeSingle.flags"
              v-bind:key="name"
              class="card-text"
            >
              {{ name.toString().toUpperCase() }} : {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "JokesView",
  computed: {
    ...mapGetters("jokes", ["getJokeSingle", "getReqErrorMsg"]),
  },
  methods: {
    ...mapActions("jokes", ["getSingleJoke"]),
  },
  created() {
    this.getSingleJoke(this.$route.params.id);
  },
});
</script>

<style lang="scss"></style>
