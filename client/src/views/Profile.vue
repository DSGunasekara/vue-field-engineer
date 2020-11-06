<template>
  <v-container>
            <h1 class="subheading grey--text">Profile</h1>
            <v-row>
                <v-col cols="12" md="4">
                    <UserDetails/>
                </v-col>
                <v-col cols="12" md="8">
<!--                    <v-card >Job list</v-card>-->
                    <Calendar/>
<!--                    <ProfileJobs/>-->
                </v-col>
            </v-row>

  </v-container>
</template>

<script>

import UserDetails from '../components/UserDetails'
// import ProfileJobs from "@/components/Engineers/ProfileJobs";
import Calendar from "@/components/Calendar";

export default {
    name:"Profile",
    components:{
        UserDetails,
        // ProfileJobs,
       Calendar
    }
}
</script>

<style>

</style>
