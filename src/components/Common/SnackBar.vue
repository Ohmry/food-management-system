<template>
  <v-snackbar v-model="visible" :timeout="3000">
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
  props: ['text', 'visible']
}
</script>

<style>

</style>