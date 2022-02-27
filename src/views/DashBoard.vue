<template>
  <v-app>
    <v-container fluid>
      <ViewTitle
        title="Overview"
        description="you can see mainly information of system such as follow"
      />
      <v-row>
        <v-col cols="12" md="3">
          <v-card outlined class="px-3 py-3">
            <v-card-title class="text-h5" style="color: #9D84BF;">How to simulate this app</v-card-title>
            <v-card-text>
              This app has any data for statistics.<br/>
              you can create data by click <v-icon>play_arrow</v-icon> Button
            </v-card-text>
            <v-card-actions>
              <AppButton text="Create Data" icon="play_arrow" outlined />
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="9">
          <v-card flat>
            <v-card-text>
              <LineChart 
                ref="chart"
                :labels="this.chart.labels"
                :data="this.chart.data"
                :options="this.chart.options"
                height="200px"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card flat>
            <v-card-title class="text-h5" style="color: #9D84BF;">Top 5 Selling</v-card-title>
            <v-card-text>
              <v-data-table
                :headers="this.table.selling.headers"
                :items="this.table.selling.data"
                :items-per-page="5"
                hide-default-footer
                disable-sort>
                <template v-slot:item.quantity="{item}">
                  {{ displayFormat(item.quantity, 'numeric') }}
                </template>
                <template v-slot:item.amount="{item}">
                  {{ displayFormat(item.amount, 'numeric') }}
                </template>
              </v-data-table>
            </v-card-text>
          </v-card> 
        </v-col>
        <v-col cols="12" md="4">
          <v-card flat>
            <v-card-title class="text-h5" style="color: #9D84BF;">Top 5 Best Selling Hours</v-card-title>
            <v-card-text>
              <v-data-table
                :headers="this.table.hours.headers"
                :items="this.table.hours.data"
                :items-per-page="5"
                hide-default-footer
                disable-sort>
                <template v-slot:item.quantity="{item}">
                  {{ displayFormat(item.quantity, 'numeric') }}
                </template>
                <template v-slot:item.amount="{item}">
                  {{ displayFormat(item.amount, 'numeric') }}
                </template>
              </v-data-table>
            </v-card-text>
          </v-card> 
        </v-col>
        <v-col cols="12" md="4">
          <v-card flat>
            <v-card-title class="text-h5" style="color: #9D84BF;">Top 5 Using Materials</v-card-title>
            <v-card-text>
              <v-data-table
                :headers="this.table.materials.headers"
                :items="this.table.materials.data"
                :items-per-page="5"
                hide-default-footer
                disable-sort>
                <template v-slot:item.amount="{item}">
                  {{ displayFormat(item.amount, 'numeric') }}
                </template>
                <template v-slot:item.totalCost="{item}">
                  {{ displayFormat(item.totalCost, 'decimal') }}
                </template>
              </v-data-table>
            </v-card-text>
          </v-card> 
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { LineChart } from '../components/Chart'
import { DisplayFormatUtils } from '../components/Utils'

