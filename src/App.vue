<template>
  <div id="app">
    <v-app>
      <div class="navbar">
        <el-button
          type="info"
          @click="component = 'GoogleChart'">
          Google chart
        </el-button>

        <el-button
          type="info"
          @click="component = 'Knob'">
          Knob
        </el-button>

        <el-button
          type="info"
          @click="component = 'InputPanel'">
          Input Panel (vue mdc adapter)
        </el-button>

        <el-button
          type="info"
          @click="component = 'VuetifyInp'">
          Input Panel (Vuetify)
        </el-button>

        <el-button
          type="info"
          @click="component = 'ElementInp'">
          Input Panel (element)
        </el-button>
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
import ElementInp from "./components/element/ElementInp.vue";

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
    VuetifyInp,
    ElementInp
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
