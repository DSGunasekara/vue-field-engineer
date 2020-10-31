<template>
  <v-container>
    <h1 class="subheading grey--text">Update Password</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="oldPassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="rePassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, passwordConfirmationRule]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirm Password"
            hint="At least 8 characters"
            counter
            @click:append="show3 = !show3"
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
  name: "UpdatePassword",
  data: () => ({
    valid: true,
    oldPassword: "",
    password: "",
    rePassword: "",
    show1: false,
    show2: false,
    show3: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    snackbar: false,
    text: "",
    loading: false,
  }),
  methods: {
    ...mapActions(["updatePassword"]),
    submit() {
      this.loading = true;
      const user = {
        id: this.getProfile._id,
        oldPassword: this.oldPassword,
        password: this.password,
      };
      this.updatePassword(user)
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.snackbar = true;
          this.text = "password updated succusfully";
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

    passwordConfirmationRule() {
      return () => this.password === this.rePassword || "Password must match";
    },
  },
};
</script>

<style>
</style>