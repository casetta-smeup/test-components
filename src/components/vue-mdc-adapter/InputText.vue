<template>
  <mdc-textfield
    v-model="value"
    label="Nome"
    @change="onItxChange"
    />
</template>

<script>
export default {
  props: ["itxValue"],

  data() {
    return {
      value: ""
    };
  },

  created() {
    // questo per evitare l'errore
    // [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    // Instead, use a data or computed property based on the prop's value. Prop being mutated: "itxValue"
    this.value = this.itxValue;
  },

  methods: {
    onItxChange() {
      this.$emit('change', this.value);
    }
  }
};
</script>
