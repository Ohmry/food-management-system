<template>
  <v-dialog
    v-model="visible"
    persistent
    @keydown.esc="onClose"
    max-width="400px"
  >
    <v-card>
      <v-card-title
        class="text-h6"
        style="background-color: #9D84BF; color: white;"
      >
        {{ title }}
      </v-card-title>
      <v-card-text class="py-5 px-6 text-body-1">
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <AppButton text="Cancel" icon="close" depressed @click="onClose" />
        <AppButton text="Ok" icon="done" depressed @click="onConfirm" />
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { events } from './events'

const Component = {
  name: 'AppConfirm',
  data: () => ({
    title: '',
    message: '',
    visible: false,
    callback: undefined
  }),
  methods: {
    onOpen (params) {
      this.title = params.title
      this.message = params.message
      this.visible = true
      this.callback = params.callback
    },
    onClose () {
      this.visible = false
      if (this.callback) {
        this.callback(false)
      }
    },
    onConfirm () {
      this.visible = false
      if (this.callback) {
        this.callback(true)
      }
    }
  },
  mounted () {
    if (!document) return
    events.$on('open', this.onOpen)
    events.$on('close', () => {
      this.onClose()
    })
  }
}

export default Component
</script>

<style></style>
