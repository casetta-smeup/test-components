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
    </div>

    <table>
      <smeup-data-table-header
        :columns="columns"
        :filterable="filterable"
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

      columns: [
        { filterValue: "", c: "STR001", d: "NR", p: "", t: "NR" },
        { filterValue: "", c: "STR002", d: "NR", p: "", t: "NR" },
        { filterValue: "", c: "STR003", d: "NR neg.(-n)", p: "", t: "NR" },
        { filterValue: "", c: "STR004", d: "NR neg.(n-)", p: "", t: "NR" },
        { filterValue: "", c: "STR006", d: "NR (dec.sep: ,)", p: "", t: "NR" },
        { filterValue: "", c: "STR007", d: "Oggetto", p: "COL", t: "CN" },
        { filterValue: "", c: "STR008", d: "Oggetto", p: "", t: "NR" },
        { filterValue: "", c: "STR009", d: "Percentuale", p: "P", t: "NR" }
      ],
      rows: [
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "005", p: "", t: "NR" } },
              { key: "STR002", value: { c: "1,1", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-1,12", p: "", t: "NR" } },
              { key: "STR004", value: { c: "1-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "1,102", p: "", t: "NR" } },
              { key: "STR007", value: { c: "FIOGIA", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "20", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "0", p: "", t: "NR" } },
              { key: "ID", value: { c: "1", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "001", p: "", t: "NR" } },
              { key: "STR002", value: { c: "2,0", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-2,13", p: "", t: "NR" } },
              { key: "STR004", value: { c: "2-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "2,1000", p: "", t: "NR" } },
              { key: "STR007", value: { c: "SANCOS", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "02", p: "", t: "NR" } },
              { key: "STR009", value: { c: "33,3", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "1", p: "", t: "NR" } },
              { key: "ID", value: { c: "2", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "001", p: "", t: "NR" } },
              { key: "STR002", value: { c: "3,1", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-3,14", p: "", t: "NR" } },
              { key: "STR004", value: { c: "3-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "3,12345", p: "", t: "NR" } },
              { key: "STR007", value: { c: "PARFRA", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "03", p: "", t: "NR" } },
              { key: "STR009", value: { c: "0", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "2", p: "", t: "NR" } },
              { key: "ID", value: { c: "3", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "002", p: "", t: "NR" } },
              { key: "STR002", value: { c: "4,2", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-4,15", p: "", t: "NR" } },
              { key: "STR004", value: { c: "4-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "4,4", p: "", t: "NR" } },
              { key: "STR007", value: { c: "FORFED", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "3", p: "", t: "NR" } },
              { key: "ID", value: { c: "4", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "002", p: "", t: "NR" } },
              { key: "STR002", value: { c: "12", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-12,16", p: "", t: "NR" } },
              { key: "STR004", value: { c: "12-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "12,12", p: "", t: "NR" } },
              { key: "STR007", value: { c: "BELQUI", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "44", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "4", p: "", t: "NR" } },
              { key: "ID", value: { c: "5", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "002", p: "", t: "NR" } },
              { key: "STR002", value: { c: "13,4", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-13,00", p: "", t: "NR" } },
              { key: "STR004", value: { c: "13-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "13.123.213,012", p: "", t: "NR" } },
              { key: "STR007", value: { c: "ROCMAT", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "66", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "5", p: "", t: "NR" } },
              { key: "ID", value: { c: "6", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "002", p: "", t: "NR" } },
              { key: "STR002", value: { c: "14,1", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-14,01", p: "", t: "NR" } },
              { key: "STR004", value: { c: "14-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "1.123.114,49", p: "", t: "NR" } },
              { key: "STR007", value: { c: "MAEOLI", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "100", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "6", p: "", t: "NR" } },
              { key: "ID", value: { c: "7", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "002", p: "", t: "NR" } },
              { key: "STR002", value: { c: "35,0", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-35,02", p: "", t: "NR" } },
              { key: "STR004", value: { c: "35-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "1.235,35999", p: "", t: "NR" } },
              { key: "STR007", value: { c: "CARLUC", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "1000", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "7", p: "", t: "NR" } },
              { key: "ID", value: { c: "8", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "001", p: "", t: "NR" } },
              { key: "STR002", value: { c: "55", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-55,03", p: "", t: "NR" } },
              { key: "STR004", value: { c: "55-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "9.955,0000", p: "", t: "NR" } },
              { key: "STR007", value: { c: "CASFRA", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "55,22", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "8", p: "", t: "NR" } },
              { key: "ID", value: { c: "9", p: "", t: "NR" } }
            ]
          }
        },
        {
          mouseOver: false,
          selected: false,
          content: {
            entry: [
              { key: "STR001", value: { c: "001", p: "", t: "NR" } },
              { key: "STR002", value: { c: "121", p: "", t: "NR" } },
              { key: "STR003", value: { c: "-121,0", p: "", t: "NR" } },
              { key: "STR004", value: { c: "121-", p: "", t: "NR" } },
              { key: "STR006", value: { c: "121,0", p: "", t: "NR" } },
              { key: "STR007", value: { c: "DELGIO", p: "COL", t: "CN" } },
              { key: "STR008", value: { c: "01", p: "", t: "NR" } },
              { key: "STR009", value: { c: "20,11", p: "P", t: "NR" } },
              { key: "RowId", value: { c: "9", p: "", t: "NR" } },
              { key: "ID", value: { c: "10", p: "", t: "NR" } }
            ]
          }
        }
      ]
    };
  },

  computed: {
    filteredRows() {
      return this.rows.filter(r => {
        const columnsWithFilter = this.columns.filter(
          c => c.filterValue.length > 0
        );

        if (columnsWithFilter.length > 0) {
          // there is atleast a filter
          return (
            columnsWithFilter.filter(c => {
              let rowCell;
              for (let i = 0; i < r.content.entry.length; i++) {
                const entry = r.content.entry[i];
                if (entry.key === c.c) {
                  rowCell = entry;
                  break;
                }
              }

              if (rowCell) {
                return (
                  rowCell.value.c && rowCell.value.c.includes(c.filterValue)
                );
              } else {
                return false;
              }
            }).length == columnsWithFilter.length
          );
        }

        return true;
      });
    }
  }
};
</script>
