<template>
  <v-edit-dialog :return-value.sync="value" eager large
    @save="onSave"
    @cancel="onCancel"
  >
    {{ value }}
    <template v-slot:input>
      <v-list two-line flat class="mt-5">
        <v-list-item class="d-block">
          <v-list-item-title class="text-h6" style="color: #9D84BF" v-text="title"></v-list-item-title>
          <v-list-item-subtitle v-text="subtitle"></v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-text-field v-if="type == 'text'" v-model="value"></v-text-field>
        </v-list-item>
      </v-list>
    </template>
  </v-edit-dialog>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'type'],
  methods: {
    onSave () {
      this.$emit('save')
    },
    onCancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style>

</style>