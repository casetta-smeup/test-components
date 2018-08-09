<template>
  <div class="KNO">
    <div
      id="knob"
      @change="onChange($event)">
    </div>

    {{ message }}
  </div>
</template>


<script>
import Knob from "svg-knob";

export default {
  data() {
    return {
      knob: null,
      message: ""
    }
  },

  methods: {
    onChange($event) {
      this.message = `Hai selezionato il valore ${$event.detail}`;
    }
  },

  mounted() {
    // https://github.com/francoisgeorgy/svg-knob#readme
    this.knob = new Knob("#knob", {
      /* config... */
    });
  }
};
</script>

<style>
#knob {
  width: 400px;
  height: 400px;
}
</style>

