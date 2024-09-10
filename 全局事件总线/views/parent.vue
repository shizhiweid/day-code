<template>
  <div>
    <h3>1.{{ data }}</h3>
    <Child :parentProps="parentProps" @parentEmit="parentEmit"></Child>
    <div>3.{{ data2 }}</div>
    <div>4.{{ store.count }}</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from "vue";
// import { useRoute, useRouter } from "vue-router";
import Child from "./child.vue";
import { userStore } from "../store/index";

//父子通信
const parentProps = ref("props父传子");
const data = ref("parent");
const parentEmit = (childData) => {
  data.value = childData;
};

// 祖孙通信
const data2 = inject("data");

//全局状态管理
const store = userStore();
onMounted(() => {});
</script>
<style scoped lang='less'>
</style>