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
  data() {
    return {
      inputValue: "",
      selectValue: "",
      id: uuidv4(),
    };
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
