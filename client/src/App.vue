<template class="app">
  <v-app>
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Layouts/Navbar";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app {
  background-color: #3cd1c2;
}
</style>
