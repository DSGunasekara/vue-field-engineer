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
      <Logout v-if="isLoggedIn()"/>
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
        <AddJob/>
      </v-list>
    </v-navigation-drawer>
  </nav>
  
</template>

<script>
import { mapGetters } from "vuex";
import Logout from '../Logout'
import AddJob from '../AddJob'


export default {
  name: "Navbar",
  components:{
    Logout,
    AddJob
  },
  methods: {
    ...mapGetters(["isLoggedIn"]),
  },
  data() {
    return {
      drawer: null,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "Jobs", route: "/jobs" },
        { icon: "mdi-account-group", text: "Engineers", route: "/engineers" },
        { icon: "mdi-account", text: "Profile", route: "/profile" },
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