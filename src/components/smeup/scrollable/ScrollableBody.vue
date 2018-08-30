<style>
table {
  width: 100%;
  border-collapse: collapse;
}

.scrollable-body {
  overflow: auto;
}

.scrollable-body table thead {
  display: none;
}
</style>

<template>
  <div
    class="scrollable-body"
    :style="scrollableBodyStyle">
    <table>
      <smeup-data-table-header
        :columns="columns"
        :filterable="filterable"
        :sortable="sortable"
        :scroll="scrollConfig"
        @sortby="onSort($event)"
      ></smeup-data-table-header>

      <smeup-data-table-body
        :columns="columns"
        :rows="rows"
      ></smeup-data-table-body>
    </table>
  </div>
</template>

<script>
import SmeupDataTableHeader from "../SmeupDataTableHeader.vue";
import SmeupDataTableBody from "../SmeupDataTableBody.vue";

export default {
  components: {
    SmeupDataTableHeader,
    SmeupDataTableBody
  },

  props: ["columns", "filterable", "rows", "scrollConfig", "sortable"],

  computed: {
    scrollableBodyStyle() {
      const obj = {};

      if (this.scrollConfig.enabled) {
        if (this.scrollConfig.scrollHeight) {
          obj.height = this.scrollConfig.scrollHeight + "px";
        }

        if (this.scrollConfig.scrollWidth) {
          // TODO
        }
      }

      return obj;
    }
  },

  mounted() {
    const ths = this.$el.querySelectorAll("tr:first-child > td");
    const newWidths = Array.from(ths).map(th => th.offsetWidth);

    newWidths.forEach((w, index) => (this.columns[index].width = w + "px"));
  }
};
</script>
