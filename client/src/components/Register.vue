<template>
  <v-container>
    <h1 class="subheading grey--text">Register</h1>
    <v-form>
      <v-layout row justify-space-around>
        <v-flex md5>
          <v-text-field label="Name"></v-text-field>
        </v-flex>
        <v-flex md5>
          <v-text-field label="Email"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around>
        <v-flex md5>
          <v-text-field label="Passport No"></v-text-field>
        </v-flex>
        <v-flex md5>
          <v-text-field label="Contact No"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around>
        <v-flex md5>
          <v-text-field label="State"></v-text-field>
        </v-flex>
        <v-flex md5>
          <v-text-field label="Country"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex md2>
          <v-btn text class="primary">Register</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>