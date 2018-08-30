<style scoped>
tr {
  margin: 0px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr td {
  padding: 5px;
  border: 1px solid black;
}

tr:hover {
  background-color: lightyellow;
}

tr.selected {
  background-color: lightslategrey;
}
</style>

<template>
  <tbody>
    <tr
      v-for="(row, index) in rows"
      :key="index"
      :class="{ selected: row.selected }"
    >
    
      <td
        v-for="column in columns"
        :key="column.c"
        @click="onCellClick(column, row)"
      >{{ getCellValue(column.c, row) }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "smeup-data-table-body",

  props: ["columns", "rows", "setup"],

  data() {
    return {};
  },

  methods: {
    getCellValue(columnCode, row) {
      return row.content[columnCode].c;
    },

    onCellClick(column, row) {
      // unselecting all rows
      this.rows
        .filter(row => row.selected)
        .forEach(row => (row.selected = false));

      row.selected = true;
    }
  }
};
</script>
