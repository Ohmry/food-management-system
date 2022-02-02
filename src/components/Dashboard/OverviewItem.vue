<template>
  <v-item v-slot="{active, toggle}">
    <v-card class="d-flex align-center rounded-xl"
      :color="active ? '#1697F6' : 'white'"
      @click="toggle"
      dark height="200">
      <v-row>
        <v-col cols="12" sm="12">
          <v-list-item three-line class="mt-10">
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
  </v-item>
</template>

<script>
export default {

}
</script>

<style>

</style>