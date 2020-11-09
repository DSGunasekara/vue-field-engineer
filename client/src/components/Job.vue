<template>
  <div class="container">
    {{jobView[0]}}
    <v-card>
      <v-row>
        <v-col class="ml-5">Title: {{ jobView[0].title }} </v-col>
      </v-row>
      <v-row>
        <v-col class="ml-5">Description: {{ jobView[0].description }}</v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
      </v-row>
    </v-card>
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
