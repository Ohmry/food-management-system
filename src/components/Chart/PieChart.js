import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['data', 'options'],
  data: () => ({
    colors: ['#58238C', '#9D84BF', '#F2F2F2', '#F2DFBB', '#F2C46D']
  }),
  mounted () {
    let backgroundColors = []
    for (let index in this.chartData.datasets[0].data) {
      backgroundColors.push(this.colors[index % this.colors.length])
    }
    this.chartData.datasets[0].backgroundColor = backgroundColors
    this.renderChart(this.chartData, this.options)
  }
}