<template>
  <div class="color-box" ref="colorBox"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ColorBox",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    color: {
      type: String,
      default: "blue",
    },
  },
  methods: {
    changeBoxColor() {
      const ref = this.$refs.colorBox as HTMLDivElement;
      ref.style.backgroundColor = this.color;
    },
  },
  watch: {
    color() {
      this.changeBoxColor();
    },
  },
});
</script>

<style scoped lang="scss">
.color-box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
