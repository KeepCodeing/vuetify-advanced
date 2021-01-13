<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
      <v-app-bar-nav-icon class="hidden-md-and-up"  @click="drawer = !drawer" />

      <NavBar />
    </v-app-bar>
    <!--  这里偷懒把抽屉直接写在App里了，更好的做法是写成一个组件用vuex控制，whatever  -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="white"
      app
    >
      <v-list
        class="py-0"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
            <v-list-item-subtitle>Vuetify-Photo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="item in items"
          :key="item.path"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    },

    data: () => ({
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-folder', path: '/home' },
        { title: 'Message', icon: 'mdi-folder', path: '/record' },
        { title: 'About', icon: 'mdi-folder', path: '/about' },
      ]
    }),
  };
</script>
