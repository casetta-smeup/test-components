<template>
  <div class="INP">
    <input-text
      :itxValue="itxValue"
      @change="onItxChange($event)">
    </input-text>

    <chips :chiValue="chiValue"></chips>

    <combo-box
      :chkValue="chkValue"
      @change="onCmbChange($event)">
    </combo-box>

    <checkbox
      :chkValue="chkValue"
      @change="onChkChange($event)">
    </checkbox>

    <ul>
      <li>{{ itxValue }}</li>
      <li>{{ chkValue }}</li>
      <li>{{ cmbValue }}</li>
    </ul>
  </div>
</template>

<script>
import Checkbox from './Checkbox.vue';
import Chips from './Chips.vue';
import ComboBox from './ComboBox.vue';
import InputText from './InputText.vue';

export default {
  data() {
    return {
      itxValue: "",
      chiValue: "",
      chkValue: true,
      cmbValue: ""
    };
  },

  components: {
    Checkbox,
    Chips,
    ComboBox,
    InputText
  },

  methods: {
    onCmbChange($event) {
      this.cmbValue = $event;
    },

onChkChange($event) {
      this.chkValue = $event;
    },

    onItxChange($event) {
      this.itxValue = $event;
    }
  }
};
</script>

