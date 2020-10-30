<template>
  <v-container>
            <h1 class="subheading grey--text">Profile{{ getProfile}}</h1>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name:"Profile",
    methods:{
        ...mapActions(['getUser'])
    },
    computed:{
        ...mapGetters(["getProfile"])
    },
    created(){
        this.getUser()
    }
}
</script>

<style>

</style>