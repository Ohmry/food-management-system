<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined style="color: #9D84BF" v-bind="attrs" v-on="on" :class="[className]">
        <v-icon class="mr-2" color="#9D84BF" v-text="icon"></v-icon>
          {{ text }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>New Material</v-card-title>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <Button text="Update" icon="done" depressed color="white" @click="onUpdate"/>
        <Button text="Close" icon="close" depressed color="white" @click="onClose"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Button from '../Common/Button'

export default {
  props: ['text', 'icon', 'className'],
  components: {
    Button
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    onUpdate () {
      this.$emit('update')
    },
    onClose () {
      this.dialog = false
    }
  }
}
</script>

<style>

</style>