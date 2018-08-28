<template>
  <div>
    <el-checkbox v-model="sortEnabled">Abilita sorting</el-checkbox>
    <el-checkbox v-model="stripeEnabled">Abilita stripe righe</el-checkbox>
    <el-checkbox v-model="borderEnabled">Abilita bordi</el-checkbox>
    <el-checkbox v-model="multiSelectionEnabled">Abilita multiselezione</el-checkbox>

    <div class="data-table-container">
      <el-table
        :data="tableData"
        :border="borderEnabled"
        :stripe="stripeEnabled"
        style="width: 100%">

        <el-table-column
          v-if="multiSelectionEnabled"
          type="selection"
          width="55"
        ></el-table-column>

        <el-table-column
          v-for="column in columns"
          :key="column"
          :prop="column"
          :label="column"
          :sortable="sortEnabled"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import mockedRows from "@/mock/dataTable";

export default {
  name: "big-data-table",

  data() {
    return {
      borderEnabled: false,
      sortEnabled: false,
      stripeEnabled: true,
      multiSelectionEnabled: false,
      columns: mockedRows.columns,
      tableData: mockedRows.rows,
    };
  }
};
</script>

<style scoped>
.data-table-container {
  margin-top: 1rem;
}
</style>

