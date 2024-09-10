<template>
  <div>
    home1
    <Com></Com>
  </div>
</template>

<script setup>
import Com from "./Com.vue";
import { ref, reactive, onMounted } from "vue";

/**
 * 路由对象
 */

onMounted(() => {});
</script>
<style lang="less" scoped>
:deep(.h1) {
  color: aqua;
}
</style>
