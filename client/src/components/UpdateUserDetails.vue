<template>    
      <v-card>
        <v-card-title>
          <span class="headline">Update Profile</span>
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field label="Name" v-model="name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" >
                            <v-text-field label="Email" v-model="email"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field label="Passport No" v-model="passportNo" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field label="Contact No" v-model="contactNo" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="State" v-model="state" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                        <v-text-field label="Country" v-model="country" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                    Save
                </v-btn>
                </v-card-actions>
        </v-form>
      </v-card>
</template>

<script>
    import { mapGetters } from 'vuex'
  export default {
      computed:{
          ...mapGetters(['getProfile']),
          },
    data () {
        return {
            dialog: false,
            user: null,
            name: '',
            email: '',
            passportNo: '',
            contactNo: '',
            state: '',
            country: this.getProfile.name

        }
    },
    methods:{
        save(){
            // console.log(this.getProfile.name);
        }
    },
  }
</script>