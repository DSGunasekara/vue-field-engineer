<template>
  <v-container>
    <h1 class="subheading grey--text">Profile</h1>
    <v-row>
        <v-col cols="12" md="4">
            <UserDetails/>
        </v-col>
        <v-col cols="12" md="8">
          <Calendar/>
        </v-col>
    </v-row>
      <ProfileJobs/>
  </v-container>
</template>

<script>

import UserDetails from '../components/UserDetails'
import Calendar from "@/components/Calendar";
import ProfileJobs from "@/components/Engineers/ProfileJobs";

export default {
    name:"Profile",
    components:{
      ProfileJobs,
        UserDetails,
       Calendar
    }
}
</script>

<style>

</style>
