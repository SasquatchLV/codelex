<template>
  <form @submit.prevent @submit="handleChange">
    <input type="text" placeholder="Change color" v-model="inputValue" />
    <button type="submit">Change color</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThirdComp",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleChange() {
      this.$emit("inputValue", this.inputValue);
      this.inputValue = "";
    },
  },
});
</script>

<style lang="scss"></style>
