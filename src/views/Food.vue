<template>
  <v-app>
    <v-container fluid>
      <MenuTitle title="Food" description="you can see and manage all food"/>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-tabs color="rgba(157, 132, 191)">
            <v-tab>List</v-tab>
          </v-tabs>
          <v-tabs-items>
            <v-data-table :headers="table.headers" :items="table.data" style="user-select: none">
              <template v-slot:body="{items}">
                <tbody>
                  <tr v-for="item in items" :key="item.name" @click="selectRow(item)" :class="{ 'v-data-table-row__active': item.isSelected, 'v-data-table-row': !item.isSelected }">
                    <td>{{ item.name }}</td>
                    <td class="text-right">{{ item.productType }}</td>
                    <td class="text-right">{{ item.price ? item.price.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') : '' }}</td>
                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </v-tabs-items>
          <v-toolbar flat>
            <v-btn rounded>
              <v-icon class="mr-2">add_circle</v-icon>
                New
            </v-btn>
            <v-btn rounded class="mx-3">
              <v-icon class="mr-2">remove_circle</v-icon>
                Delete
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" md="8">
          <v-tabs v-model="tab.activate" color="rgba(157, 132, 191)">
            <v-tab :disabled="tab.activate != 0">Composition</v-tab>
            <v-tab :disabled="tab.activate != 1">Recipe</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MenuTitle from '../components/MenuTitle'
export default {
  components: {
    MenuTitle
  },
  data: () => ({
    tab: {
      activate: -1
    },
    table: {
      headers: [
        { text: 'Name', value: 'name', },
        { text: 'Product Type', value: 'productType', width: '130px', align: 'end' },
        { text: 'Price', value: 'price', width: '150px', align: 'end' }
      ],
      data: []
    }
  }),
  methods: {
    selectRow (selectedItem) {
      this.table.data.map(item => {
        if (item.id == selectedItem.id) {
          item.isSelected = true
          switch (selectedItem.productType) {
            case 'Single':
              this.tab.activate = 1
              break;
            case 'Set':
              this.tab.activate = 0
              break;
            default:
              this.tab.activate = -1
              break;
          }
        } else {
          item.isSelected = false
        }
      })
    }
  },
  mounted () {
    this.table.data = Array.from(this.$store.state.foods.map(food => {
      return {
        isSelected: false,
        id: food.id,
        name: food.name,
        productType: food.productType,
        price: food.price
      }
    }))

    if (this.table.data.length > 0) {
      this.selectRow(this.table.data[0])
    }
  }
}
</script>

<style>
  .v-data-table-row:hover {
    background-color: rgba(157, 132, 191, 0.2) !important;
    cursor: pointer;
  }
  .v-data-table-row__active, .v-data-table-row__active:hover {
    background-color: rgba(157, 132, 191, 0.5) !important;
  }
</style>