<style scoped>
.scrollable-header {
  overflow: hidden;
}

table {
  width: 100%;
}
</style>

<template>
  <div class="scrollable-header">
    <table :style="tableStyle">
      <smeup-data-table-header
        :columns="columns"
        :filterable="filterable"
        :sortable="sortable"
        :scroll="scrollConfig"
        @sortby="onSort"
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

  props: ["columns", "filterable", "scrollConfig", "sortable"],

  computed: {
    tableStyle() {
      return {
        marginLeft: "-" + this.scrollConfig.scrollLeft + "px"
      };
    }
  },

  methods: {
    onSort($event) {
      this.$emit("sortby", $event);
    }
  }
};
</script>
