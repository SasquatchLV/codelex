<template>
  <div class="toast-container top-50 start-50 translate-middle">
    <div
      v-for="animal in animalsView"
      :key="animal.id"
      class="toast align-items-center show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <div class="rounded me-2">{{ animal.type }}</div>
        <strong class="me-auto"> {{ animal.name }}</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="submitHandler(animal.id)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimalCard",
  emits: ["animal"],
  data() {
    return {};
  },
  props: ["animalsView"],
  methods: {
    submitHandler(id: string) {
      this.$emit("animal", id);
    },
  },
});
</script>

<style lang="scss"></style>
