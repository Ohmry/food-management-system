<template>
  <v-app>
    <MenuNavigator/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import MenuNavigator from './components/MenuNavigator'

export default {
  name: 'App',
  components: {
    MenuNavigator
  }
};
</script>
