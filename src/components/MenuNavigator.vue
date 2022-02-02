<template>
  <v-navigation-drawer app mini-variant mini-variant-width="80" color="#EEEEEE">
    <!-- Logo -->
    <v-avatar class="d-block text-center mx-auto mt-4" size="40">
      <v-icon color="#1697F6" large>fab fa-github</v-icon>
    </v-avatar>
    <v-divider class="mx-3 my-3"></v-divider>
    <v-list flat>
      <v-list-item-group v-model="selectedItem" mandatory @change="changeMenu">
        <v-list-item v-for="(item, index) in menuItems" :key="index" :ripple="false" active-class="menu-selected" class="mb-2">
          <v-list-item-icon>
            <v-icon v-text="item.icon" large></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0, 
    menuItems: [
      { title: 'Dashboard', icon: 'dashboard' },
      { title: 'Material', icon: 'local_shipping' },
      { title: 'Food', icon: 'restaurant' },
      { title: 'Sales', icon: 'attach_money' },
      { title: 'Stock', icon: 'store' }
    ]
  }),
  methods: {
    changeMenu (index) {
      this.$emit('change', this.menuItems[index].title)
    }
  }
}
</script>

<style>
  .menu-selected {
    margin: 0 5px;
    background: #FBFBFB;
    text-decoration: none;
    border-radius: 50%;
  }
</style>