export default {
  components: {
    LineChart
  },
  mixins: [DisplayFormatUtils],
  data: () => ({
    timer: undefined,
    table: {
      selling: {
        headers: [
          { text: 'Food', value: 'food' },
          { text: 'Selling Quantity', value: 'quantity' },
          { text: 'Selling Amount', value: 'amount' }
        ],
        data: []
      },
      hours: {
        headers: [
          { text: 'Times', value: 'times' },
          { text: 'Selling Quantity', value: 'quantity' },
          { text: 'Selling Amount', value: 'amount' }
        ],
        data: []
      },
      materials: {
        headers: [
          { text: 'Material', value: 'material' },
          { text: 'Total Used', value: 'amount' },
          { text: 'Unit', value: 'stockUnit' },
          { text: 'Total Cost', value: 'totalCost' }
        ],
        data: []
      }
    },
    /** Chart */
    chart: {
      labels: [],
      data: [],
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: (tooltip) => {
              return tooltip.yLabel.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
            }
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                stepSize: 20000,
                max: 100000,
                callback: (value) =>  {
                  return value.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
                }
              }
            }
          ]
        }
      }
    },
  }),
  methods: {
    refreshData() {
      this.chart.data.push(Math.floor(Math.random() * 10 + 1))
      this.chart.data.shift()
      this.$refs.chart.update()
    },
  },
  mounted () {
    let statistics = []
    let groupBySelling = []
    let groupByHour = []
    let groupByMaterials = []
    
    this.$store.state.transaction.map(transInfo => {
      let index = transInfo.saleTime
      if (statistics[index] == undefined) {
        statistics[index] = transInfo.totalAmount
      } else {
        statistics[index] += transInfo.totalAmount
      }
      
      let times = groupByHour.find(item => item.times == (transInfo.saleTime < 10 ? '0' + transInfo.saleTime : transInfo.saleTime) + ":00")
      if (times == undefined) {
        groupByHour.push({
          times: (transInfo.saleTime < 10 ? '0' + transInfo.saleTime : transInfo.saleTime) + ":00",
          quantity: transInfo.quantity,
          amount: transInfo.totalAmount
        })
      } else {
        times.quantity += transInfo.quantity
        times.amount += transInfo.totalAmount
      }

      let food = groupBySelling.find(item => item.id == transInfo.foodId)
      if (food == undefined) {
        groupBySelling.push({
          id: transInfo.foodId,
          food: transInfo.foodName,
          quantity: transInfo.quantity,
          amount: transInfo.totalAmount
        })
      } else {
        food.quantity += transInfo.quantity
        food.amount += transInfo.totalAmount
      }

      food = this.$store.state.foods.find(item => item.id == transInfo.foodId)
      if (food.productType == 'Single') {
        let recipe = this.$store.state.recipes.find(recipe => recipe.id = food.id)
        recipe.materials.map(material => {
          let item = groupByMaterials.find(item => item.id == material.id)
          if (item == undefined) {
            groupByMaterials.push({
              id: material.id,
              amount: material.amount
            })
          } else {
            item.amount += material.amount
          }
        })
      } else if (food.productType == 'Set') {
        let compose = this.$store.state.compositions.find(compose => compose.id == food.id)
        compose.foods.map(food => {
          let recipe = this.$store.state.recipes.find(recipe => recipe.id = food.id)
          recipe.materials.map(material => {
            let item = groupByMaterials.find(item => item.id == material.id)
            if (item == undefined) {
              groupByMaterials.push({
                id: material.id,
                amount: material.amount
              })
            } else {
              item.amount += material.amount
            }
          })
        })
      }
    })

    groupBySelling.sort((prev, next) => {
      if (prev.amount == next.amount) return 0
      if (prev.amount > next.amount) return -1
      if (prev.amount < next.amount) return 1
    })
    this.table.selling.data = groupBySelling

    groupByHour.sort((prev, next) => {
      if (prev.amount == next.amount) return 0
      if (prev.amount > next.amount) return -1
      if (prev.amount < next.amount) return 1
    })
    this.table.hours.data = groupByHour

    groupByMaterials.map(item => {
      let material = this.$store.state.materials.find(material => material.id == item.id)
      item.material = material.name
      item.stockUnit = material.stockUnit
      item.totalCost = (item.amount * material.stockUnitPrice).toFixed(3)
    })
    groupByMaterials.sort((prev, next) => {
      if (prev.amount == next.amount) return 0
      if (prev.amount > next.amount) return -1
      if (prev.amount < next.amount) return 1
    })
    this.table.materials.data = groupByMaterials

    for(let i = 0; i < 24; i++) {
      let timeLabel = (i < 10 ? '0' + i : i) + ':00'
      this.chart.labels.push(timeLabel)
      this.chart.data.push(statistics[i])
    }

    this.$refs.chart.update()
  }
}
</script>

<style></style>
