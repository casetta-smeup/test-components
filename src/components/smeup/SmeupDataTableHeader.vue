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
      >{{ col.d }}</th>
    </tr>
  </thead>
</template>


<script>
export default {
  name: "smeup-data-table-header",

  props: ["columns"]
};
</script>
