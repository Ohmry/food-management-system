import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materials: [
      { id: 1, name: 'Bruger Burn', purchaseUnit: 'Box', purchasePrice: 18000, supplyPrice: 16364, valueAddedTax: 1636, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 163.64 },
      { id: 2, name: 'Patty', purchaseUnit: 'Box', purchasePrice: 28000, supplyPrice: 25455, valueAddedTax: 2545, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 848.5 },
      { id: 3, name: 'Lettuce', purchaseUnit: 'Kg', purchasePrice: 13000, supplyPrice: 11818, valueAddedTax: 1182, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 11.818 },
      { id: 4, name: 'Tomato', purchaseUnit: 'Kg', purchasePrice: 9000, supplyPrice: 8182, valueAddedTax: 818, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 8.182 },
      { id: 5, name: 'Burger Sauce', purchaseUnit: 'Kg', purchasePrice: 10000, supplyPrice: 9091, valueAddedTax: 909, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 9.091 },
      { id: 6, name: 'Pickle', purchaseUnit: 'Kg', purchasePrice: 7000, supplyPrice: 6364, valueAddedTax: 636, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 6.364 },
      { id: 7, name: 'Wrapping Paper', purchaseUnit: 'Box', purchasePrice: 11000, supplyPrice: 10000, valueAddedTax: 1000, stockUnit: 'Each', stockConversionQuantity: 300, stockUnitPrice: 33.333 },
      { id: 8, name: 'Potato', purchaseUnit: 'Kg', purchasePrice: 8500, supplyPrice: 7727, valueAddedTax: 773, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 7.727 },
      { id: 9, name: 'French Fries Box', purchaseUnit: 'Box', purchasePrice: 15000, supplyPrice: 13636, valueAddedTax: 1364, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 136.36 },
      { id: 10, name: 'Ketchup', purchaseUnit: 'Kg', purchasePrice: 5500, supplyPrice: 5000, valueAddedTax: 500, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 5 },
      { id: 11, name: 'Coke Cup', purchaseUnit: 'Box', purchasePrice: 8000, supplyPrice: 7273, valueAddedTax: 727, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 242.433 },
      { id: 12, name: 'Straw', purchaseUnit: 'Box', purchasePrice: 3000, supplyPrice: 2727, valueAddedTax: 273, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 27.27 },
      { id: 13, name: 'Coke Syrup', purchaseUnit: 'L', purchasePrice: 10000, supplyPrice: 9091, valueAddedTax: 909, stockUnit: 'ml', stockConversionQuantity: 1000, stockUnitPrice: 9.091 },
      { id: 14, name: 'Hotdog Burn', purchaseUnit: 'Box', purchasePrice: 16000, supplyPrice: 14545, valueAddedTax: 1455, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 145.45 },
      { id: 15, name: 'Sausage', purchaseUnit: 'Kg', purchasePrice: 20000, supplyPrice: 18182, valueAddedTax: 1818, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 18.182 },
      { id: 16, name: 'Mustart Sauce', purchaseUnit: 'Kg', purchasePrice: 12000, supplyPrice: 10909, valueAddedTax: 1091, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 10.909 },
      { id: 17, name: 'Sandwich Bread', purchaseUnit: 'Box', purchasePrice: 14000, supplyPrice: 12727, valueAddedTax: 1273, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 127.27 },
      { id: 18, name: 'Slice Ham', purchaseUnit: 'Box', purchasePrice: 16000, supplyPrice: 14545, valueAddedTax: 1455, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 484.833 },
      { id: 19, name: 'Slice Cheese', purchaseUnit: 'Box', purchasePrice: 15000, supplyPrice: 13636, valueAddedTax: 1364, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 454.533 },
      { id: 20, name: 'Fried Eggs', purchaseUnit: 'Box', purchasePrice: 5000, supplyPrice: 4545, valueAddedTax: 455, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 151.5 },
      { id: 21, name: 'Mayonnaise', purchaseUnit: 'Kg', purchasePrice: 6800, supplyPrice: 6182, valueAddedTax: 618, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 6.182 }
    ],
    foods: [
      { id: 1, name: 'Burger', productType: 'Single', price: 3000 },
      { id: 2, name: 'Hotdog', productType: 'Single', price: 2500 },
      { id: 3, name: 'French Fries', productType: 'Single', price: 1500 },
      { id: 4, name: 'Sandwich', productType: 'Single', price: 2300 },
      { id: 5, name: 'Coke', productType: 'Single', price: 1800 },
      { id: 6, name: 'Burger Set', productType: 'Set', price: 6100 },
      { id: 7, name: 'Hotdog Set', productType: 'Set', price: 4100 },
      { id: 8, name: 'Sandwich Set', productType: 'Set', price: 4000 }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
