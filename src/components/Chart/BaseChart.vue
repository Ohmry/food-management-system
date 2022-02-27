<template>
  <div id="container" :style="{ height: this.height }">
    <canvas id="chart-board"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: ['labels', 'data', 'options', 'height'],
  data: () => ({
    type: undefined,
    chart: undefined
  }),
  methods: {
    update () {
      this.chart.update()
    }
  },
  mounted () {
    const context = document.getElementById('chart-board')
    this.chart = new Chart(context, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '',
            data: this.data,
            borderWidth: 1,
            borderColor: '#58238C',
            backgroundColor: '#9D84BF'
          }
        ]
      },
      options: this.options
    })
  }
}
</script>

<style></style>
