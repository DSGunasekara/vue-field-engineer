<template>
  <v-app>
    <Navbar />
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
