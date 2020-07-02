<template>
  <v-container>
    <v-row>
      <v-col cols="10" md="5" lg="5">
        <p>Hello User, this is not a real app it's just a simple app for testing. :)</p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" md="5" lg="5">
        <v-btn @click="logOut" color="success" block>Logout</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>
