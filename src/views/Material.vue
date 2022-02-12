<template>
  <v-app>
    <v-container fluid>
      <ViewTitle title="Material" description="you can see and manage all materials"/>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <AppButton text="New" icon="add" outlined @click.stop="openMaterial('new')" />
        <AppButton text="Edit" icon="edit" outlined class="ml-3" @click.stop="openMaterial('update')" />
        <AppButton text="Delete" icon="remove" outlined class="ml-3" @click.stop="deleteMaterial"/>
        <MaterialInfoDialog :mode="dialog.mode" :value="dialog.visible" :material="dialog.material" @input="dialog.visible = $event" @close="onCloseDialog"/>
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
import { MaterialInfoDialog } from '../components/Material'
import { DisplayFormatUtils } from '../components/Utils'
import { AC_DELETE_MATERIAL } from '../store/mutation-types'

export default {
  components: {
    MaterialInfoDialog
  },
  mixins: [DisplayFormatUtils],
  data: () => ({
    dialog: {
      mode: undefined,
      visible: false,
      material: undefined
    },
    confirm: {
      visible: false,
      text: '',
      title: ''
    },
    snackbar: {
      visible: false,
      text: undefined
    },
    table: {
      headers: [
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
    selectMaterials () {
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
    },
    selectRow (row) {
      this.table.data.map(item => item.isSelected = item.id == row.id)
    },
    openMaterial (type) {
      switch (type) {
        case 'new':
          this.dialog.mode = 'new'
          this.dialog.visible = true
          break;
        case 'update': {
          let selectedItem = this.table.data.find(material => material.isSelected == true)
          if (selectedItem == undefined) {
            // this.snackbar.text = "Please select material item you want to edit"
            // this.snackbar.visible = true 
          } else {
            this.dialog.mode = 'update'
            this.dialog.material = selectedItem
            this.dialog.visible = true
          }
          break;
        }
        default:
          break;
      }
    },
    deleteMaterial () {
      let material = this.table.data.find(material => material.isSelected == true)
      if (material == undefined) {
        this.$snackbar({
          text: 'Please select material item you want to delete'
        })
        // this.snackbar.text = "Please select material item you want to delete"
        // this.snackbar.visible = true 
      } else {
        this.$confirm({
          title: "Delete Material Info",
          message: "Are you sure to delete material info?",
          callback: confirm => {
            if (confirm) {
              this.$store.dispatch(AC_DELETE_MATERIAL, JSON.parse(JSON.stringify(material)))
              this.selectMaterials()
            }
          }
        })
      }
    },
    onCloseDialog (refresh) {
      if (refresh) {
        // this.snackbar.text = "Done"
        // this.snackbar.visible = true
        this.selectMaterials()
      }
    }
  },
  mounted () {
    this.selectMaterials()
  }
}
</script>

<style>
</style>