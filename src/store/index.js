import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materials: [
      { name: 'Burger Burn', purchaseUnit: 'Box', purchasePrice: 18000, stockUnit: 'Each', stockConversionQuantity: 500, stockUnitPrice: 36 },
      { name: 'Patty', cost: 530 },
      { name: 'Lettuce', cost: 70 },
      { name: 'Tomato', cost: 45 },
      { name: 'Burger Sauce', cost: 15 },
      { name: 'Pickle', cost: 25 },
      { name: 'Wrapping Paper', cost: 10 },
      { name: 'Potato', cost: 75 },
      { name: 'French Fries Box', cost: 15 },
      { name: 'Ketchup', cost: 5 },
      { name: 'Coke Cup', cost: 5 },
      { name: 'Straw', cost: 2 },
      { name: 'Coke Syrup', cost: 10 },
      { name: 'Hotdog Burn', cost: 130 },
      { name: 'Sausage', cost: 75 },
      { name: 'Mustard Sauce', cost: 20 },
      { name: 'Sandwich Bread', cost: 100 },
      { name: 'Slice Ham', cost: 120 },
      { name: 'Slice Cheese', cost: 100 },
      { name: 'Fried Eggs', cost: 75 },
      { name: 'Mayonnaise', cost: 35 }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
