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

import MenuNavigator from './components/MenuNavigator'
// import SystemMonitor from './components/SystemMonitor'

export default {
  name: 'App',
  components: {
    MenuNavigator
  }
};
</script>

<style>
  .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper):not(.v-data-table-row__active) {
    background: rgba(157, 132, 191, 0.2) !important;
  }
  .v-data-table-row__active, .v-data-table-row__active:hover {
    background: rgba(157, 132, 191, 0.5) !important;
  }
</style>