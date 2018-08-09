<template>
  <mdc-checkbox
    v-model="value"
    @change="onChkChange">

    <span>{{ label }}</span>
  </mdc-checkbox>
</template>

<script>
export default {
  props: ["chkValue"],

  data() {
    return {
      value: false,
      label: "Is uomo focaccina a bellissimo uomo?"
    };
  },

  created() {
    // questo per evitare l'errore
    // [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    // Instead, use a data or computed property based on the prop's value. Prop being mutated: "itxValue"
    this.value = this.chkValue;
  },

  methods: {
    onChkChange() {
      this.$emit('change', this.value);
    }
  }
};
</script>
