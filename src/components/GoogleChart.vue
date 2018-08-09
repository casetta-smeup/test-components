<template>
  <div class=".CHA">
    <div :id="id"></div>

    {{ message }}
  </div>
</template>


<script>
export default {

  data() {
    return {
      id: "chart",
      chart: null,
      data: null,
      message: ""
    };
  },

  mounted() {
    // Create the data table.
    this.data = new google.visualization.DataTable();
    this.data.addColumn("string", "Topping");
    this.data.addColumn("number", "Slices");
    this.data.addRows([
      ["Mushrooms", 3],
      ["Onions", 1],
      ["Olives", 1],
      ["Zucchini", 1],
      ["Pepperoni", 2]
    ]);

    // Set chart options
    var options = {
      title: "How Much Pizza I Ate Last Night",
      width: 400,
      height: 300
    };

    // Instantiate and draw our chart, passing in some options.
    this.chart = new google.visualization.PieChart(
      document.getElementById(this.id)
    );
    this.chart.draw(this.data, options);
    google.visualization.events.addListener(
      this.chart,
      "select",
      this.onChartClick
    );
  },

  methods: {
    onChartClick() {
      var selectedItem = this.chart.getSelection()[0];

      if (selectedItem) {
        const selectedRow = this.data.getValue(selectedItem.row, 0);
        const selectedValue = this.data.getValue(selectedItem.row, 1);
        this.message = `Hai selezionato ${selectedRow} ed il suo valore e' ${selectedValue}`;
      }
    }
  }
};
</script>
