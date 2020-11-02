<template>
  <v-container>
    <h1 class="subheading grey--text">Register</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="name"
            label="Name"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="email"
            label="Email"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="passportNo"
            label="Passport No"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="contactNo"
            label="Contact No"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="state"
            label="State"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="country"
            label="Country"
            :rules="[rules.required]"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex md5 class="ma-5">
          <v-text-field
            v-model="password"
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
            v-model="repassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, passwordConfirmationRule]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirm Password"
            hint="At least 8 characters"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around>
        <v-flex md5>
          <v-select
            v-model="role"
            :menu-props="{ offsetY: true }"
            :items="roles"
            label="Roles"
            :rules="[rules.required]"
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout row justify-center class="ma-5">
        <v-flex md2>
          <v-btn text class="primary" @click="submit" :loading="loading"
            >Register</v-btn
          >
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
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      valid: true,
      roles: ["Engineer", "Admin"],
      name: "",
      email: "",
      passportNo: "",
      contactNo: "",
      state: "",
      country: "",
      role: "",
      password: "",
      repassword: "",
      show1: false,
      show2: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      snackbar: false,
      text: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password,
          passportNo: this.passportNo,
          contactNo: this.contactNo,
          state: this.state,
          country: this.country,
          role: this.role,
        };
        console.log(newUser);

        this.registerUser(newUser)
          .then((response) => {
            this.loading = false;
            console.log(response);
            this.snackbar = true;
            this.text = "User registerd";
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            this.loading = false;
            this.snackbar = true;
            this.email = "";
            this.passportNo = "";
            this.password = "";
            this.repassword = "";
            if (error.response.status === 409) {
              this.text = "User already exits";
            } else {
              console.log(error);
              this.text = "An Error occured! Try again";
            }
          });
        // this.registerUser(newUser);
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () => this.password === this.repassword || "Password must match";
    },
  },
};
</script>

<style>
</style>