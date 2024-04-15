<template>
  <div>
    <h3>home1</h3>
    <button @click="Jian">-1</button>
  </div>
</template>

<script setup>
import { jian } from "./index";
const Jian = () => {
  jian();
};
</script>
<style scoped lang='less'>
</style>