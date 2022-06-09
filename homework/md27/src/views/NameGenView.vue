<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col">
        <h2>List of professional coders</h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody v-for="name in getNames" v-bind:key="name">
            <tr>
              <th scope="row">{{ name.id }}</th>
              <td>{{ name.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <div class="current-name">
          <h2>Current name:</h2>
          <h3>{{ getCurrentName.name }}</h3>
          <div>
            <button
              v-if="getNames.length !== 0"
              type="button"
              class="btn btn-secondary"
              @click="getRandomName"
            >
              Get random name
            </button>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-secondary"
              @click="getAllNames"
            >
              Reset name list
            </button>
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

  methods: {
    ...mapActions("names", ["getAllNames", "getRandomName"]),
  },

  computed: {
    ...mapGetters("names", ["getNames", "getCurrentName"]),
  },

  created() {
    this.getAllNames();
  },
});
</script>

<style lang="scss">
.current-name {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
