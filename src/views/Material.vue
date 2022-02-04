<template>
  <v-app>
    <v-container fluid>
      <MenuTitle title="Material" description="you can see and manage all materials"/>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <Button text="New" icon="add" />
        <Button text="Edit" icon="edit" class="ml-3" />
        <Button text="Delete" icon="remove" class="ml-3" />
      </v-toolbar>
      <v-data-table :headers="table.headers" :items="table.data" style="user-select: none">
        <template v-slot:body="{items}">
          <tbody>
            <tr v-for="item in items" :key="item.id" @click="selectRow(item)" :class="{ 'v-data-table-row__selected': item.isSelected, 'v-data-table-row': !item.isSelected }">
              <td>{{ item.name }}</td>
              <td class="text-right">{{ item.purchaseUnit }}</td>
              <td class="text-right">{{ displayFormat(item.purchasePrice, 'numeric') }}</td>
              <td class="text-right">{{ displayFormat(item.supplyPrice, 'numeric') }}</td>
              <td class="text-right">{{ displayFormat(item.valueAddedTax, 'numeric') }}</td>
              <td class="text-right">{{ item.stockUnit }}</td>
              <td class="text-right">{{ displayFormat(item.stockConversionQuantity, 'numeric') }}</td>
              <td class="text-right">{{ displayFormat(item.stockUnitPrice, 'decimal') }}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import MenuTitle from '../components/MenuTitle'
import Button from '../components/Button'
import DisplayFormatUtils from '../components/Utils/DisplayFormatUtils'

export default {
  components: {
    MenuTitle,
    Button
  },
  mixins: [DisplayFormatUtils],
  data: () => ({
    table: {
      headers: [
        // { text: '', value: 'checked', width: '30px', sortable: false },
        { text: 'Name', value: 'name', },
        { text: 'Purchase Unit', value: 'purchaseUnit', width: '160px', align: 'end', sortable: false },
        { text: 'Purchase Price', value: 'purchasePrice', width: '200px', align: 'end', sortable: false },
        { text: 'Supply Price', value: 'supplyPrice', width: '200px', align: 'end', sortable: false },
        { text: 'Value Added Tax', value: 'valueAddedTax', width: '200px', align: 'end', sortable: false },
        { text: 'Stock Unit', value: 'stockUnit', width: '160px', align: 'end', sortable: false },
        { text: 'Stock Conversion Quantity', width: '200px', value: 'stockConversionQuantity', align: 'end', sortable: false },
        { text: 'Stock Unit Price', width: '200px', value: 'stockUnitPrice', align: 'end', sortable: false }
      ],
      data: []
    }
  }),
  methods: {
    selectRow (row) {
      this.table.data.map(item => item.isSelected = item.id == row.id)
    }
  },
  mounted () {
    this.table.data = Array.from(this.$store.state.materials.map(material => {
      return {
        isSelected: false,
        id: material.id,
        name: material.name,
        purchaseUnit: material.purchaseUnit,
        purchasePrice: material.purchasePrice,
        supplyPrice: material.supplyPrice,
        valueAddedTax: material.valueAddedTax,
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