<template>
  <v-app>
    <MenuNavigator @change="changeMenu"/>
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
  },
  methods: {
    changeMenu (menu) {
      this.$router.push(menu)
    }
  }
};
</script>
