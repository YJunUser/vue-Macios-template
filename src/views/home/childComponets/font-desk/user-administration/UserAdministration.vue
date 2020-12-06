<template>
  <div class="UserAdministration">
    <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%"
    >

    </el-table>
  </div>
</template>

<script>
export default {
  name: "UserAdministration",
  data() {
    return {
      //表格数据
      tableKey: 0,
      list: null,
      listLoading: true
    }
  }
}
</script>

<style scoped>

</style>
