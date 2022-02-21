<template>
  <v-dialog
    persistent
    max-width="600px"
    :value="visible"
    @input="visible = $event"
  >
    <v-card>
      <v-card-title class="text-h5 px-9 pt-5" style="color: #9d84bf">{{
        title
      }}</v-card-title>
      <v-card-subtitle class="py-1 px-9">{{ description }}</v-card-subtitle>
      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12" md="12" class="pb-0 pr-8">
                <v-text-field
                  v-model="form.name"
                  required
                  label="Name"
                  clearable
                  type="text"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="pt-0">
              <v-col cols="12" md="3" class="pt-0">
                <v-select
                  v-model="form.productType"
                  required
                  label="Product Type"
                  :items="select.productType"
                  @change="onChangeProductType"
                ></v-select>
              </v-col>
              <v-col cols="12" md="9" class="pt-0 pr-8">
                <v-text-field
                  v-model="form.price"
                  required
                  label="Price"
                  type="number"
                  :rules="rules.price"
                  hide-spin-buttons
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-tabs v-model="tab.activate" color="rgba(157, 132, 191)">
                <v-tab :disabled="tab.activate != 0">Composition</v-tab>
                <v-tab :disabled="tab.activate != 1">Recipe</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab.activate">
                <v-tab-item>
                  <v-data-table
                    :headers="tab.composition.headers"
                    :items="form.composition"
                    :items-per-page="-1"
                    hide-default-footer
                    fixed-header
                    height="300px"
                  >
                    <template v-slot:item.quantity="{ item }">
                      <v-edit-dialog :return-value.sync="item.quantity">
                        {{ item.quantity }}
                        <template v-slot:input>
                          <v-text-field
                            v-model="item.quantity"
                            :rules="rules.quantity"
                            label="Edit"
                            single-line
                            counter
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>
                    <template v-slot:item.isSelected="{ item }">
                      <v-simple-checkbox
                        v-model="item.isSelected"
                        :ripple="false"
                      ></v-simple-checkbox>
                    </template>
                  </v-data-table>
                </v-tab-item>
                <v-tab-item>
                  <v-data-table
                    :headers="tab.recipe.headers"
                    :items="form.recipe"
                    :items-per-page="-1"
                    hide-default-footer
                    fixed-header
                    height="300px"
                    class="pr-5"
                  >
                    <template v-slot:item.amount="{ item }">
                      <v-edit-dialog :return-value.sync="item.amount">
                        {{ item.amount }}
                        <template v-slot:input>
                          <v-text-field
                            v-model="item.amount"
                            :rules="rules.amount"
                            label="Edit"
                            single-line
                            counter
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>
                    <template v-slot:item.isSelected="{ item }">
                      <v-simple-checkbox
                        v-model="item.isSelected"
                        :ripple="false"
                      ></v-simple-checkbox>
                    </template>
                  </v-data-table>
                </v-tab-item>
              </v-tabs-items>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions class="py-4">
        <AppButton text="Add" icon="add" depressed @click.stop="onAdd" />
        <AppButton
          text="Delete"
          icon="remove"
          depressed
          @click.stop="onDelete"
        />
        <v-spacer></v-spacer>
        <AppButton
          v-if="mode == 'new'"
          text="Save"
          icon="done"
          depressed
          @click.stop="onSave"
        />
        <AppButton
          v-if="mode == 'update'"
          text="Update"
          icon="done"
          depressed
          @click.stop="onUpdate"
        />
        <AppButton
          text="Close"
          icon="close"
          depressed
          color="white"
          @click.stop="onClose(false)"
        />
      </v-card-actions>
    </v-card>
    <MaterialListDialog
      :value="dialog.material.visible"
      @input="dialog.material.visible = $event"
      @add="onAddMaterial"
    />
    <FoodListDialog
      :value="dialog.food.visible"
      @input="dialog.food.visible = $event"
      @add="onAddFood"
    />
  </v-dialog>
</template>

<script>
import MaterialListDialog from '../Material/MaterialListDialog'
import FoodListDialog from './FoodListDialog'
import { AC_SAVE_FOOD, AC_UPDATE_FOOD } from '../../store/mutation-types'

