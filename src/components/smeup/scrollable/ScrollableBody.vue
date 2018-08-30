<style>
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}

.scrollable-body {
  overflow: auto;
}

.scrollable-body table thead {
  height: 0px;
}

.scrollable-body table thead > tr {
  height: 0px;
}

.scrollable-body table thead > tr > th {
  height: 0px;
  border-bottom-width: 0px;
  border-top-width: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  outline: 0 none;
}

.scrollable-body table thead > tr > th > span {
  display: none;
}
</style>

<template>
  <div
    class="scrollable-body"
    :style="scrollableBodyStyle"
    @scroll="onTableScroll"
  >
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
          obj.width = this.scrollConfig.scrollWidth + "px";
        }
      }

      return obj;
    }
  },

  mounted() {
    const ths = this.$el.querySelectorAll("tr:first-child > td");
    const newWidths = Array.from(ths).map(th => th.offsetWidth);

    newWidths.forEach((w, index) => (this.columns[index].width = w + "px"));
  },

  methods: {
    onTableScroll($event) {
      this.$emit("scroll", $event.target.scrollLeft);
    }
  }
};
</script>
