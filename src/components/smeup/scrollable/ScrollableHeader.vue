<style>
.scrollable-header {
  overflow: hidden;
}

table {
  width: 100%;
}
</style>

<template>
  <div class="scrollable-header">
    <table>
      <smeup-data-table-header
        :columns="columns"
        :filterable="filterable"
        :sortable="sortable"
        :scroll="scrollConfig"
        @sortby="onSort($event)"
      ></smeup-data-table-header>
    </table>
  </div>
</template>

<script>
import SmeupDataTableHeader from "../SmeupDataTableHeader.vue";

export default {
  name: "data-table-scrollable-header",

  components: {
    SmeupDataTableHeader
  },

  props: ["columns", "filterable", "scrollConfig", "sortable"]
};
</script>
