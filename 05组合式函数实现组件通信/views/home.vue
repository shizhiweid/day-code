<template>
  <div>
    <h1>num:{{ num }}</h1>
    <HomeOne></HomeOne>
    <HomeTwo></HomeTwo>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { num } from "./index";
import HomeOne from "./home-one.vue";
import HomeTwo from "./home-two.vue";

const data = reactive({});
onMounted(() => {});
</script>
<style scoped lang='less'>
</style>