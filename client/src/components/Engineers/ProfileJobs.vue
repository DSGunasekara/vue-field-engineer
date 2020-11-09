<template>
  <div class="dashboard">
    <v-container class="my-5">

      <v-card text v-for="(job, index) in allEngineerJobList" :key="index">
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
<!--          <v-flex xs6 sm4 md1>-->
<!--            <div class="caption grey&#45;&#45;text">Rate for an hour</div>-->
<!--            <div>$ {{ job.rate }}</div>-->
<!--          </v-flex>-->
<!--          <v-flex xs6 sm4 md1>-->
<!--            <div class="caption grey&#45;&#45;text">Required no of Engineers</div>-->
<!--            <div>{{ job.assignedEngineers.length }} / {{ job.requiredEngineers }}</div>-->
<!--          </v-flex>-->

          <v-flex xs2 sm4 md1>
            <div class="right ml-5">
              <v-chip small :class="`white--text my-2 caption ${job.status}`">{{
                  job.status
                }}</v-chip>
            </div>
          </v-flex>
          <v-flex xs6 sm4 md1>
            <v-btn text class="grey--text" @click="viewJob(job._id)"
            ><v-icon>mdi-eye</v-icon> View</v-btn
            >
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
<!--    <v-snackbar top v-model="snackbar">-->
<!--      {{ text }}-->

<!--      <template v-slot:action="{ attrs }">-->
<!--        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false" :loading="loading"-->
<!--        >Close</v-btn-->
<!--        >-->
<!--      </template>-->
<!--    </v-snackbar>-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from "moment";

export default {
  name: "ProfileJobs",
  methods:{
    ...mapActions(["fetchEngineerJobList"]),
    viewJob(jobId){
      console.log(jobId)
      this.$router.push(`/job/${jobId}`)
    }
  },
  mounted() {
    console.log(`hello ${this.getProfile._id}`)
    this.fetchEngineerJobList(this.getProfile._id)
    .then((res)=>{
      console.log(`res ${res}`)
    })
    .catch((err)=>{
      console.log(`err ${err}`)
    })
  },
  computed:{
    ...mapGetters(["allEngineerJobList", "getProfile"])
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  },
}
</script>

<style scoped>

</style>
