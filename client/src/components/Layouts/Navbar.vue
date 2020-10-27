<template>
  <nav>
    <v-toolbar flat>
      <v-app-bar-nav-icon class="grey--text"></v-app-bar-nav-icon>

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
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
</style>