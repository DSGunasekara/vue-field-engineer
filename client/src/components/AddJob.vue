<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Add a job </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create a Job</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Job Title" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Date" type="date"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Location"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Description" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Customer Name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Customer Contact No"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Rate per Hour"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Required no of engineers"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="engineers"
                  label="Select Engineers to assign"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddJob",
  data: () => ({
    dialog: false,
    engineers: [...this.allEngineers],
  }),
  methods: {
    ...mapActions(["fetchEngineers"]),
  },
  computed: mapGetters(["allEngineers"]),
  created() {
    this.fetchEngineers()
      .then(() => {
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>