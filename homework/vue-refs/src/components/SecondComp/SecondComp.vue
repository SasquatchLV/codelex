<template>
  <input type="text" placeholder="Update title..." v-model="value123" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondComp",
  props: ["title"],
  emits: ["update:title"],
  computed: {
    value123: {
      get() {
        return this.title;
      },
      set(value: string) {
        this.$emit("update:title", value);
      },
    },
  },
});
</script>

<style lang="scss"></style>
