<template>
  <v-app>
    <v-container fluid>
      <MenuTitle title="Material" description="you can see and manage all materials"/>
      <v-data-table :headers="table.headers" :items="table.data">
        <template v-slot:item.checked="{item}">
          <v-simple-checkbox v-model="item.checked" :ripple="false"></v-simple-checkbox>
        </template>
        <template v-slot:item.purchasePrice="{item}">
          {{ item.purchasePrice ? item.purchasePrice.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') : '' }}
        </template>
        <template v-slot:item.stockConversionQuantity="{item}">
          {{ item.stockConversionQuantity ? item.stockConversionQuantity.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') : '' }}
        </template>
        <template v-slot:item.stockUnitPrice="{item}">
          {{ item.stockUnitPrice ? item.stockUnitPrice.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') : '' }}
        </template>
      </v-data-table>
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
    table: {
      headers: [
        { text: '', value: 'checked', width: '30px', sortable: false },
        { text: 'Name', value: 'name', },
        { text: 'Purchase Unit', value: 'purchaseUnit', width: '160px', align: 'end', sortable: false },
        { text: 'Purchase Price', value: 'purchasePrice', width: '200px', align: 'end', sortable: false },
        { text: 'Stock Unit', value: 'stockUnit', width: '160px', align: 'end', sortable: false },
        { text: 'Stock Conversion Quantity', width: '200px', value: 'stockConversionQuantity', align: 'end', sortable: false },
        { text: 'Stock Unit Price', width: '200px', value: 'stockUnitPrice', align: 'end', sortable: false }
      ],
      data: []
    }
  }),
  mounted () {
    this.table.data = Array.from(this.$store.state.materials.map(material => {
      return {
        checked: false,
        name: material.name,
        purchaseUnit: material.purchaseUnit,
        purchasePrice: material.purchasePrice,
        stockUnit: material.stockUnit,
        stockConversionQuantity: material.stockConversionQuantity,
        stockUnitPrice: material.stockUnitPrice
      }
    }))
  }
}
</script>

<style>

</style>