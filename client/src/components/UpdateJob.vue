<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" text dark v-bind="attrs" v-on="on">
          <v-icon>mdi-file-edit-outline</v-icon> Update Job
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create a Job</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="job.title"
                  label="Job Title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="job.date"
                  label="Date"
                  type="datetime-local"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="job.location"
                  label="Location"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="job.description"
                  label="Description"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="job.lconName"
                  label="Customer Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="job.lconContactNo"
                  label="Customer Contact No"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="job.rate"
                  label="Rate per Hour"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="job.requiredEngineers"
                  label="Required no of engineers"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancelUpdate">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UpdateJob",
  props: ["job"],
  data: () => ({
    dialog: false,
    // name:
  }),
  methods: {
    ...mapActions(["updateJob", "fetchJobs"]),
    submit() {
      const job = {
        id: this.job._id,
        title: this.job.title,
        date: this.job.date,
        location: this.job.location,
        description: this.job.description,
        lconName: this.job.lconName,
        lconContactNo: this.job.lconContactNo,
        rate: this.job.rate,
        requiredEngineers: this.job.requiredEngineers,
      };
      console.log(job);
      this.updateJob(job)
        .then(() => (this.dialog = false))
        .catch((err) => console.log(err));
    },
    cancelUpdate() {
      this.fetchJobs()
        .then(() => (this.dialog = false))
        .catch((err) => console.log(err));
    },
  },
};
</script>
