<template>
  <v-container class="my-5">
    <v-btn
      text
      class="grey--text"
      :model="reg"
      @click="log = true"
      router
      :to="'/login'"
      >Login</v-btn
    >
    <v-btn
      text
      class="grey--text"
      :model="log"
      @click="log = false"
      router
      :to="'/register'"
      >Register</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    reg: false,
    log: true,
  }),
};
</script>
