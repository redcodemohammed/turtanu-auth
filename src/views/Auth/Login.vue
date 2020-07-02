<template>
  <v-container fill-height>
    <v-row align="center" class="white--text mx-auto" justify="center">
      <v-col class="white--text text-center" cols="12" md="5" xl="5">
        <v-lazy :options="{
          threshold: 1
        }" transition="slide-x-transition">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2">
              <v-sheet
                rounded
                outlined
                color="green"
                width="80%"
                class="v-card--material__heading mb-n6 pa-7"
                elevation="6"
                dark
              >
                <h4>Please enter your email and password</h4>
              </v-sheet>

              <v-form v-model="form" ref="form" class="pa-5" @submit.prevent="login">
                <v-container>
                  <v-row v-if="alert">
                    <v-col cols="12">
                      <v-alert
                        elevation="10"
                        :type="error ? 'error' : 'success'"
                        :value="alert"
                      >{{alertMessage}}</v-alert>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      prepend-icon="mdi-email"
                      name="email"
                      type="email"
                      label="Email"
                      id="email"
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      prepend-icon="mdi-lock-question"
                      name="password"
                      :type="seen ? 'text' : 'password'"
                      label="Password"
                      id="password"
                      :append-icon="seen ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="togglePassword"
                    ></v-text-field>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                      color="grey"
                      :loading="loading"
                      :disabled="!form"
                      class="mx-2"
                      outlined
                      type="submit"
                      block
                    >
                      <span class="grey--text text--darken-1">Login</span>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-form>
            </v-card>
          </v-hover>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import http from "../../plugins/http";

let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
);
export default {
  data: () => ({
    seen: false,
    form: false,
    email: "",
    emailRules: [
      v => !!v || "Required",
      v => emailRegex.test(v) || "Email address is invalid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Required",
      v =>
        passwordRegex.test(v) ||
        "Should be 8 characters length, and contains letters and numbers."
    ],
    loading: false,
    alert: false,
    alertMessage: "",
    error: false
  }),
  methods: {
    togglePassword() {
      this.seen = !this.seen;
    },
    async login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        // let { email, password } = this;
        setTimeout(() => {
          this.loading = false;
          this.error = false;
          this.alert = true;
          this.alertMessage = "تم الدخول بنجاح";
          this.$store.dispatch("setToken", "testToken");
          this.$router.push("/");
        }, 3000);
      }
    }
  }
};
</script>

<style lang="sass">
.v-card--material
  &__heading
    position: relative
    top: -40px
    left: 10%
    transition: .3s ease
    z-index: 1
</style>
