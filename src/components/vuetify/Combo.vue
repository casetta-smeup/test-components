<template>
  <div>
    <v-select
      v-model="value"
      :items="items"
      label="Tartaruga ninja preferita"
      persistent-hint
      return-object
      single-line
      @change="onChange"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: ["initialValue"],

  data() {
    return {
      value: this.initialValue,
      items: ["Donatello", "Leonardo", "Michelangelo", "Raffaello"]
    }
  },

  methods: {
    onChange() {
      this.$emit("change", this.value);
    }
  }
}
</script>
