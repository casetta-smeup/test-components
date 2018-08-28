<style scoped>
th {
  padding: 5px;
}
</style>

<template>
  <thead>
    <tr>
      <th
        v-for="col in columns"
        :key="col.c"
        @click="onCellClick(col)">

        <span>{{ col.d }}</span>

        <v-text-field
          v-model="col.filterValue"
          v-if="filterable">
        </v-text-field>
      </th>
    </tr>
  </thead>
</template>


<script>
export default {
  name: "smeup-data-table-header",

  props: ["columns", "filterable", "sortable"],

  methods: {
    onCellClick(col) {
      if (this.sortable) {
        col.sortMode === "A" ? (col.sortMode = "D") : (col.sortMode = "A");
        this.$emit("sortby", col);
      }
    }
  }
};
</script>
