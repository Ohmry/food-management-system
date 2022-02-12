<template>
  <v-snackbar v-model="visible" :timeout="3000" color="rgba(157, 132, 191)" absolute top>
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="visible = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { events } from './events'

const Component = {
  name: 'AppSnackBar',
  data: () => ({
    visible: false,
    text: ''
  }),
  methods: {
    onOpen (params) {
      this.text = params.text
      this.visible = true
    }
  },
  mounted () {
    if (!document) return
    events.$on('open', this.onOpen)
    events.$on('close', () => this.visible = false)
  }
}

export default Component
</script>

<style>

</style>