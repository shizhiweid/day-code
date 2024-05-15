<template>
  <div>
    插槽内部：
    <slot></slot>
    <slot name="name"></slot>
    <slot name="slot3" :text="text1" :count="count1"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script setup>
const text1 = "我是作用域";
const count1 = 2;
</script>

<style lang="scss" scoped>
</style>