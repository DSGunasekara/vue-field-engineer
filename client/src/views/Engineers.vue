<template>
  <v-container class="my-5">
    <h1 class="subheading grey--text">Engineers</h1>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg3
        v-for="engineer in allEngineers"
        :key="engineer.name"
      >
        <v-card text class="ma-3">
          <v-responsive class="pt-4 mx-4">
            <v-avatar center size="100" class="grey lighten-2">
              <img src="../assets/profile.jpg" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">
              {{ engineer.engineer.name }}
            </div>
            <div class="grey--text">
              <v-icon small left>mdi-map-marker</v-icon>
              {{ `${engineer.engineer.state}, ${engineer.engineer.country}` }}
            </div>
            <div class="grey--text">
              <v-icon small left>mdi-star</v-icon>
              {{ engineer.rate }}
            </div>
            <div :class="`${engineer.availability} `">
              <v-icon v-if="engineer.availability === 'available'" small left
                >mdi-check</v-icon
              >
              <v-icon v-else small left>mdi-window-close</v-icon>
              {{ engineer.availability }}
            </div>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Engineers",
  methods: {
    ...mapActions(["fetchEngineers"]),
  },
  computed: mapGetters(["allEngineers"]),
  created() {
    this.fetchEngineers();
  },
};
</script>

<style>
.available {
  color: #00c853;
}
.unavailable {
  color: #e53935;
}
</style>
