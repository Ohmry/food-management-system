<template>
  <v-app>
    <v-container fluid>
      <MenuTitle title="Food" description="you can see and manage all food"/>
      <v-row justify="center">
        <v-col cols="12" md="5" style="padding: 20px 30px 10px 30px">
          <v-tabs color="rgba(157, 132, 191)">
            <v-tab>List</v-tab>
          </v-tabs>
          <v-tabs-items>
            <v-data-table :headers="foods.table.headers" :items="foods.table.data" style="user-select: none"
              fixed-header height="70vh" v-model="foods.table.selectedItem">
              <template v-slot:body="{items}">
                <tbody>
                  <tr v-for="item in items" :key="item.name" @click="selectRow('food', item)" :class="{ 'v-data-table-row__selected': item.isSelected, 'v-data-table-row': !item.isSelected }">
                    <td>{{ item.name }}</td>
                    <td class="text-right">{{ item.productType }}</td>
                    <td class="text-right">{{ displayFormat(item.price, 'numeric') }}</td>
                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </v-tabs-items>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <Button text="New" icon="add" />
            <Button text="Edit" icon="edit" class="ml-3"/>
            <Button text="Delete" icon="remove" class="ml-3"/>
          </v-toolbar>
        </v-col>
        <v-col cols="12" md="7" style="padding: 20px 50px 10px 30px">
          <v-tabs v-model="tab.activate" color="rgba(157, 132, 191)">
            <v-tab :disabled="tab.activate != 0">Composition</v-tab>
            <v-tab :disabled="tab.activate != 1">Recipe</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab.activate">
            <v-tab-item>
              <v-data-table :headers="composition.table.headers" :items="composition.table.data" style="user-select: none"
                          fixed-header height="70vh" v-model="composition.table.selectedItem">
                <template v-slot:body="{items}">
                  <tbody>
                    <tr v-for="item in items" :key="item.id" @click="selectRow('composition', item)" :class="{ 'v-data-table-row__selected': item.isSelected, 'v-data-table-row': !item.isSelected }">
                      <td>{{ item.name }}</td>
                      <td>
                        <EditableCell type="text" :target="item" params="quantity"
                          title="Change Quantity" subtitle="Enter the quantity you want"
                          @save="saveCompositionItem" @open="openCompositionItem"/>
                      </td>
                    </tr>
                  </tbody>
                </template>                          
              </v-data-table>
              <v-toolbar flat>
                <v-spacer></v-spacer>
                <Button text="Add" icon="add" />
                <Button text="Edit" icon="edit" class="ml-3" />
                <Button text="Remove" icon="remove" class="ml-3" />
              </v-toolbar>
            </v-tab-item>
            <v-tab-item>
              <v-data-table :headers="recipe.table.headers" :items="recipe.table.data" style="user-select: none"
                          fixed-header height="70vh" v-model="recipe.table.selectedItem">
                <template v-slot:body="{items}">
                  <tbody>
                    <tr v-for="item in items" :key="item.name" @click="selectRow('recipe', item)" :class="{ 'v-data-table-row__selected': item.isSelected, 'v-data-table-row': !item.isSelected }">
                      <td>{{ item.name }}</td>
                      <td>
                        <EditableCell :target="item" params="amount" type="number" title="Change Amount" subtitle="Enter the amount you want" 
                          @save="saveRecipeItem" @open="openReceipeItem"/>
                      </td>
                      <td>{{ item.stockUnit }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
              <v-toolbar flat>
                <v-spacer></v-spacer>
                <Button text="Add" icon="add" />
                <Button text="Edit" icon="edit" class="ml-3" />
                <Button text="Remove" icon="remove" class="ml-3" />
              </v-toolbar>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout" color="rgba(157, 132, 191)" absolute top>
        {{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar.visible = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-app>
</template>

<script>
import MenuTitle from '../components/MenuTitle'
import DisplayFormatUtils from '../components/Utils/DisplayFormatUtils'
import Button from '../components/Button'
import EditableCell from '../components/DataTable/EditableCell'
import { 
        MT_UPDATE_RECIPE,
        MT_UPDATE_COMPOSITION 
       } from '../store/mutation-types'

export default {
  components: {
    MenuTitle,
    Button,
    EditableCell
  },
  mixins: [DisplayFormatUtils],
  data: () => ({
    tab: {
      activate: -1
    },
    snackbar: {
      visible: false,
      text: '',
      timeout: 3000
    },
    foods: {
      table: {
        headers: [
          { text: 'Name', value: 'name', },
          { text: 'Product Type', value: 'productType', width: '130px', align: 'end' },
          { text: 'Price', value: 'price', width: '150px', align: 'end' }
        ],
        data: [],
        selectedItem: []
      },
    },
    composition: {
      table: {
        headers: [
          { text: 'Name', value: 'name', width: '200px' },
          { text: 'Quantity', value: 'quantity', width: '100px' }
        ],
        data: [],
        selectedItem: []
      }
    },
    recipe: {
      table: {
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Amount', value: 'amount', width: '200px' },
          { text: 'Stock Unit', value: 'stockUnit', width: '160px' }
        ],
        data: [],
        selectedItem: []
      }
    }
  }),
  methods: {
    selectRow (type, row) {
      switch (type) {
        case 'food': {
          this.foods.table.data.map(food => {
            if (food.id == row.id) {
              food.isSelected = true
              this.foods.table.selectedItem = [ food ]
              switch (food.productType) {
                case 'Single':
                  this.tab.activate = 1
                  this.loadRecipe(row)
                  break;
                case 'Set':
                  this.tab.activate = 0
                  this.loadComposition(row)
                  break;
                default:
                  this.tab.activate = -1
                  break;
              }
            } else {
              food.isSelected = false
            }
          })
          break;
        }
        case 'composition': {
          this.composition.table.data.map(food => {
            if (food.id == row.id) {
              food.isSelected = true
              this.composition.table.selectedItem = [ food ]
            } else {
              food.isSelected = false
            }
          })
          break;
        }
        case 'recipe': {
          this.recipe.table.data.map(material => {
            if (material.id == row.id) {
              material.isSelected = true
              this.recipe.table.selectedItem = [ material ]
            } else {
              material.isSelected = false
            }
          })
          break;
        }
        default: {
          break;
        }
      }
    },
    loadRecipe (food) {
      let recipe = this.$store.state.recipes.find(recipe => recipe.id == food.id)
      if (recipe == undefined) {
        this.recipe.table.data = []
      } else {
        this.recipe.table.data = recipe.materials.map(material => {
          let info = this.$store.state.materials.find(stuff => stuff.id == material.id)
          if (info != undefined) {
            material.name = info.name
            material.stockUnit = info.stockUnit
          }
          material.isSelected = false
          return material
        })
      }
    },
    loadComposition (food) {
      let composition = this.$store.state.compositions.find(composition => composition.id == food.id)
      if (composition == undefined) {
        this.composition.table.data = []
      } else {
        this.composition.table.data = composition.foods.map(food => {
          let info = this.$store.state.foods.find(stuff => stuff.id == food.id)
          if (info != undefined) {
            food.name = info.name
          }
          food.isSelected = false
          return food
        })
      }
    },
    openReceipeItem (recipe) {
      this.selectRow('recipe', recipe)
    },
    saveRecipeItem (params, value) {
      let material = this.recipe.table.data.find(recipe => recipe.id == this.recipe.table.selectedItem[0].id)
      material[params] = value
      this.$store.commit(MT_UPDATE_RECIPE, { id: this.foods.table.selectedItem[0].id, material: material })
      this.snackbar.text = 'Amount change successful'
      this.snackbar.visible = true
    },
    openCompositionItem (composition) {
      this.selectRow('composition', composition)
    },
    saveCompositionItem (params, value) {
      let food = this.composition.table.data.find(composition => composition.id == this.composition.table.selectedItem[0].id)
      food[params] = value
      this.$store.commit(MT_UPDATE_COMPOSITION, { id: this.foods.table.selectedItem[0].id, food: food})
      this.snackbar.text = 'Quantity change successful'
      this.snackbar.visible = true
    }
  },
  mounted () {
    this.foods.table.data = Array.from(this.$store.state.foods.map(food => {
      return {
        isSelected: false,
        id: food.id,
        name: food.name,
        productType: food.productType,
        price: food.price
      }
    }))

    if (this.foods.table.data.length > 0) {
      this.selectRow('food', this.foods.table.data[0])
    }
  }
}
</script>

<style>
</style>