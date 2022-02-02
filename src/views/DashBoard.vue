<template>
  <v-app>
    <v-container fluid>
      <MenuTitle title="Overview" description="you can see mainly information of system such as follow"/>
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
          </v-row>
        </v-container>
      </v-item-group>
      <v-container fluid>
        <MenuSubTitle title="Most Sales Food" description="you can see the most sales food list and graph"/>
        <v-row>
          <v-col cols="12" md="6" sm="1">
            <v-data-table :headers="table.headers" :items="table.datasets" :hide-default-footer="true"
              :items-per-page="9">
              <template v-slot:item.amount="{item}">
                {{ item.amount.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') }}
              </template>
              <template v-slot:item.quantity="{item}">
                {{ item.quantity.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') }}
              </template>
              <template v-slot:item.unitPrice="{item}">
                {{ item.unitPrice.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') }}
              </template>
            </v-data-table>
          </v-col>
          <v-col cols="12" md="6" sm="1">
            <PieChart :chart-data="chart.data" :options="chart.options"></PieChart>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import OverviewItem from '../components/Dashboard/OverviewItem.vue'
import MenuTitle from '../components/MenuTitle'
import MenuSubTitle from '../components/MenuSubTitle'
import PieChart from '../components/Chart/PieChart.js'

export default {
  components: {
    OverviewItem,
    MenuTitle,
    MenuSubTitle,
    PieChart
  },
  data: () => ({
    /** Summary */
    summary: {
      data: null
    },
    /** Table */
    table: {
      headers: [
        { text: 'Food', value: 'name' },
        { text: 'Unit Price', value: 'unitPrice', align: 'end' },
        { text: 'Selling Quantity', value: 'quantity', align: 'end' },
        { text: 'Selling Amount', value: 'amount', align: 'end' }
      ],
      datasets: [
        { name: 'Burger', quantity: '500', unitPrice: '5000', amount: '2500000' },
        { name: 'French fries', quantity: '175', unitPrice: '1000', amount: '175000' },
        { name: 'Coke', quantity: '500', unitPrice: '500', amount: '250000' },
        { name: 'Burger', quantity: '500', unitPrice: '5000', amount: '2500000' },
        { name: 'French fries', quantity: '175', unitPrice: '1000', amount: '175000' },
        { name: 'Coke', quantity: '500', unitPrice: '500', amount: '250000' },
        { name: 'Burger', quantity: '500', unitPrice: '5000', amount: '2500000' },
        { name: 'French fries', quantity: '175', unitPrice: '1000', amount: '175000' },
        { name: 'Coke', quantity: '500', unitPrice: '500', amount: '250000' },
        { name: 'Burger', quantity: '500', unitPrice: '5000', amount: '2500000' },
        { name: 'French fries', quantity: '175', unitPrice: '1000', amount: '175000' },
        { name: 'Coke', quantity: '500', unitPrice: '500', amount: '250000' },
      ]
    },
    /** Chart */
    chart: {
      data: {
        labels: ['Burger', 'French fries', 'Coke', 'Hotdog', 'Sandwich'],
        datasets: [{
          data: [12, 19, 5, 7, 3],
          hoverOffset: 4
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: ''
        },
        legend: {
          position: 'bottom',
          labels: {
            padding: 20
          }
        }
      }
    }
  })
}
</script>

<style>

</style>