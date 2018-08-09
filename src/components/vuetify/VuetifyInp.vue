<template>
  <div class="INP">
    <div class="field-container">
      <input-text
        :initialValue="itxValue"
        @change="onItxChange($event)"
      ></input-text>

      <combo
        :initialValue="cmbValue"
        @change="onCmbChange($event)"
      ></combo>

      <checkbox
        :initialValue="chkValue"
        @change="onChkChange($event)"
      ></checkbox>
    </div>

    <div class="field-values">
      <ul>
        <li>ITX: {{ itxValue }}</li>
        <li>CMB: {{ cmbValue }}</li>
        <li>CHK: {{ chkValue }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import Combo from "./Combo.vue";
import InputText from "./InputText.vue";

export default {
  
  components: {
    Checkbox,
    Combo,
    InputText
  },

  data() {
    return {
      itxValue: "",
      cmbValue: "",
      chkValue: true
    }
  },

  methods: {
    onChkChange($event) {
      this.chkValue = $event;
    },

    onCmbChange($event) {
      this.cmbValue = $event;
    },

    onItxChange($event) {
      this.itxValue = $event;
    }
  }
}
</script>

<style scoped>
.INP {
  max-width: 500px;
}
</style>
