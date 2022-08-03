<template>
  <div class="login">
    <v-container align-center fluid>
      <v-layout fill-height>
        <v-flex xs12>
          <v-row class="row">
            <v-col cols="6" sm="6" md="6" lg="6" xl="6">
              <v-img
                id="img"
                class="mt-10"
                max-height="100%"
                max-width="100%"
                src="../../assets/Group_3897.png"
              ></v-img>
            </v-col>

            <v-col align="center" cols="6" class="bg">
              <div class="sec-col">
                <v-img
                  max-height="90%"
                  max-width="20%"
                  src="../../assets/Group.png"
                ></v-img>
              </div>
              <div class="form">
                <v-col class="mt-10" cols="12" md="5" lg="5" sm="6" xl="3">
                  <v-text-field
                    placeholder="USERNAME"
                    prepend-inner-icon="mdi-account"
                    background-color="white"
                    solo
                    dense
                    required
                    class="centered-input shrink mx-4"
                    style="font-size: small; height: 45px; width: 150rem"
                  ></v-text-field>

                  <v-text-field
                    placeholder="PASSWORD"
                    prepend-inner-icon="mdi-lock-outline"
                    background-color="white"
                    solo
                    required
                    dense
                    class="centered-input shrink mx-4"
                    style="font-size: small; width: 150rem; height: 70px"
                  ></v-text-field>
                  <v-row style="padding-left: 38px">
                    <v-col cols="6" md="5" lg="5" sm="6" xl="3">
                      <v-btn class="btn" elevation="3 ">Login</v-btn></v-col
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
              </div>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style scoped>

.row {
  height: 220px;
}
.sec-col {
  padding-top: 130px;
}
.form{
  margin-top: 50px;
}
#img {
  height: 90vh;
}
.bg {
  background: #a4ced1;
}
#forget {
  color: white;
  margin-left: 350px;
  font-size: 15px;
}
.centered-input >>> input {
  text-align: center;
  font-family: "IBM Plex Sans", sans-serif;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 30px !important;
  padding: 0;
}

</style>
<script>
export default {
  name: "login",
  data: () => ({
    dialog: false,
  }),
};
</script>
