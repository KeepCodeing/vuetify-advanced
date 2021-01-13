<template>
  <v-container>
    <v-toolbar
      flat
      color="grey lighten-4"
    >
      <v-toolbar-title>
        Vuetify Project
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="item.path" text v-for="item in tabs">{{ item.tab }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        tabs: [
          { path: '/home', tab: 'Home' },
          { path: '/record', tab: 'Record' },
          { path: '/about', tab: 'About' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
