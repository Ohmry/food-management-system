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
