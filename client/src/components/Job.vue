<template>
  <div class="container">
<!--    {{jobView[0]}}-->
    <v-card>
      <v-row>
        <v-col class="ml-5 " cols="auto">Title: </v-col>
        <v-col cols="auto" class="font-weight-bold">{{ jobView[0].title }} </v-col>
      </v-row>
      <v-row>
        <v-col class="ml-5" cols="auto">Description: </v-col>
        <v-col cols="auto" class="font-weight-bold">{{ jobView[0].description }}</v-col>
      </v-row>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-bold">Assigned Engineers</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="ml-5" v-for="engineer in jobView[0].assignedEngineers" :key="engineer._id">
              <v-col><v-icon>mdi-face</v-icon> {{ engineer.user.name }}</v-col>
              <v-col><v-icon>mdi-email</v-icon> {{ engineer.user.email }}</v-col>
              <v-col><v-icon>mdi-cellphone-android</v-icon>{{ engineer.user.contactNo }}</v-col>
              <v-col><v-icon>mdi-star</v-icon>{{ engineer.rate }}</v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-row>
        <v-col class="ml-5" cols="auto">Location: </v-col>
        <v-col cols="auto" class="font-weight-bold">{{ jobView[0].location }}</v-col>
      </v-row>
      <v-row>
        <v-col class="ml-5" cols="auto">Rate for an hour: </v-col>
        <v-col class="font-weight-bold" cols="auto">${{ jobView[0].rate }}</v-col>
      </v-row>
      <v-row>
        <v-col class="ml-5" cols="auto">Customer Name: </v-col>
        <v-col class="font-weight-bold" cols="auto">{{ jobView[0].lconName }}</v-col>
      </v-row>
      <v-row>
        <v-col class="ml-5" cols="auto">Customer Contact No: </v-col>
        <v-col class="font-weight-bold" cols="auto">{{ jobView[0].lconContactNo }}</v-col>
      </v-row>
    </v-card>
    <h1 style="text-align: center">Job Timeline</h1>
<!--    <v-timeline>-->
<!--      <v-timeline-item-->
<!--          v-for="n in 4"-->
<!--          :key="n"-->
<!--          large-->
<!--      >-->
<!--        <template v-slot:icon>-->
<!--          <v-avatar>-->
<!--            <img src="http://i.pravatar.cc/64">-->
<!--          </v-avatar>-->
<!--        </template>-->
<!--        <template v-slot:opposite>-->
<!--          <span>Tus eu perfecto</span>-->
<!--        </template>-->
<!--        <v-card class="elevation-2">-->
<!--          <v-card-title class="headline">-->
<!--            Lorem ipsum-->
<!--          </v-card-title>-->
<!--          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>-->
<!--        </v-card>-->
<!--      </v-timeline-item>-->
<!--    </v-timeline>-->


  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Job",
  date(){
    return {
    job: null
    }
  },
  methods:{
    ...mapActions(["fetchEngineerJobList"])
  },
  computed:{
    ...mapGetters(["allEngineerJobList"]),
    jobView(){
      return this.allEngineerJobList.filter(job=> job._id === this.$route.params.id)
    }
  },
  created() {
    // this.fetchEngineerJobList()
    // .then((res)=>{
    //   console.log(res)
    // }).catch((err)=>{
    //   console.log(err)
    // })
  }

}
</script>

<style scoped>

</style>
