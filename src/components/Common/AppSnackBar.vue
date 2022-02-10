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
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    text: {
      required: true
    }
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
  }
}
</script>

<style>

</style>