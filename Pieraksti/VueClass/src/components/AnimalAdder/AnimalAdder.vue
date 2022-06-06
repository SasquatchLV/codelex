<template>
  <div class="mb-3 mt-3">
    <form @submit.prevent="submitHandler">
      <div class="row justify-content-center align-items-center">
        <div class="col-5">
          <div class="form-floating form-floating-sm">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Add animal"
              v-model="inputValue"
              minlength="3"
              required
            />
            <label for="floatingInput">Animal name</label>
          </div>
        </div>
        <div class="col-5">
          <div class="form-floating">
            <select class="form-select" v-model="selectValue" required>
              <option value="" selected disabled>Choose a type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
            <label for="floatingSelectGrid">Animal type</label>
          </div>
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-primary fs-3">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  name: "AnimalAdder",
  emits: ["animalInfo"],
  data: () => (
    console.log("* child data is initialised"),
    {
      inputValue: "",
      selectValue: "",
      id: uuidv4(),
    }
  ),
  beforeCreate() {
    console.log("* child beforeCreate");
  },
  created() {
    console.log("* child created");
  },
  beforeMount() {
    console.log("* child beforeMount");
  },
  mounted() {
    console.log("* child mounted");
  },
  beforeUpdate() {
    console.log("* child beforeUpdate");
  },
  updated() {
    console.log("* child updated");
  },
  beforeUnmount() {
    console.log("* child beforeUnmount");
  },
  unmounted() {
    console.log("* child unmounted");
  },

  methods: {
    submitHandler() {
      this.$emit("animalInfo", this.id, this.inputValue, this.selectValue);
      this.inputValue = "";
      this.selectValue = "";
      this.id = uuidv4();
    },
  },
});
</script>

<style></style>
