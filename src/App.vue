<template>
  <v-app>
    <AppNavigator />
    <v-main>
      <router-view/>
    </v-main>
    <!-- <SystemMonitor /> -->
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
  .v-data-table-row:hover {
    background-color: rgba(157, 132, 191, 0.2) !important;
  }
  .v-data-table-row__selected, .v-data-table-row__selected:hover {
    background-color: rgba(157, 132, 191, 0.5) !important;
  }
</style>