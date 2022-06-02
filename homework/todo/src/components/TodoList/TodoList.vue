<template>
  <div class="todo-container">
    <h2>Add new task</h2>
    <div class="input-group">
      <input
        type="text"
        v-model="newTodo.text"
        @keyup.enter="addTask"
        placeholder="Enter todo..."
      />
      <button @click="addTask" class="button">Add</button>
    </div>
    <h2>Tasks</h2>
    <div v-if="todoList.length > 0" class="filter-group">
      <button
        v-for="button in filterButtons"
        @click="filterBy(button.filter)"
        v-bind:class="{ active: button.active, button: true }"
        v-bind:key="button.filter"
      >
        {{ button.text }}
      </button>
    </div>
    <div v-if="todoList.length > 0" class="todo-group">
      <div
        :key="todo"
        class="todo"
        v-for="todo in todoList"
        @click="handleChecked(todo)"
      >
        <input type="checkbox" v-bind:checked="todo.completed" />
        <span v-if="todo.completed">
          <s>{{ todo.text }}</s>
        </span>
        <span v-if="!todo.completed">{{ todo.text }}</span>
        <button @click="removeTask(todo)" class="todo__button">X</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface SingleTodo {
  id: number;
  text: string;
  completed: boolean;
}

export default defineComponent({
  name: "TodoList",
  data() {
    return {
      newTodo: {} as SingleTodo,
      todoList: JSON.parse(
        localStorage.getItem("todoList") || "[]"
      ) as SingleTodo[],
      filterButtons: [
        {
          text: "All",
          filter: "all",
          active: false,
        },
        {
          text: "In progress",
          filter: "active",
          active: false,
        },
        {
          text: "Completed",
          filter: "completed",
          active: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      const todo = {
        ...this.newTodo,
        id: Math.random(),
        completed: false,
      };
      localStorage.setItem(
        "todoList",
        JSON.stringify([...this.todoList, todo])
      );
      this.todoList = [...this.todoList, todo];
      this.newTodo.text = "";
    },
    removeTask(todo: SingleTodo) {
      this.todoList = this.todoList.filter((t) => t.id !== todo.id);
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    handleChecked(todo: SingleTodo) {
      this.todoList = this.todoList.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      );
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    filterBy(filter: string) {
      const allTodos = JSON.parse(
        localStorage.getItem("todoList") || "[]"
      ) as SingleTodo[];
      if (filter === "all") {
        this.todoList = allTodos;
        this.filterButtons.forEach((button) => {
          button.active = false;
        });
      } else if (filter === "active") {
        this.todoList = allTodos.filter((t) => !t.completed);
        this.filterButtons.map((button) => {
          if (button.filter === filter) {
            button.active = true;
          } else {
            button.active = false;
          }
        });
      } else if (filter === "completed") {
        this.todoList = allTodos.filter((t) => t.completed);
        this.filterButtons.map((button) => {
          if (button.filter === filter) {
            button.active = true;
          } else {
            button.active = false;
          }
        });
      }
    },
  },
});
</script>

<style scoped lang="scss" src="./TodoList.scss" />
