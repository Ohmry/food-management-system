<template>
  <v-item v-slot="{active, toggle}">
    <v-card class="d-flex rounded-xl"
      :color="active ? '#58238C' : '#9D84BF'"
      @click="toggle"
      dark height="200"
      style="user-select: none">
      <v-row>
        <v-col cols="12" sm="12">
          <v-list-item three-line>
            <v-list-item-content>
              <div>
                <v-icon size="52" v-text="icon"></v-icon>
              </div>
              <v-list-item-subtitle v-text="title" class="text-h6"></v-list-item-subtitle>
              <v-list-item-title class="healine text-h2 mt-2">
                <strong v-text="value"></strong>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
  </v-item>
</template>

<script>
export default {
  props: ['title', 'icon', 'value']
}
</script>

<style>

</style>