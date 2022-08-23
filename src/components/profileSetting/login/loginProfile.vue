<template>
  <v-container>
    <v-row>
      <v-img class="imgbanner" contain src="../../../assets/brande.png"></v-img>
    </v-row>
    <v-row class="form d-flex justify-center pb-16">
      <v-col class="mt-10" cols="12" md="5" lg="5" sm="6" xl="3">
        <v-text-field
          placeholder="Prepend inner"
          prepend-inner-icon="mdi-account-circle-outline"
          outlined
          v-model="username"
        ></v-text-field>
        <v-text-field
          placeholder="Prepend inner"
          prepend-inner-icon="mdi-lock-outline"
          outlined
          v-model="password"
        ></v-text-field>

        <v-row style="padding-left: 38px">
          <v-col cols="6" md="5" lg="5" sm="6" xl="3">
            <v-btn class="btn" elevation="3 " @click="Login"
              >Login</v-btn
            ></v-col
          >

          <v-col cols="6" md="5" lg="5" sm="6" xl="3">
            <v-btn
              href="SignUp"
              color="blue lighten-3"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Sign Up
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      failedAuth: false,
      logged: false,
      username: null,
      password: null,
    };
  },
  mounted() {
    document.title = "Login";

    this.initialize();
  },
  computed: {
    ...mapGetters(["getUsers", "getUserActive"]),
  },
  watch: {},
  methods: {
    initialize() {
      console.log("xccc");
    },
    Login() {
      console.log("username", this.username);
      console.log("password", this.password);
      var userLogin = {
        username: this.username,
        password: this.password,
      };
      console.log("userLogin", userLogin);

      this.LoginAction(userLogin)
        .then((resolve) => {
          this.logged= true;
          localStorage.setItem("logged", this.logged);
          console.log("user login", resolve);
          this.$router.push({
            name: "modifierProfile",
          });
          this.failedAuth = false;

          window.location.reload();
        })
        .catch(() => {
          this.failedAuth = true;
        });
    },
    ...mapActions([
      "setUsersAction",
      "editUserAction",
      "LoginAction",
      "addUserAction2",
    ]),
  },
};
</script>

<style></style>
