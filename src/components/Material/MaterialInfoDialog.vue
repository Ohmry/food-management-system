<template>
  <v-dialog
    :value="visible"
    @input="visible = $event"
    max-width="600px"
    persistent>
    <v-card>
      <v-card-title class="text-h5 px-9 pt-5" style="color: #9D84BF">{{ title }}</v-card-title>
      <v-card-subtitle class="py-1 px-9">{{ description }}</v-card-subtitle>
      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.name" required label="Name" clearable
                            :rules="rules.name" type="text"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-select v-model="form.purchaseUnit" :items="select.purchaseUnit" required label="Purchas Unit" />
                <v-select v-model="form.stockUnit" :items="select.stockUnit" required label="Stock Unit" />
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field v-model="form.purchasePrice" required 
                          type="number" hide-spin-buttons 
                          :rules="rules.purchasePrice" 
                          label="Purchase Price" 
                          @change="updatePurchasePrice"/>
                <v-text-field v-model="form.stockConversionQuantity" required 
                          type="number" hide-spin-buttons 
                          :rules="rules.stockConversionQuantity"
                          label="Stock Conversion Quantity" 
                          @change="updateStockConversionQuantity"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <AppCurrencyField v-model.number="form.supplyPrice" disabled label="Supply Price" />
                <AppCurrencyField v-model.number="form.valueAddedTax" disabled label="Value Added Tax" />
                <v-text-field v-model="form.stockUnitPrice" disabled type="number" label="Stock Unit Price" />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <AppButton v-if="mode == 'new'" text="Save" icon="done" depressed color="white" @click.stop="onSave"/>
        <AppButton v-if="mode == 'update'" text="Update" icon="done" depressed color="white" @click.stop="onUpdate"/>
        <AppButton text="Close" icon="close" depressed color="white" @click.stop="onClose(false)"/>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { AC_SAVE_MATERIAL, AC_UPDATE_MATERIAL } from '../../store/mutation-types'

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    mode: {
      required: true
    },
    material: undefined
  },
  watch: {
    visible (to) {
      if (to && this.mode == 'update') {
        this.form = JSON.parse(JSON.stringify(this.material))
      }
    }
  },
  computed: {
    title: {
      get () {
        switch (this.mode) {
          case 'new':
            return 'New Material'
          case 'update':
            return 'Material Info'
          default:
            return 'Material Info'
        }
      }
    },
    description: {
      get () {
        switch (this.mode) {
          case 'new':
            return 'you can create new material item'
          case 'update':
            return 'you can modify the material item'
          default:
            return 'you can see material info'
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
  data: () => ({
    form: {
      name: undefined,
      purchaseUnit: undefined,
      purchasePrice: undefined,
      stockUnit: undefined,
      stockConversionQuantity: undefined,
      supplyPrice: undefined,
      valueAddedTax: undefined,
      stockUnitPrice: undefined
    },
    rules: {
      name: [val => (val || '').length > 0 || 'This field is required'],
      purchasePrice: [val => val > 0 || 'Purchase price should be over than 0'],
      stockConversionQuantity: [quantity => quantity > 0 || 'Quantity should be over than 0']
    },
    select: {
      purchaseUnit: ['Box', 'Kg', 'Pack', 'L'],
      stockUnit: ['Each', 'g', 'ml']
    }
  }),
  methods: {
    onSave () {
      let validate = this.$refs.form.validate()
      if (!validate) return
      this.$store.dispatch(AC_SAVE_MATERIAL, JSON.parse(JSON.stringify(this.form)))
      this.onClose(true)
    },
    onUpdate () {
      let validate = this.$refs.form.validate()
      if (!validate) return
      this.$store.dispatch(AC_UPDATE_MATERIAL, JSON.parse(JSON.stringify(this.form)))
      this.onClose(true)
    },
    onClose (refresh) {
      this.visible = false
      this.$refs.form.reset()
      this.$emit('close', refresh)
    },
    updatePurchasePrice (price) {
      if (Number.isInteger(Number(price))) {
        let supplyPrice = Math.round(Number(price) / 1.1)
        let valueAddedTax = price - supplyPrice
        this.form.supplyPrice = supplyPrice
        this.form.valueAddedTax = valueAddedTax
      } else {
        this.form.supplyPrice = undefined
        this.form.valueAddedTax = undefined
      }
      this.updateStockConversionQuantity (this.form.stockConversionQuantity)
    },
    updateStockConversionQuantity (quantity) {
      if (Number.isInteger(Number(quantity)) && Number.isInteger(this.form.supplyPrice)) {
        let stockUnitPrice = Number.parseFloat(this.form.supplyPrice / quantity)
        this.form.stockUnitPrice = stockUnitPrice.toFixed(3)
      } else {
        this.form.stockUnitPrice= undefined
      }
    }
  }
}
</script>

<style>

</style>