export default {
  components: {
    MaterialListDialog,
    FoodListDialog,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    mode: {
      required: true,
    },
    food: undefined,
  },
  data: () => ({
    form: {
      name: undefined,
      productType: undefined,
      price: undefined,
      composition: [],
      recipe: [],
    },
    dialog: {
      material: {
        visible: false,
      },
      food: {
        visible: false,
      },
    },
    tab: {
      activate: 0,
      composition: {
        headers: [
          { text: '', value: 'isSelected' },
          { text: 'Name', value: 'name', width: '300px' },
          { text: 'Quantity', value: 'quantity', width: '170px' },
        ],
      },
      recipe: {
        headers: [
          { text: '', value: 'isSelected' },
          { text: 'Name', value: 'name', width: '200px' },
          { text: 'Amount', value: 'amount', width: '110px' },
          { text: 'Stock Unit', value: 'stockUnit', width: '160px' },
        ],
      },
    },
    rules: {
      required: [(val) => (val || '').length > 0 || 'This field is required'],
      price: [(val) => val > 0 || 'Price should be over than 0'],
      amount: [(val) => val > 0 || 'Amount should be over than 0'],
      quantity: [(val) => val > 0 || 'Quantity should be over than 0'],
    },
    select: {
      productType: ['Single', 'Set'],
    },
  }),
  watch: {
    visible(to) {
      if (to == true) {
        this.form.recipe = []
        this.form.composition = []
        switch (this.mode) {
          case 'new': {
            this.form.productType = 'Set'
            break
          }
          case 'update': {
            this.form = JSON.parse(JSON.stringify(this.food))
            if (this.food.productType == 'Single') {
              this.tab.activate = 1
              this.form.recipe = this.$store.state.recipes.find(recipe => recipe.id == this.food.id).materials
            } else if (this.food.productType == 'Set') {
              this.tab.activate = 0
              this.form.composition = this.$store.state.compositions.find(composition => composition.id == this.food.id).foods
            }
            break
          }
          default: {
            break
          }
        }
      }
    },
  },
  computed: {
    title: {
      get() {
        switch (this.mode) {
          case 'new':
            return 'New Food'
          case 'update':
            return 'Food Info'
          default:
            return 'Food Info'
        }
      },
    },
    description: {
      get() {
        switch (this.mode) {
          case 'new':
            return 'you can create new food item'
          case 'update':
            return 'you can modify the food item'
          default:
            return 'you can see food info'
        }
      },
    },
    visible: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    onChangeProductType(value) {
      if (value == 'Single') {
        this.tab.activate = 1
        this.form.composition = []
      } else if (value == 'Set') {
        this.tab.activate = 0
        this.form.recipe = []
      }
    },
    onAdd() {
      if (this.form.productType == 'Single') {
        this.dialog.material.visible = true
      } else if (this.form.productType == 'Set') {
        this.dialog.food.visible = true
      }
    },
    onAddMaterial(materials) {
      this.form.recipe = materials.map((material) => {
        return {
          isSelected: false,
          id: material.id,
          name: material.name,
          amount: 1,
          stockUnit: material.stockUnit,
        }
      })
    },
    onAddFood(foods) {
      this.form.composition = foods.map((food) => {
        return {
          isSelected: false,
          id: food.id,
          name: food.name,
          quantity: 1,
        }
      })
    },
    onDelete() {
      switch (this.form.productType) {
        case 'Single': {
          this.form.recipe
            .filter((material) => material.isSelected == true)
            .map((selectedItem) => {
              this.form.recipe.splice(
                this.form.recipe.findIndex(
                  (material) => material.id == selectedItem.id
                ),
                1
              )
            })
          break
        }
        case 'Set': {
          this.form.composition
            .filter((food) => food.isSelected == true)
            .map((selectedItem) => {
              this.form.composition.splice(
                this.form.composition.findIndex(
                  (food) => food.id == selectedItem.id
                ),
                1
              )
            })
          break
        }
        default: {
          break
        }
      }
    },
    onSave() {
      let validate = this.$refs.form.validate()
      if (!validate) return
      this.$store.dispatch(AC_SAVE_FOOD, JSON.parse(JSON.stringify(this.form)))
      this.onClose(true)
    },
    onUpdate() {
      let validate = this.$refs.form.validate()
      if (!validate) return
      this.$store.dispatch(
        AC_UPDATE_FOOD,
        JSON.parse(JSON.stringify(this.form))
      )
      this.onClose(true)
    },
    onClose(refresh) {
      this.$emit('close', refresh)
      this.$refs.form.reset()
    },
  },
}
</script>

<style></style>
