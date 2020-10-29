<template>
  <v-container>
    <h1 class="subheading grey--text">Login</h1>
    <v-layout row justify-center >
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
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    email: "",
    password: "",
    show1: false,
  }),
};
</script>

<style>
</style>