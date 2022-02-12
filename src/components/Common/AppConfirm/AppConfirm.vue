<template>
  <v-dialog v-model="visible">
    <v-card>
      <v-card-title v-text="title"></v-card-title>
      <v-card-text v-text="message"></v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    title: undefined,
    message: undefined,
    visible: false
  }),
  watch: {
    visible (from, to) {
      console.log(from, to)
    }
  },
  methods: {
    open (params) {
      this.title = params.title
      this.message = params.message
      this.visible = true
      console.log(this)
    },
    close () {
      this.visible = false
    }
  }
}
</script>

<style>

</style>