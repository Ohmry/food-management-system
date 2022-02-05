<template>
  <v-dialog
    :value="dialog"
    @input="dialog = $event">
    <v-card>
      <v-card-title>Material Dialog</v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    dialog: {
      type: Object,
      required: true
    }
  },
  computed: {
    dialog: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style>

</style>