<template>
  <input
    type="text"
    placeholder="Change color"
    v-model="inputValue"
    v-on:input="handleChange"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FourthComp",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleChange() {
      this.$emit("inputValue", this.inputValue);
    },
  },
});
</script>

<style lang="scss"></style>
