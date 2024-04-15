<template>
  <div>
    <h3>home</h3>
    <button @click="Jia">+1</button>
  </div>
</template>

<script  setup>
import { jia } from "./index";
const Jia = () => {
  jia();
};
</script>

<style scoped>
#three {
  height: 400px;
  /* width: 1000px;
  height: 1000px; */
  /* background: red; */
  /* position: fixed;
  left: 0;
  top: 0; */
}
</style>
