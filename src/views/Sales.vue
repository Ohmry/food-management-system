<template>
  <v-app>
    <v-container fluid>
      <ViewTitle
        title="Sales"
        description="you can see the statistics of sales"
      />
      <v-row>
        <v-col cols="12" md="12">
          <v-btn @click="refresh">Refresh</v-btn>
          <v-card class="mx-5 my-5" flat>
            <LineChart
              ref="chart"
              :labels="this.chart.labels"
              :data="this.chart.data"
              :options="this.chart.options"
              height="200px"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { LineChart } from '../components/Chart'
export default {
  components: {
    LineChart
  },
  data: () => ({
    timer: undefined,
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
    }
  }),
  methods: {
    refresh () {
      if (this.chart.data.length == 60) {
        this.chart.data.shift()
      }
      this.chart.data.push(Math.floor(Math.random() * 80))
      this.$refs.chart.update()
    }
  },
  beforeMount () {
    for (let i = 0; i < 60; i++) {
      this.chart.labels.push(i + 1)
      // this.chart.data.push(Math.floor(Math.random() * 80))
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.refresh()
    }, 100)
  },
  beforeDestroy () {
    setTimeout(() => {
      clearTimeout(this.timer)
    }, 0)
  }
}
</script>

<style></style>
