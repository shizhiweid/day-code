<template>
  <Parent></Parent>
  <button @click="cli">provide动态</button>
</template>

<script  setup>
import Parent from "./views/parent.vue";
import { ref, provide } from "vue";
const pro = ref("provide-inject祖==>孙");
provide("data", pro);
const cli = () => {
  pro.value = "修改";
};
</script>
