<template>
  <div>
    <TablePagination
      :tableData="tableData"
      :table="table"
      :total="total"
      @pagination="pagination"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import TablePagination from "../components/table-pagination.vue";

const total = ref(0);
// 表格的prop和label属性
const table = [
  { label: "时间", prop: "date" },
  { label: "姓名", prop: "name" },
  { label: "地址", prop: "address" },
];

// 初始化分页状态
const paginationData = {
  current: 1,
  page: 10,
};
// 当前页数据
const tableData = ref([]);

/**
 * 获取分页中currentPage和pageSize
 */
const pagination = (currentPage, pageSize) => {
  paginationData.current = currentPage;
  paginationData.page = pageSize;
  console.log(paginationData);
  serveData();
};
// ----------------------------------------
// 模拟数据库总数据条数
const dataList = Array.from({ length: 50 }, (_, index) => ({
  date: `197${index + 1}`,
  name: `Tom${index + 1}`,
  address: "河南",
}));
// 模拟获取接口数据
const serveData = () => {
  total.value = dataList.length; //数据量
  //当前页数据
  tableData.value = dataList.slice(
    (paginationData.current - 1) * paginationData.page,
    (paginationData.current - 1) * paginationData.page + paginationData.page
  );
};
onMounted(() => {
  serveData();
});
</script>
<style scoped lang='less'>
</style>