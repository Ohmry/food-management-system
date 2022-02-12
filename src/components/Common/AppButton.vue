<template>
  <v-btn 
    @click="onClick"
    :style="buttonStyle"
    :outlined="outlined"
    :depressed="depressed"
    :color="color"
  >
    <v-icon class="mr-2" color="#9D84BF" v-text="icon"></v-icon>
      {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: ['text', 'icon', 'outlined', 'depressed', 'color'],
  data: () => ({
    buttonStyle: {
      color: '#9D84BF',
      backgroundColor: 'transparent'
    }
  }),
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>