<template>
  <v-dialog
    :value="visible"
    @keydown.esc="onCancel"
    max-width="400px"
    persistent>
    <v-card>
      <v-card-title class="text-h6" style="background-color: #9D84BF; color: white;">
        {{ title }}
      </v-card-title>
      <v-card-text class="py-5 px-6 text-body-1">
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <Button text="Ok" icon="done" outlined @click="onConfirm" />
        <Button text="Cancel" icon="close" outlined @click="onCancel" />
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Button } from '../Common'

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  components: {
    Button
  },
  computed: {
    visible: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    onConfirm () {

    },
    onCancel () {
      this.visible = false
    }
  }
}
</script>

<style>

</style>