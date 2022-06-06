<template>
  <div class="toast-container">
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
        <small>{{ timeBeforeAdded(animal.created) }}</small>
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
    timeBeforeAdded(time: number) {
      const now = new Date().getTime();
      const diff = now - time;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor(diff / 1000 / 60);
      return days > 0
        ? `${days} days ago`
        : hours > 0
        ? `${hours} hours ago`
        : `${mins} mins ago`;
    },
  },
});
</script>

<style lang="scss"></style>
