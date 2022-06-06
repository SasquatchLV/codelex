<template>
  <form @submit.prevent @submit="submitHandler">
    <input type="text" placeholder="Update title..." v-model="inputValue" />
    <button type="submit">Change</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FirstComp",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    submitHandler() {
      this.$emit("changeTitleFirst", this.inputValue);
      this.inputValue = "";
    },
  },
});
</script>

<style lang="scss"></style>
