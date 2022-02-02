<template>
  <v-app>
    <v-container fluid>
      <v-toolbar color="rgba(0, 0, 0, 0)" flat>
        <v-toolbar-title class="text-h4 mb-3" style="color: #9D84BF">
          <strong>Overview</strong>
        </v-toolbar-title>
      </v-toolbar>
      <v-item-group>
        <v-container fluid>
          <v-row justify="start">
            <v-col cols="12" md="3">
              <OverviewItem title="Total Transaction" icon="shopping_cart" value="9,438" />
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem title="Total Sales" icon="attach_money" value="9,438" />
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem title="Average Selling Price" icon="show_chart" value="9,438" />
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem title="Average Cost" icon="equalizer" value="2,214" />
            </v-col>
            <!-- <v-col cols="12" md="2">
              <OverviewItem title="Material list" icon="local_shipping" value="58"/>
            </v-col>
            <v-col cols="12" md="2">
              <OverviewItem title="Food list" icon="restaurant" value="23"/>
            </v-col>
            <v-col cols="12" md="4">
              <OverviewItem title="Total sales" icon="attach_money" value="100,000"/>
            </v-col>
            <v-col cols="12" md="4">
              <OverviewItem title="Aveage Transaction Value" icon="stacked_bar_chart" value="1,000.5"/>
            </v-col> -->
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