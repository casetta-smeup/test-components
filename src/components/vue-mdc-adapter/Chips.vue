<template>
  <div>
    <mdc-chip-set
      :filter="true"
      :input="true"
      @MDCChip:interaction="onInteraction"
      @MDCChip:trailingIconInteraction="onIconInteraction">

      <mdc-chip
        leadingIcon="android">

        Android
      </mdc-chip>

      <mdc-chip leadingIcon="face">
        Uomo Focaccina
      </mdc-chip>

      <mdc-chip leadingIcon="wc">
        WC Man
      </mdc-chip>
    </mdc-chip-set>
  </div>
</template>

<script>
export default {
  props: ["chiValue"],

  data() {
    return {
      value: ""
    };
  },

  created() {
    this.value = this.chiValue;
  },

  methods: {
    onInteraction($event) {
      this.$emit("change", $event);
    },

    onIconInteraction($event) {
      this.$emit("change", $event);
    }
  }
};
</script>
