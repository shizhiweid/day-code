<template>
  <div>
    <h3>插槽使用</h3>
    <Slot>
      <div>1.默认插槽</div>
      <template #name>
        <div>2.具名插槽</div>
      </template>

      <template #slot3="{ text, count }">
        <div>3.作用域插槽-{{ text }}-{{ count }}</div>
      </template>
      
      <template #[name]> 
        <div>
          4.动态插槽
        </div>
      </template>
    </Slot>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import Slot from "../components/slot.vue";
const name="bottom"
</script>
<style scoped lang='less'></style>