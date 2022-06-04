<template>
  <div class="d-flex justify-content-end">
    <div class="form-check form-switch mt-3 mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        @click="toggleView"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        {{ viewMode === "All" ? "Show Cats" : "Show All" }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimalFilter",
  data() {
    return {};
  },
  props: ["viewMode", "toggleView"],
});
</script>

<style lang="scss"></style>
