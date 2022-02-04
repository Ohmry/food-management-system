<template>
  <v-btn rounded style="color: #9D84BF" @click="onClick">
    <v-icon class="mr-2" color="#9D84BF" v-text="icon"></v-icon>
      {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: ['text', 'icon'],
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>