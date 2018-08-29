<style scoped>
.MAT {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>

<template>
  <div class="MAT">
    <div class="lolz">
      <el-checkbox v-model="manyRows" @change="onBigDataChange">Big data</el-checkbox>
      <el-checkbox v-model="filterable">Filtri</el-checkbox>
      <el-checkbox v-model="sortable">Sort</el-checkbox>
      <el-checkbox v-if="false" v-model="pagination.enabled">Pagination</el-checkbox>
    </div>

    <smeup-data-table-paginator
      v-if="false"
      :rows="filteredRows"
      :config="pagination"
    ></smeup-data-table-paginator>

    <table>
      <smeup-data-table-header
        :columns="columns"
        :filterable="filterable"
        :sortable="sortable"
        @sortby="onSort($event)"
      ></smeup-data-table-header>

      <smeup-data-table-body
        :columns="columns"
        :rows="filteredRows"
      ></smeup-data-table-body>
    </table>
  </div>
</template>

<script>
import SmeupDataTableHeader from "./SmeupDataTableHeader.vue";
import SmeupDataTableBody from "./SmeupDataTableBody.vue";
import SmeupDataTablePaginator from "./SmeupDataTablePaginator.vue";

import mockedData from "@/mock/dataTable";

export default {
  name: "smeup-data-table",

  components: {
    SmeupDataTableHeader,
    SmeupDataTableBody,
    SmeupDataTablePaginator
  },

  data() {
    return {
      manyRows: false,

      filterable: false,

      sortable: false,
      sortByColumn: null,

      pagination: {
        enabled: false,
        pageSize: 5,
        currentPage: 1
      },

      columns: mockedData.dataTableCols,
      rows: mockedData.dataTableFewRows
    };
  },

  computed: {
    filteredRows() {
      const filteredRows = this.rows.filter(r => {
        const columnsWithFilter = this.columns.filter(
          c => c.filterValue.length > 0
        );

        if (columnsWithFilter.length > 0) {
          // there is atleast a filter
          return (
            columnsWithFilter.filter(c => {
              let rowCell = r.content[c.c];

              if (rowCell) {
                return rowCell.c.includes(c.filterValue);
              } else {
                return false;
              }
            }).length == columnsWithFilter.length
          );
        }

        return true;
      });

      // check sorting
      if (this.sortByColumn) {
        return filteredRows.sort((r1, r2) => {
          const val1 = r1.content[this.sortByColumn].c;
          const val2 = r2.content[this.sortByColumn].c;

          // check if ascending or descending sort
          const sortMode = this.columns.filter(
            c => c.c === this.sortByColumn
          )[0].sortMode;

          const compare = val1.localeCompare(val2);

          return sortMode === "A" ? compare : compare * -1;
        });
      }

      // check pagination
      if (this.pagination.enabled) {
        const start =
          (1 * this.pagination.pageSize - this.pagination.pageSize) *
          this.pagination.currentPage;
        const end = this.pagination.pageSize * this.pagination.currentPage;

        console.log("start", start);
        console.log("end", end);

        return filteredRows.splice(start, end);
      }

      return filteredRows;
    }
  },

  methods: {
    onBigDataChange() {
      this.sortByColumn = null;

      if (this.manyRows) {
        this.columns = mockedData.dataTableManyCols;
        this.rows = mockedData.dataTableManyRows;
      } else {
        this.columns = mockedData.dataTableCols;
        this.rows = mockedData.dataTableFewRows;
      }
    },

    onSort($event) {
      this.sortByColumn = $event.c;
    }
  }
};
</script>
