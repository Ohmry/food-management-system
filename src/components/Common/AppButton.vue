<template>
  <v-btn 
    @click="onClick"
    :style="buttonStyle"
    :outlined="outlined"
    :depressed="depressed"
    :color="color"
    :fab="fab"
    :small="small"
  >
    <v-icon :class="{ 'mr-2': this.text != null }" :color="this.color" v-text="icon" :size="iconSize"></v-icon>
      {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: ['text', 'icon', 'outlined', 'depressed', 'color', 'fab', 'small', 'white', 'iconSize'],
  computed: {
    buttonStyle: {
      get () {
        return {
          color: this.white != undefined ? '#FFFFFF' : '#9D84BF',
          backgroundColor: 'transparent'
        }
      }
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>