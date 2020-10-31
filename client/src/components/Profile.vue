<template>
  <v-container>
            <h1 class="subheading grey--text">Profile</h1>
            <v-row>
                <v-col cols="12" md="4">
                    <UserDetails/>
                </v-col>
                <v-col cols="12" md="8">
                    <v-card >Job list</v-card>
                </v-col>
            </v-row>
            
  </v-container>
</template>

<script>

import UserDetails from './UserDetails'

export default {
    name:"Profile",
    components:{
        UserDetails
    }
}
</script>

<style>

</style>