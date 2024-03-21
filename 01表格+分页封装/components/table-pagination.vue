<template>
<!-- 表格加分页封装 -->
  <div>
    
    <el-table :data="tableData" border >
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        width="300"
        v-for="item of table"
        :key="item.prop" 
      />
    </el-table>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>


<script setup>
import { ref, reactive, onMounted, defineProps, defineEmits } from "vue";
const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  table: {
    type: Array,
    default: () => [],
  },
  total: {
    type: Number,
    default: () => 0,
  },
});
const emits = defineEmits(["pagination"]);

const currentPage = ref(1);
const pageSize = ref(10);
const small = ref(false);
const background = ref(true);
const disabled = ref(false);

const handleSizeChange = (val) => {
  emits("pagination", currentPage.value, pageSize.value);
  console.log(`${val} items per page`, pageSize.value);
};
const handleCurrentChange = (val) => {
  emits("pagination", currentPage.value, pageSize.value);
  console.log(`current page: ${val}`, currentPage.value);
};

onMounted(() => {});

const count = ref(0);
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
