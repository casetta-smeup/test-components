<style scoped>
.MAT {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.scrollable-header {
  overflow: hidden;
}

.scroll-radio {
  margin-top: 1rem;
}
</style>

<template>
  <div class="MAT">
    <div class="lolz">
      <el-checkbox v-model="manyRows" @change="onBigDataChange">Big data</el-checkbox>
      <el-checkbox v-model="filterable">Filtri</el-checkbox>
      <el-checkbox v-model="sortable">Sort</el-checkbox>
      <el-checkbox v-if="false" v-model="pagination.enabled">Pagination</el-checkbox>

      <div class="scroll-radio">
        <el-radio-group v-model="scroll.scrollMode" @change="onScrollModeChange" class="scroll-radio">
          <el-radio :label="0">Nessuno</el-radio>
          <el-radio :label="1">Verticale</el-radio>
          <el-radio :label="2">Orizzontale</el-radio>
        </el-radio-group>
      </div>
    </div>

    <smeup-data-table-paginator
      v-if="false"
      :rows="filteredRows"
      :config="pagination"
    ></smeup-data-table-paginator>


    <div
      class="scroll-table-wrapper"
      v-if="scroll.enabled"
      :style="scrollTableWrapperStyle"
    >
      <scrollable-header
        :scrollConfig="scroll"
        :columns="columns"
        :filterable="filterable"
        :sortable="sortable"
      ></scrollable-header>

      <scrollable-body
        :scrollConfig="scroll"
        :columns="columns"
        :rows="filteredRows"
        :filterable="filterable"
        :sortable="sortable"
        @scroll="onBodyScroll"
      ></scrollable-body>
    </div>

    <table v-if="!scroll.enabled">
      <smeup-data-table-header
        :columns="columns"
        :filterable="filterable"
        :sortable="sortable"
        :scroll="scroll"
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
import ScrollableHeader from "./scrollable/ScrollableHeader.vue";
import ScrollableBody from "./scrollable/ScrollableBody.vue";

import mockedData from "@/mock/dataTable";

export default {
  name: "smeup-data-table",

  components: {
    SmeupDataTableHeader,
    SmeupDataTableBody,
    SmeupDataTablePaginator,
    ScrollableHeader,
    ScrollableBody
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

      scroll: {
        enabled: false,
        scrollMode: 0,
        scrollWidth: null,
        scrollHeight: null,
        columnsWidth: [],
        scrollLeft: 0
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

        // console.log("start", start);
        // console.log("end", end);

        return filteredRows.splice(start, end);
      }

      return filteredRows;
    },

    scrollTableWrapperStyle() {
      const obj = {};

      if (this.scroll.enabled && this.scroll.scrollWidth) {
        obj.width = this.scroll.scrollWidth + "px";
      }

      return obj;
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

    onBodyScroll($event) {
      this.scroll.scrollLeft = $event;
    },

    onScrollModeChange() {
      // resetting options
      this.scroll.enabled = false;
      this.scroll.scrollWidth = null;
      this.scroll.scrollHeight = null;
      this.scroll.columnsWidth = [];
      this.scroll.scrollLeft = 0;

      // resetting columns width
      this.columns.forEach(c => (c.width = "auto"));

      switch (this.scroll.scrollMode) {
        case 1:
          this.scroll.enabled = true;
          this.scroll.scrollHeight = 150;
          break;

        case 2:
          this.scroll.enabled = true;
          this.scroll.scrollWidth = 500;
          this.columns.forEach(c => (c.width = "200px"));
          // this.columns.forEach(c => console.log(c.width));
          break;

        default:
          break;
      }
    },

    onSort($event) {
      this.sortByColumn = $event.c;
    }
  }
};
</script>
