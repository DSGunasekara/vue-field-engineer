
<template>
  <div class="team">
    <v-container class="my-5">
      <h1 class="subheading grey--text">Engineers</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-xs-center ma-3">
            <!-- <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <v-icon left>mdi-account-group</v-icon>
              </v-avatar>
            </v-responsive> -->
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
              <div class="grey--text">{{ person.location }}</div>
              <div class="grey--text">{{ person.availability }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          location: "Negombo",
          availability: "Available",
        },
        {
          name: "Ryu",
          role: "Graphic designer",
          location: "Colombo",
          availability: "Not Available",
        },
        {
          name: "Chun Li",
          role: "Web developer",
          location: "Kandy",
          availability: "Available",
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          location: "Galle",
          availability: "Not Available",
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          location: "Malabe",
          availability: "Available",
        },
      ],
    };
  },
};
</script>