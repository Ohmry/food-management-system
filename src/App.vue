<template>
  <v-app>
    <AppNavigator />
    <v-main>
      <router-view/>
    </v-main>
    <AppConfirm />
    <AppSnackBar />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created () {
    /** create dummy transaction */
    let foodsCount = this.$store.state.foods.length
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 5; j++) {
        let randomFoodId = Math.floor(Math.random() * (foodsCount - 1) + 1)
        let food = this.$store.state.foods.find(food => food.id == randomFoodId)
        let randomQuantity = Math.floor(Math.random() * 5 + 1)
        this.$store.state.transaction.push({
          transactionId: i + 1,
          saleTime: i,
          foodId: food.id,
          foodName: food.name,
          quantity: randomQuantity,
          totalAmount: food.price * randomQuantity
        })
      }
    }
  }
};
</script>

<style>
  .v-data-table-row:hover {
    background-color: rgba(157, 132, 191, 0.2) !important;
  }
  .v-data-table-row__selected, .v-data-table-row__selected:hover {
    background-color: rgba(157, 132, 191, 0.5) !important;
  }
</style>