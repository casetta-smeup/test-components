<template>
  <div id="app">
    <v-app>
      <div class="navbar">
        <button
          type="button"
          @click="component = 'GoogleChart'">

          Google chart
        </button>
      
        <button
          type="button"
          @click="component = 'Knob'">

          Knob
        </button>
      
        <button
          type="button"
          @click="component = 'InputPanel'">

          Input Panel (vue mdc adapter)
        </button>
      
        <button
          type="button"
          @click="component = 'VuetifyInp'">

          Input Panel (Vuetify)
        </button>
      </div>

      <div class="main-container">
        <component
          v-if="component"
          :is="component">

        </component>
      </div>
    </v-app>
  </div>
</template>

<script>
import GoogleChart from "./components/GoogleChart.vue";
import Knob from "./components/Knob.vue";
import InputPanel from "./components/vue-mdc-adapter/InputPanel.vue";
import VuetifyInp from "./components/vuetify/VuetifyInp.vue";

export default {
  name: "app",

  data() {
    return {
      component: null
    };
  },

  components: {
    GoogleChart,
    Knob,
    InputPanel,
    VuetifyInp
  }
};
</script>

<style>
body {
  padding: 1rem;
}

.main-container {
  margin-top: 1rem;
}

button:not(:first-child) {
  margin: 0 0.5rem;
}
</style>
