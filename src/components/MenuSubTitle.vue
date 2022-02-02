<template>
  <v-list two-line flat>
    <v-list-item class="d-block pa-0">
      <v-list-item-title v-text="title" class="text-h5" style="color: #9D84BF"></v-list-item-title>
      <v-list-item-subtitle v-if="description" v-text="description"></v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>

<style>

</style>