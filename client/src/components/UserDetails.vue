<template>
  <v-card>
    <v-list-item>
      <v-list-item-content class="grey--text headline ma-2">
        <v-list-item-title class="headline ma-2">
          <v-icon>mdi-account</v-icon>
          {{ getProfile.name }}
          <span justify>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  class="grey--text"
                  v-on="on"
                  router
                  :to="'/updateUserDetails'"
                >
                  <v-icon>mdi-account-edit</v-icon>
                </v-btn>
              </template>
              <span>Edit your profile</span>
            </v-tooltip>
          </span>
        </v-list-item-title>
        <v-list-item-title class="ma-2">
          <v-icon>mdi-email</v-icon>
          {{ getProfile.email }}
        </v-list-item-title>
        <v-list-item-title class="ma-2">
          <v-icon>mdi-passport</v-icon>
          {{ getProfile.passportNo }}
        </v-list-item-title>
        <v-list-item-title class="ma-2">
          <v-icon>mdi-cellphone</v-icon>
          {{ getProfile.contactNo }}
        </v-list-item-title>
        <v-list-item-title class="ma-2">
          <v-icon>mdi-map-marker</v-icon>
          {{ getProfile.state }}, {{ getProfile.country }}
        </v-list-item-title>

        <v-list-item-title class="ma-2">
          <v-icon>mdi-briefcase</v-icon>
          {{ getProfile.role }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserDetails",
  methods: {
    ...mapActions(["getUser"]),
  },
  computed: {
    ...mapGetters(["getProfile"]),
  },
  created() {
    this.getUser();
  },
};
</script>

<style>
</style>