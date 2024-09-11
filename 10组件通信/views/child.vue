<template>
  <div>2.{{ parentProps }}</div>
  <button @click="cli">子==>父</button>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps, defineEmits } from "vue";
const props = defineProps(["parentProps"]);
const emit = defineEmits(["parentEmit"]);
const data = reactive({});
const cli = () => {
  emit("parentEmit", "emit子传父");
};
onMounted(() => {});
</script>
<style scoped lang='less'>
</style>