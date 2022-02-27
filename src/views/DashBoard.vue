<template>
  <v-app>
    <v-container fluid>
      <ViewTitle
        title="Overview"
        description="you can see mainly information of system such as follow"
      />
      <v-item-group>
        <v-container fluid>
          <v-row justify="start">
            <v-col cols="12" md="2">
              <v-item v-slot="{ active }">
                <v-card class="d-flex rounded-xl"
                  :color="active ? '#58238C' : '#9D84BF'"
                  dark height="200"
                  style="user-select: none">
                  <v-row>
                    <v-col cols="12" sm="12" class="my-3 mx-3">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div>
                            <v-icon size="52">videocam</v-icon>
                          </div>
                          <v-list-item-subtitle class="text-h6">Simulate</v-list-item-subtitle>
                          <v-list-item-title class="py-5">
                            <AppButton outlined fab white icon="play_arrow" iconSize="42" class="mr-3" />
                            <!-- <AppButton outlined fab white icon="pause" iconSize="42" class="mr-3" /> -->
                            <AppButton outlined fab white icon="stop" iconSize="42" />
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem
                title="Total Transaction"
                icon="shopping_cart"
                value="9,438"
              />
            </v-col>
            <v-col cols="12" md="3">
              <OverviewItem
                title="Total Sales"
                icon="attach_money"
                value="1,999,438"
              />
            </v-col>
            <v-col cols="12" md="2">
              <OverviewItem
                title="Cost Per Period"
                icon="equalizer"
                value="9,438"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <LineChart
          ref="chart"
          :labels="this.chart.labels"
          :data="this.chart.data"
          :options="this.chart.options"
          height="200px"
        />
    </v-container>
  </v-app>
</template>

<script>
import OverviewItem from '../components/Dashboard/OverviewItem.vue'
import { LineChart } from '../components/Chart'

export default {
  components: {
    OverviewItem,
    LineChart
  },
  data: () => ({
    /** Summary */
    summary: {
      data: null,
    },
    timer: undefined,
    /** Chart */
    chart: {
      labels: [],
      data: [],
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                stepSize: 10,
                max: 100
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
    let group = {}
    this.$store.state.transaction.map(transInfo => {
      let index = transInfo.saleTime
      if (group[index] == undefined) {
        group[index] = transInfo.quantity
      } else {
        group[index] += transInfo.quantity
      }
    })

    for(let i = 0; i < 144; i++) {
      this.chart.labels.push(i)
      this.chart.data.push(group[i])
    }

    this.$refs.chart.update()
  }
}
</script>

<style></style>
