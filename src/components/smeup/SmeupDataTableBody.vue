<style scoped>
tr {
  margin: 0px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr.highlight {
  background-color: lightyellow;
}

tr.selected {
  background-color: lightslategrey;
}

tbody tr td {
  padding: 5px;
  border: 1px solid black;
}
</style>

<template>
  <tbody>
    <tr
      v-for="(row, index) in rows"
      :key="index"
      @mouseover="onRowMouseOver(row)"
      @mouseout="onRowMouseOut(row)"
      :class="{ highlight: row.mouseOver, selected: row.selected }"
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

  props: ["columns", "rows"],

  data() {
    return {};
  },

  methods: {
    getCellValue(columnCode, row) {
      const filteredRow = row.content.entry.filter(e => e.key === columnCode);

      if (filteredRow.length > 0) {
        return filteredRow[0].value.c;
      }

      return "";
    },

    onCellClick(column, row) {
      // unselecting all rows
      this.rows.forEach(row => {
        row.selected = false;
      });
      row.selected = true;
    },

    onRowMouseOver(row) {
      row.mouseOver = true;
    },

    onRowMouseOut(row) {
      row.mouseOver = false;
    }
  }
};
</script>
