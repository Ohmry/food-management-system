<template>
  <v-app>
    <v-container fluid>
      <v-toolbar color="rgba(0, 0, 0, 0)" flat>
        <v-toolbar-title class="text-h4">
          <strong>Overview</strong>
        </v-toolbar-title>
      </v-toolbar>
      <v-item-group class="mt-n4">
        <v-container fluid>
          <v-row justify="start">
            <v-col cols="12" md="3">
              <OverviewItem />
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem />
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem />
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem />
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-container>
  </v-app>
</template>

<script>
import OverviewItem from '../components/Dashboard/OverviewItem.vue'
export default {
  components: {
    OverviewItem
  }
}
</script>

<style>

</style>