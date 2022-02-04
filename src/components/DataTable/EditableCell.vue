<template>
  <v-edit-dialog :return-value="cellValue" eager large
    @save="onSave"
    @cancel="onCancel"
    @open="onOpen"
  >
    {{ cellValue }}
    <template v-slot:input>
      <v-list two-line flat class="mt-5">
        <v-list-item class="d-block">
          <v-list-item-title class="text-h6" style="color: #9D84BF" v-text="title"></v-list-item-title>
          <v-list-item-subtitle v-text="subtitle"></v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-text-field :type="type" v-model="cellValue"></v-text-field>
        </v-list-item>
      </v-list>
    </template>
  </v-edit-dialog>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'type', 'params', 'target'],
  methods: {
    onSave () {
      this.$emit('save', this.params, this.cellValue)
    },
    onCancel () {
      this.$emit('cancel')
    },
    onOpen () {
      this.$emit('open', this.target)
    }
  },
  data: () => ({
    cellValue: undefined
  }),
  created () {
    this.cellValue = this.target[this.params]
  }
}
</script>

<style>

</style>