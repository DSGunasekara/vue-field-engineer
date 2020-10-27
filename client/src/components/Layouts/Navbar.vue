<template>
  <nav>
    <v-toolbar flat>
      <v-app-bar-nav-icon
        class="grey--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="grey--text">
        404
        <span>NOT_FOUND</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="grey--text">
        <span>Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      dark
      absolute
      temporary
      class="navColor"
    >
      <v-list class="my-2">
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <v-list-item-content>
              {{ link.text }}
            </v-list-item-content>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: null,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "Jobs", route: "/jobs" },
        { icon: "mdi-account-group", text: "Engineers", route: "/engineers" },
      ],
    };
  },
};
</script>

<style scoped>
.v-navigation-drawer.navColor {
  background-color: #f29f3d;
}
</style>