<template>
  <div>
    <el-checkbox v-model="sortEnabled">Abilita sorting</el-checkbox>
    <el-checkbox v-model="stripeEnabled">Abilita stripe righe</el-checkbox>
    <el-checkbox v-model="borderEnabled">Abilita bordi</el-checkbox>
    <el-checkbox v-model="multiSelectionEnabled">Abilita multiselezione</el-checkbox>

    <div class="data-table-container">
      <el-table
        :data="tableData"
        :border="borderEnabled"
        :stripe="stripeEnabled"
        style="width: 100%">

        <el-table-column
          v-if="multiSelectionEnabled"
          type="selection"
          width="55"
        ></el-table-column>

        <el-table-column
          prop="title"
          label="Title"
          :sortable="sortEnabled"
        ></el-table-column>

        <el-table-column
          prop="date"
          label="Date"
          width="180"
          :sortable="sortEnabled"
        ></el-table-column>

        <el-table-column
          prop="director"
          label="Director"
          :sortable="sortEnabled"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "element-data-table",

  data() {
    return {
      borderEnabled: false,
      sortEnabled: false,
      stripeEnabled: true,
      multiSelectionEnabled: false,

      tableData: [
        { title: "Episode IV – A New Hope", date: "May 25, 1977", director: "George Lucas" },
        { title: "Episode V – The Empire Strikes Back", date: "May 21, 1980", director: "George Lucas" },
        { title: "Episode VI – Return of the Jedi", date: "May 25, 1983", director: "George Lucas" },
        { title: "Episode I – The Phantom Menace", date: "May 19, 1999", director: "George Lucas" },
        { title: "Episode II – Attack of the Clones", date: "May 16, 2002", director: "George Lucas" },
        { title: "Episode III – Revenge of the Sith", date: "May 19, 2005", director: "George Lucas" },
        { title: "Episode VII – The Force Awakens", date: "December 18, 2015", director: "George Lucas" },
        { title: "Episode VII – The Last Jedi", date: "December 15, 2017", director: "George Lucas" },
        { title: "Episode IX – Uomo Focaccina is Jar Jar Binks", date: "December 20, 2019", director: "George Lucas" },
        { title: "Rogue One: A Star Wars Story", date: "December 16, 2016", director: "Gareth Edwards" },
        { title: "Solo: A Star Wars Story", date: "May 25, 2018", director: "Ron Howard" },
        ]
    };
  }
};
</script>

<style scoped>
.data-table-container {
  margin-top: 1rem;
}
</style>

