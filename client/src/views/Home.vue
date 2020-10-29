<template>
  <v-container class="my-5">
    <v-btn text class="grey--text" :model="reg" @click="log = true"
      >Login</v-btn
    >
    <v-btn text class="grey--text" :model="log" @click="log = false"
      >Register</v-btn
    >
    <div v-if="log == false">
      <Register />
    </div>
    <div v-else>
      <Login />
    </div>
  </v-container>
</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";

export default {
  name: "Home",
  components: {
    Register,
    Login,
  },
  data: () => ({
    reg: false,
    log: true,
  }),
};
</script>
