<template>
  <form @submit.prevent @submit="submitHandler">
    <input
      :value="modelValue"
      type="text"
      placeholder="Update title..."
      ref="input"
    />
    <button type="submit">Change</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FirstComp",
  props: ["modelValue"],
  emits: ["update:modelValue"],

  methods: {
    submitHandler() {
      this.$emit(
        "update:modelValue",
        (this.$refs.input as HTMLInputElement).value
      );
    },
  },
});
</script>

<style lang="scss"></style>
