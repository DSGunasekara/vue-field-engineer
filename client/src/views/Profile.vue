<template>
  <v-container>
            <h1 class="subheading grey--text">Profile</h1>
            <v-row>
                <v-col cols="12" md="4">
                    <UserDetails/>
                </v-col>
                <v-col cols="12" md="8">
<!--                    <v-card >Job list</v-card>-->
                    <ProfileJobs/>
                </v-col>
            </v-row>
            
  </v-container>
</template>

<script>

import UserDetails from '../components/UserDetails'
import ProfileJobs from "@/components/Engineers/ProfileJobs";

export default {
    name:"Profile",
    components:{
        UserDetails,
        ProfileJobs
    }
}
</script>

<style>

</style>