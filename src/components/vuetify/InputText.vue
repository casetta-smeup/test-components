<template>
  <div>
    <v-text-field
      v-model="value"
      label="Nome"
      @change="onChange">

    </v-text-field>
  </div>
</template>

<script>
export default {
  props: ["initialValue"],

  data() {
    return {
      value: this.initialValue
    }
  },

  methods: {
    onChange() {
      console.log('triggering change', this.value)
      this.$emit("change", this.value);
    }
  }
}
</script>
