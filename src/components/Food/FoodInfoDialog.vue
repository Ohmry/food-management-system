<template>
  <v-dialog
    persistent
    max-width="600px"
    :value="visible"
    @input="visible = $event">
    <v-card>
      <v-card-title class="text-h5 px-9 pt-5" style="color: #9d84bf">{{ title }}</v-card-title>
      <v-card-subtitle class="py-1 px-9">{{ description }}</v-card-subtitle>
      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12" md="12" class="pb-0">
                <v-text-field v-model="form.name" required label="Name" clearable type="text"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="pt-0">
              <v-col cols="12" md="3" class="pt-0">
                <v-select v-model="form.productType" required label="Product Type" :items="select.productType"></v-select>
              </v-col>
              <v-col cols="12" md="9" class="pt-0">
                <v-text-field v-model="form.price" required label="Price" type="number" :rules="rules.price" hide-spin-buttons></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-tabs v-model="tab.activate" color="rgba(157, 132, 191)">
                <v-tab :disabled="tab.activate != 0">Composition</v-tab>
                <v-tab :disabled="tab.activate != 1">Recipe</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab.activate">
                <v-tab-item>
                  <v-data-table :headers="tab.composition.headers" 
                    fixed-header height="300px" v-model="tab.composition.selectedItem">
                  </v-data-table>
                </v-tab-item>
                <v-tab-item>
                  <v-data-table :headers="tab.recipe.headers" 
                    fixed-header height="300px" v-model="tab.recipe.selectedItem">
                  </v-data-table>
                </v-tab-item>
              </v-tabs-items>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <AppButton text="Add" icon="add" depressed />
        <AppButton text="Delete" icon="remove" depressed />
        <v-spacer></v-spacer>
        <AppButton v-if="mode == 'new'" text="Save" icon="done" depressed @click.stop="onSave" />
        <AppButton v-if="mode == 'update'" text="Update" icon="done" depressed @click.stop="onUpdate" />
        <AppButton text="Close" icon="close" depressed color="white" @click.stop="onClose(false)" />
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
    },
    mode: {
      required: true
    },
    food: undefined
  },
  data: () => ({
    form: {
      name: undefined,
      productType: undefined,
      price: undefined,
      composition: [],
      recipe: []
    },
    tab: {
      activate: 1,
      composition: {
        headers: [
          { text: 'Name', value: 'name', width: '200px' },
          { text: 'Quantity', value: 'quantity', width: '100px' }
        ],
        selectedItem: null
      },
      recipe: {
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Amount', value: 'amount', width: '200px' },
          { text: 'Stock Unit', value: 'stockUnit', width: '160px' }
        ],
        selectedItem: null
      }
    },
    rules: {
      required: [val => (val || '').length > 0 || 'This field is required'],
      price: [val => val > 0 || 'Price should be over than 0']
    },
    select: {
      productType: ['Single', 'Set']
    }
  }),
  watch: {
    visible (to) {
      if (to == true) {
        switch (this.mode) {
          case 'new': {
            this.form.productType = 'Single'
            break;
          }
          case 'update': {
            this.form = JSON.parse(JSON.stringify(this.food))
            break;
          }
          default: {
            break;
          }
        }
      }
    },
    form : {
      deep: true,
      handler (to) {
        console.log(to)
        switch (to.productType) {
          case 'Single': {
            this.tab.activate = 1
            break;
          }
          case 'Set': {
            this.tab.activate = 0
            break;
          }
          default: {
            this.tab.activate = 0
            break;
          }
        }
      }
    }
  },
  computed: {
    title: {
      get () {
        switch (this.mode) {
          case 'new':
            return 'New Food'
          case 'update':
            return 'Food Info'
          default:
            return 'Food Info'
        }
      }
    },
    description: {
      get () {
        switch (this.mode) {
          case 'new':
            return 'you can create new food item'
          case 'update':
            return 'you can modify the food item'
          default:
            return 'you can see food info'
        }
      }
    },
    visible: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    onSave () {

    },
    onUpdate () {

    },
    onClose (refresh) {
      this.$emit('close', refresh)
    }
  }
}
</script>

<style>

</style>