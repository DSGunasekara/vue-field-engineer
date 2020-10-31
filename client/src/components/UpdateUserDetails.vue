<template>
  <v-container>
    <h1 class="subheading grey--text">Update Profile</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="getProfile.name"
            label="Name"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="getProfile.email"
            label="Email"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="getProfile.passportNo"
            label="Passport No"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="getProfile.contactNo"
            label="Contact No"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="getProfile.state"
            label="State"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="getProfile.country"
            label="Country"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row justify-center class="ma-5">
        <v-flex md2>
          <v-btn text class="primary" @click="submit" :loading="loading"
            >Update</v-btn
          >
        </v-flex>
        <v-flex md2>
          <v-btn text class="error" @click="cancel">Cancel</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
    <v-snackbar top v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UpdateUserDetails",
  data: () => ({
    valid: true,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    snackbar: false,
    text: "",
    loading: false,
  }),
  methods: {
    ...mapActions(["updateUser"]),
    submit() {
      this.loading = true;
      const user = {
        id: this.getProfile._id,
        name: this.getProfile.name,
        email: this.getProfile.email,
        passportNo: this.getProfile.passportNo,
        state: this.getProfile.state,
        country: this.getProfile.country,
      };
      this.updateUser(user)
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.snackbar = true;
          this.text = "user updated succusfully";
          this.$router.push("/profile");
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
          this.snackbar = true;
          this.text = "An error occured";
          this.$router.push("/profile");
        });
    },
    cancel() {
      this.$router.push("/profile");
    },
  },
  computed: {
    ...mapGetters(["getProfile"]),
  },
};
</script>

<style>
</style>