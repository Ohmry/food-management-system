<template>
  <v-item v-slot="{active, toggle}">
    <v-card class="d-flex rounded-xl"
      :color="active ? '#58238C' : '#9D84BF'"
      @click="toggle"
      dark height="200">
      <v-row>
        <v-col cols="12" sm="12">
          <v-list-item three-line>
            <v-list-item-content>
              <div>
                <v-icon size="52" v-text="icon"></v-icon>
              </div>
              <v-list-item-subtitle v-text="title" class="text-h6"></v-list-item-subtitle>
              <v-list-item-title class="healine text-h2">
                <strong v-text="value"></strong>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center mt-5">
                  <v-icon large v-text="icon"></v-icon>
                  <span v-text="title" class="text-h5 ml-2" style="vertical-align: middle"></span>
              </v-list-item-title>
              <v-list-item-content class="text-h2">
                <span class="text-center"><strong v-text="value"></strong></span>
              </v-list-item-content>
            </v-list-item-content>
          </v-list-item> -->
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