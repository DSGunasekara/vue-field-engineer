<template>
    <v-container class="my-5">
        <h1 class="subheading grey--text">Engineers</h1>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="engineer in engineers" :key="engineer.name">
            <v-card text class="text-xs-center ma-3">
              <v-card-text>
                <div class="subheading">{{ engineer.name }}</div>
                <div class="grey--text">{{ engineer.location }}</div>
                <div class="grey--text">{{ engineer.rating }}</div>
                <div class="grey--text">{{ engineer.availability }}</div>
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
</template>

<script>
export default {
    data() {
        return {
            engineers: [
                { name: "Dilain", location: "Galle", rating: "4.1", availability: "available" },
                { name: "Gunasekara", location: "Colombo", rating: "4.1", availability: "unavailable" },
                { name: "Jon", location: "London", rating: "3.1", availability: "available" },
                { name: "Cena", location: "Kandy", rating: "4.8", availability: "unavailable" },
                { name: "Mike", location: "DC", rating: "4.3", availability: "available" },
            ]
        }
    },
}
</script>

<style>

</style>