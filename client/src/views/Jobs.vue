<template>
  <!-- FIXME:Date need to fixed -->
  <div class="dashboard">
    <v-container class="my-5">
      <h1 class="subheading grey--text">Jobs</h1>
      <AddJob />
      <!-- TODO: make this a modal  -->
      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon small left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('due')" v-on="on">
              <v-icon small left>mdi-account-group</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-layout>

      <v-card text v-for="(job, index) in allJobs" :key="index">
        <v-layout row wrap :class="`pa-3 project ml-2 ${job.status}`">
          <v-flex xs12 md2>
            <div class="caption grey--text">Job title</div>
            <div>{{ job.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Location</div>
            <div>{{ job.location }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ job.date }}</div>
          </v-flex>
          <v-flex xs6 sm4 md1>
            <div class="caption grey--text">Rate for an hour</div>
            <div>$ {{ job.rate }}</div>
          </v-flex>
          <v-flex xs6 sm4 md1>
            <div class="caption grey--text">Required no of Engineers</div>
            <div>{{ job.requiredEngineers }}</div>
          </v-flex>

          <v-flex xs2 sm4 md1>
            <div class="right ml-5">
              <v-chip small :class="`white--text my-2 caption ${job.status}`">{{
                job.status
              }}</v-chip>
            </div>
          </v-flex>
          <v-flex xs6 sm4 md1>
            <!-- <v-btn text class="grey--text">
              <v-icon>mdi-file-edit-outline</v-icon> edit</v-btn
            > -->
            <UpdateJob v-bind:job="job" />
          </v-flex>
          <v-flex xs6 sm4 md1>
            <v-btn text class="grey--text" @click="removeJob(job._id)"
              ><v-icon>mdi-delete</v-icon> Delete</v-btn
            >
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import AddJob from "../components/AddJob";
import UpdateJob from "../components/UpdateJob";

export default {
  components: {
    AddJob,
    UpdateJob,
  },
  methods: {
    ...mapActions(["fetchJobs", "deleteJob"]),
    sortBy(prop) {
      //TODO: srting need to updated
      this.projects = this.projects.sort((a, b) =>
        a[prop] < b[prop] ? -1 : 1
      );
    },
    removeJob(id) {
      //TODO: create a modal to asking agree to delete
      this.deleteJob(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    ...mapGetters(["allJobs", "getProfile"]),
    role() {
      //FIXME: adding must be restricted
      return this.getProfile.role;
    },
  },
  created() {
    this.fetchJobs()
      .then(() => {
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.pending {
  border-left: 4px solid #ffaa2c;
}
.project.overdue {
  border-left: 4px solid #f83e70;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.pending {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>