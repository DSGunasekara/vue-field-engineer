<template>
 <div class="container">
   <h1> Job Lists </h1>
   <p>{{getProfile}}</p>
   <p>{{ allEngineerJobList }}</p>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "ProfileJobs",
  methods:{
    ...mapActions(["fetchEngineerJobList"])
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
  }
}
</script>

<style scoped>

</style>
