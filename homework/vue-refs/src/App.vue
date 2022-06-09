<template>
  <div class="wrapper">
    <h1>{{ titleFirst }}</h1>
    <FirstComp v-model="titleFirst" />
  </div>
  <div class="wrapper">
    <h1>{{ titleSecond }}</h1>
    <SecondComp v-model:title="titleSecond" />
  </div>
  <div class="wrapper">
    <ThirdComp @inputValue="setFirstColor" /> <ColorBox :color="colorFirst" />
  </div>
  <div class="wrapper">
    <FourthComp @inputValue="setSecondColor" />
    <ColorBox :color="colorSecond" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FirstComp from "./components/FirstComp/FirstComp.vue";
import SecondComp from "./components/SecondComp/SecondComp.vue";
import ThirdComp from "./components/ThirdComp/ThirdComp.vue";
import FourthComp from "./components/FourthComp/FourthComp.vue";
import ColorBox from "./components/ColorBox/ColorBox.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      titleFirst: "",
      titleSecond: "",
      colorFirst: "blue",
      colorSecond: "blue",
    };
  },
  components: {
    FirstComp,
    SecondComp,
    ThirdComp,
    FourthComp,
    ColorBox,
  },
  methods: {
    setFirstColor(color: string) {
      this.colorFirst = color;
    },
    setSecondColor(color: string) {
      this.colorSecond = color;
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
}
</style>
