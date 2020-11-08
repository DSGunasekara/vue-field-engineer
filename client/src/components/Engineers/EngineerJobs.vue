<template>
  <div class="dashboard">
    <v-container class="my-5">
      <h1 class="subheading grey--text">Jobs</h1>
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

      <v-card text v-for="(job, index) in availableJobs" :key="index">
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
            <div>{{ job.date | moment }}</div>
          </v-flex>
          <v-flex xs6 sm4 md1>
            <div class="caption grey--text">Rate for an hour</div>
            <div>$ {{ job.rate }}</div>
          </v-flex>
          <v-flex xs6 sm4 md1>
            <div class="caption grey--text">Required no of Engineers</div>
            <div>{{ job.assignedEngineers.length }} / {{ job.requiredEngineers }}</div>
          </v-flex>

          <v-flex xs2 sm4 md1>
            <div class="right ml-5">
              <v-chip small :class="`white--text my-2 caption ${job.status}`">{{
                job.status
              }}</v-chip>
              <!-- <div :class="`${job.status}`">
                {{ job.status }}
              </div> -->
            </div>
          </v-flex>
          <v-flex xs6 sm4 md1>
              <v-btn text class="grey--text" @click="joinJob(job._id)"
                ><v-icon>mdi-{{ check }}</v-icon> Get Job</v-btn
              >
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    <v-snackbar top v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false" :loading="loading"
        >Close</v-btn
        >
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      check: "check",
      snackbar: false,
      loading: false,
      text: '',
    };
  },
  methods: {
    ...mapActions(["fetchJobs", "acceptJob"]),
    sortBy(prop) {
      //TODO: starting need to updated
      this.projects = this.projects.sort((a, b) =>
        a[prop] < b[prop] ? -1 : 1
      );
    },
    joinJob(jobId){
      this.loading =  true
      console.log(jobId);
      console.log(this.getProfile._id);
      const newJob = {
        id: jobId,
        engineer: this.getProfile._id
      }

      this.acceptJob(newJob)
      .then((res)=>{
        this.loading = false
        this.snackbar = true
        this.text = "Assigned to the job"
        console.log(res)
      }).catch((err)=>{
        this.loading = false
        this.snackbar = true
        this.text = "An error occurred"
        console.log(err)
      })
    }
  },
  computed: {
    ...mapGetters(["allJobs", "getProfile"]),
    role() {
      return this.getProfile.role;
    },
    availableJobs(){
      return this.allJobs.filter((job)=>job.status === 'Pending')
    }

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
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
};
</script>

<style>
/*.project.complete {*/
/*  border-left: 4px solid #3cd1c2;*/
/*}*/
/*.project.pending {*/
/*  border-left: 4px solid #ffaa2c;*/
/*}*/
/*.project.overdue {*/
/*  border-left: 4px solid #f83e70;*/
/*}*/
/*.v-chip.complete {*/
/*  background: #3cd1c2;*/
/*}*/
/*.v-chip.pending {*/
/*  background: #ffaa2c;*/
/*}*/
/*.v-chip.overdue {*/
/*  background: #f83e70;*/
/*}*/
</style>
