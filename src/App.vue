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

        <el-button
          type="info"
          @click="component = 'element-data-table'">
          DataTable (element)
        </el-button>

        <el-button
          type="info"
          @click="component = 'big-data-table'">
          DataTable performance
        </el-button>

        <el-button
          type="info"
          @click="component = 'smeup-data-table'">
          DataTable (smeup)
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
import ElementDataTable from "./components/element/DataTable.vue";
import BigDataTable from "./components/element/BigDataTable.vue";
import SmeupDataTable from "./components/smeup/SmeupDataTable.vue";

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
    ElementInp,
    ElementDataTable,
    BigDataTable,
    SmeupDataTable
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
