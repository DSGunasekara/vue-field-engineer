<template>
  <div>
    <v-app>
        <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <div>
                <v-tabs v-model="tab" show-arrows background-color="primary" icons-and-text dark grow>
                    <v-tabs-slider color="primary lighten-4"></v-tabs-slider>
                    <v-tab v-for="(i, index) in tabs" :key="index">
                        <v-icon large>{{ i.icon }}</v-icon>
                        <div class="caption py-1">{{ i.name }}</div>
                    </v-tab>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <Login/>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <Register/>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-dialog>
    </v-app>
</div>
</template>

<script>
import Register from '../components/Register'
import Login from '../components/Login'

export default {
    name:"LandingPage",
    components:{
        Login, Register
    },
    data(){
        return{
            dialog:true,
            tab: 0,
            tabs: [
                {name:"Login", icon:"mdi-account"},
                {name:"Register", icon:"mdi-account-outline"}
            ],
        }
    }

}
</script>

<style>

</style>