<template>
  <TodoList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./components/TodoList/TodoList.vue";
import "../src/styles/reset.scss";

export default defineComponent({
  name: "App",
  components: {
    TodoList,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;600&display=swap");
#app {
  font-family: "Yanone Kaffeesatz", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.5;
}
</style>
