<template>
  <div>
    <mdc-select
      v-model="value"
      label="Tartaruga ninja preferita"
      :outlined="true"
      @change="onCmbChange">

      <option>Donatello</option>
      <option>Leonardo</option>
      <option>Michelangelo</option>
      <option>Raffaello</option>
    </mdc-select>
  </div>
</template>

<script>
export default {
  props: ["selectValue"],

  data() {
    return {
      value: ""
    };
  },

  created() {
    this.value = this.cmbValue;
  },

  methods: {
    onCmbChange() {
      this.$emit('change', this.value);
    }
  }
};
</script>
