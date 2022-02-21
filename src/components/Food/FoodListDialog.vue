<template>
  <v-dialog
    max-width="500px"
    :value="visible"
    @input="visible = $event">
    <v-card>
      <v-card-title class="text-h5 px-9 pt-5" style="color: #9d84bf">Food List</v-card-title>
      <v-card-subtitle class="py-1 px-9">select food that you want to add</v-card-subtitle>
      <v-card-text>
        <v-data-table
          :headers="table.headers"
          :items="table.data"
          :items-per-page="-1"
          :search="table.keyword"
          hide-default-footer
          fixed-header
          height="527px">
          <template v-slot:top>
            <v-text-field v-model="table.keyword" class="px-4" 
              prepend-inner-icon="search"
              clearable
              placeholder="Enter keyword you want to search"></v-text-field>
          </template>
          <template v-slot:item.isSelected="{item}">
            <v-simple-checkbox v-model="item.isSelected" :ripple="false" @click="onSelectItem"></v-simple-checkbox>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <AppButton :text="buttons.add.text" :icon="buttons.add.icon" depressed @click.stop="onAdd"/>
        <AppButton :text="buttons.cancel.text" :icon="buttons.cancel.icon" depressed @click.stop="onCancel"/>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    table: {
      keyword: '',
      headers: [
        { text: '', value: 'isSelected', width: '40px' },
        { text: 'Name', value: 'name', }
      ],
      data: []
    },
    buttons: {
      add: {
        text: 'Add',
        icon: 'add'
      },
      cancel: {
        text: 'Cancel',
        icon: 'close'
      }
    }
  }),
  computed: {
    visible: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  watch: {
    visible (to) {
      if (to) {
        this.selectFoods()
      }
    }
  },
  methods: {
    selectFoods () {
      this.table.data = Array.from(this.$store.state.foods.map(food => {
        return {
          isSelected: false,
          id: food.id,
          name: food.name
        }
      }))
    },
    onSelectItem () {
      let selectedCount = this.table.data.filter(food => food.isSelected == true).length
      this.buttons.add.text = "Add (" + selectedCount + ")"
    },
    onAdd () {
      this.$emit('add', this.table.data.filter(food => food.isSelected == true))
      this.visible = false
    },
    onCancel () {
      this.visible = false
    }
  }
}
</script>

<style>

</style>