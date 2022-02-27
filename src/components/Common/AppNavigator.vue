<template>
  <v-navigation-drawer app mini-variant mini-variant-width="80" color="#F2F2F2">
    <!-- Logo -->
    <v-avatar class="d-block text-center mx-auto mt-4" size="52">
      <v-icon color="#9D84BF" size="52" @click="redirect('https://github.com/Ohmry/food-management-system')">fab fa-github</v-icon>
    </v-avatar>
    <v-divider class="mx-3 my-3"></v-divider>
    <v-list flat>
      <router-link v-for="(item, index) in menuItems" :key="index" :to="item.title">
        <v-list-item :ripple="false" active-class="menu-selected" class="mb-1">
          <v-list-item-icon>
            <v-icon v-text="item.icon" size="32" light></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    currentMenuItem: 0, 
    menuItems: [
      { title: 'DashBoard', icon: 'dashboard' },
      { title: 'Material', icon: 'local_shipping' },
      { title: 'Food', icon: 'restaurant' },
      // { title: 'Sales', icon: 'attach_money' },
      // { title: 'Stock', icon: 'store' }
    ]
  }),
  methods: {
    redirect (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
  .v-list > a {
    color: transparent !important;
  }
  .router-link-active > .v-list-item {
    margin: 0 8px;
    background: #9D84BF;
    text-decoration: none;
    border-radius: 50%;
  }
  .router-link-active > .v-list-item > .v-list-item__icon > i{
    color: white !important;
  }
</style>