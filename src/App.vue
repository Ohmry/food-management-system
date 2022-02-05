<template>
  <v-app>
    <MenuNavigator/>
    <v-main>
      <router-view/>
    </v-main>
    <!-- <SystemMonitor /> -->
  </v-app>
</template>

<script>

import MenuNavigator from './components/Menu/MenuNavigator'
// import SystemMonitor from './components/SystemMonitor'

export default {
  name: 'App',
  components: {
    MenuNavigator
  }
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