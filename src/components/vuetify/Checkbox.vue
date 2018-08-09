<template>
  <v-checkbox
    label="Is uomo focaccina a bellissimo uomo?"
    v-model="value"
    @change="onChange"
  ></v-checkbox>
</template>

<script>
export default {
  props: ["initialValue"],

  data() {
    return {
      value: this.initialValue
    };
  },

  methods: {
    onChange() {
      this.$emit('change', this.value);
    }
  }
};
</script>
