<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined style="color: #9D84BF" v-bind="attrs" v-on="on" :class="[className]">
        <v-icon class="mr-2" color="#9D84BF" v-text="icon"></v-icon>
          {{ text }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5" style="color: #9D84BF">New Material</span>
      </v-card-title>
      <v-card-subtitle>
        you can regist new material
      </v-card-subtitle>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <Button text="Save" icon="done" depressed color="white" @click="onSave"/>
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
    onSave () {
      this.$emit('save')
    },
    onClose () {
      this.dialog = false
    }
  }
}
</script>

<style>

</style>