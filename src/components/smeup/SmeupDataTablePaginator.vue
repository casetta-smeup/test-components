<style>
a.paginator-prev.disabled,
a.paginator-forward.disabled {
  opacity: 0.3;
  cursor: default;
}
</style>

<template>
  <div class="pagination">
    <a
      href="#"
      class="paginator-prev"
      :class="{disabled: previousPageDisabled}"
      @click="previousPage"
      >

      Back
    </a>

    {{ this.config.currentPage }}

    <a
      href="#"
      class="paginator-forward"
      :class="{disabled: forwardPageDisabled}"
      @click="forwardPage"
      >

      Forward
    </a>
  </div>
</template>

<script>
export default {
  name: "smeup-data-table-paginator",

  props: ["rows", "config"],

  computed: {
    previousPageDisabled() {
      return this.config.currentPage <= 1;
    },

    forwardPageDisabled() {
      return false;
    }
  },

  methods: {
    previousPage() {
      if (!this.previousPageDisabled) {
        this.config.currentPage--;
      }
    },

    forwardPage() {
      if (!this.forwardPageDisabled) {
        this.config.currentPage++;
      }
    }
  }
};
</script>
