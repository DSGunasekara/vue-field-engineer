<template>
  <!-- <v-container>
    <h1 class="subheading grey--text">Login</h1>
    <v-layout row justify-center>
      <v-flex md2 class="ma-5">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-flex>
      <v-flex md2 class="ma-5">
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout column align-center>
      <v-flex md2>
        <v-btn text class="primary">Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container> -->
  <v-container>
    <v-form class="justify-center" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        label="Email"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-btn text class="primary" @click="submit" :loading="loading"
        >Login</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    show1: false,
    loading: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  methods: {
    ...mapActions(["login"]),
    submit() {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      console.log(credentials);
      this.login(credentials);
    },
  },
};
</script>

<style>
</style>