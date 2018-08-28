<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
</style>

<template>
  <div class="MAT">
    <div class="lolz">
      <el-checkbox v-model="filterable">Filtri</el-checkbox>
      <el-checkbox v-model="sortable">Sort</el-checkbox>
    </div>

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

export default {
  name: "smeup-data-table",

  components: {
    SmeupDataTableHeader,
    SmeupDataTableBody
  },

  data() {
    return {
      filterable: false,
      sortable: false,
      sortByColumn: null,

      columns: [
        {
          c: "STR001",
          d: "NR",
          p: "",
          t: "NR",
          filterValue: "",
          sortMode: "D"
        },
        {
          c: "STR002",
          d: "NR",
          p: "",
          t: "NR",
          filterValue: "",
          sortMode: "D"
        },
        {
          c: "STR003",
          d: "NR neg.(-n)",
          p: "",
          t: "NR",
          filterValue: "",
          sortMode: "D"
        },
        {
          c: "STR004",
          d: "NR neg.(n-)",
          p: "",
          t: "NR",
          filterValue: "",
          sortMode: "D"
        },
        {
          c: "STR006",
          d: "NR (dec.sep: ,)",
          p: "",
          t: "NR",
          filterValue: "",
          sortMode: "D"
        },
        {
          c: "STR007",
          d: "Oggetto",
          p: "COL",
          t: "CN",
          filterValue: "",
          sortMode: "D"
        },
        {
          c: "STR008",
          d: "Oggetto",
          p: "",
          t: "NR",
          filterValue: "",
          sortMode: "D"
        },
        {
          c: "STR009",
          d: "Percentuale",
          p: "P",
          t: "NR",
          filterValue: "",
          sortMode: "D"
        }
      ],
      rows: [
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "005", p: "", t: "NR" },
            STR002: { c: "1,1", p: "", t: "NR" },
            STR003: { c: "-1,12", p: "", t: "NR" },
            STR004: { c: "1-", p: "", t: "NR" },
            STR006: { c: "1,102", p: "", t: "NR" },
            STR007: { c: "FIOGIA", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "20", p: "P", t: "NR" },
            RowId: { c: "0", p: "", t: "NR" },
            ID: { c: "1", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "001", p: "", t: "NR" },
            STR002: { c: "2,0", p: "", t: "NR" },
            STR003: { c: "-2,13", p: "", t: "NR" },
            STR004: { c: "2-", p: "", t: "NR" },
            STR006: { c: "2,1000", p: "", t: "NR" },
            STR007: { c: "SANCOS", p: "COL", t: "CN" },
            STR008: { c: "02", p: "", t: "NR" },
            STR009: { c: "33,3", p: "P", t: "NR" },
            RowId: { c: "1", p: "", t: "NR" },
            ID: { c: "2", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "001", p: "", t: "NR" },
            STR002: { c: "3,1", p: "", t: "NR" },
            STR003: { c: "-3,14", p: "", t: "NR" },
            STR004: { c: "3-", p: "", t: "NR" },
            STR006: { c: "3,12345", p: "", t: "NR" },
            STR007: { c: "PARFRA", p: "COL", t: "CN" },
            STR008: { c: "03", p: "", t: "NR" },
            STR009: { c: "0", p: "P", t: "NR" },
            RowId: { c: "2", p: "", t: "NR" },
            ID: { c: "3", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "002", p: "", t: "NR" },
            STR002: { c: "4,2", p: "", t: "NR" },
            STR003: { c: "-4,15", p: "", t: "NR" },
            STR004: { c: "4-", p: "", t: "NR" },
            STR006: { c: "4,4", p: "", t: "NR" },
            STR007: { c: "FORFED", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "", p: "P", t: "NR" },
            RowId: { c: "3", p: "", t: "NR" },
            ID: { c: "4", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "002", p: "", t: "NR" },
            STR002: { c: "12", p: "", t: "NR" },
            STR003: { c: "-12,16", p: "", t: "NR" },
            STR004: { c: "12-", p: "", t: "NR" },
            STR006: { c: "12,12", p: "", t: "NR" },
            STR007: { c: "BELQUI", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "44", p: "P", t: "NR" },
            RowId: { c: "4", p: "", t: "NR" },
            ID: { c: "5", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "002", p: "", t: "NR" },
            STR002: { c: "13,4", p: "", t: "NR" },
            STR003: { c: "-13,00", p: "", t: "NR" },
            STR004: { c: "13-", p: "", t: "NR" },
            STR006: { c: "13.123.213,012", p: "", t: "NR" },
            STR007: { c: "ROCMAT", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "66", p: "P", t: "NR" },
            RowId: { c: "5", p: "", t: "NR" },
            ID: { c: "6", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "002", p: "", t: "NR" },
            STR002: { c: "14,1", p: "", t: "NR" },
            STR003: { c: "-14,01", p: "", t: "NR" },
            STR004: { c: "14-", p: "", t: "NR" },
            STR006: { c: "1.123.114,49", p: "", t: "NR" },
            STR007: { c: "MAEOLI", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "100", p: "P", t: "NR" },
            RowId: { c: "6", p: "", t: "NR" },
            ID: { c: "7", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "002", p: "", t: "NR" },
            STR002: { c: "35,0", p: "", t: "NR" },
            STR003: { c: "-35,02", p: "", t: "NR" },
            STR004: { c: "35-", p: "", t: "NR" },
            STR006: { c: "1.235,35999", p: "", t: "NR" },
            STR007: { c: "CARLUC", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "1000", p: "P", t: "NR" },
            RowId: { c: "7", p: "", t: "NR" },
            ID: { c: "8", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "001", p: "", t: "NR" },
            STR002: { c: "55", p: "", t: "NR" },
            STR003: { c: "-55,03", p: "", t: "NR" },
            STR004: { c: "55-", p: "", t: "NR" },
            STR006: { c: "9.955,0000", p: "", t: "NR" },
            STR007: { c: "CASFRA", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "55,22", p: "P", t: "NR" },
            RowId: { c: "8", p: "", t: "NR" },
            ID: { c: "9", p: "", t: "NR" }
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            STR001: { c: "001", p: "", t: "NR" },
            STR002: { c: "121", p: "", t: "NR" },
            STR003: { c: "-121,0", p: "", t: "NR" },
            STR004: { c: "121-", p: "", t: "NR" },
            STR006: { c: "121,0", p: "", t: "NR" },
            STR007: { c: "DELGIO", p: "COL", t: "CN" },
            STR008: { c: "01", p: "", t: "NR" },
            STR009: { c: "20,11", p: "P", t: "NR" },
            RowId: { c: "9", p: "", t: "NR" },
            ID: { c: "10", p: "", t: "NR" }
          }
        }
      ]
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

      return filteredRows;
    }
  },

  methods: {
    onSort($event) {
      this.sortByColumn = $event.c;
    }
  }
};
</script>
