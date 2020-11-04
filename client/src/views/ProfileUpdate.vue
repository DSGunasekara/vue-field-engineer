<template>
  <v-container>
    <v-row>
      <v-col col="12" md="2" justify-center>
        <v-btn text class="grey--text" :model="user" @click="user = true">
          Update User Details
        </v-btn>
      </v-col>
      <v-col col="12" md="2" justify-center>
        <v-btn text class="grey--text" :model="pass" @click="user = false">
          Update Login</v-btn
        ></v-col
      >
    </v-row>
    <v-row class="justify-center">
      <v-col col="12" md="6">
        <div v-if="user === true">
          <UpdateUserDetails />
        </div>
        <div v-else>
          <UpdatePassword />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateUserDetails from "../components/UpdateUserDetails";
import UpdatePassword from "../components/UpdatePassword";

export default {
  name: "ProfileUpdate",
  components: {
    UpdateUserDetails,
    UpdatePassword,
  },
  data() {
    return {
      user: true,
      pass: false,
    };
  },
};
</script>

<style>
</style>