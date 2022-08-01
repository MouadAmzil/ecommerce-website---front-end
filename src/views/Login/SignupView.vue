<template>
  <div class="login">
    <v-container align-center fluid>
      <v-layout fill-height>
        <v-flex xs12>
          <v-row>
            <v-col cols="6" sm="6" md="6" lg="6" xl="6">
              <v-img
                id="img"
                class="mt-10"
                max-height="100%"
                max-width="100%"
                src="../../assets/Group_3897.png"
              ></v-img>
            </v-col>

            <v-col  cols="6" class="bg">
         
              <v-row cols="12">
                <v-col class="mt-10" cols="6" md="5" lg="5" sm="6" xl="3">
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
                    placeholder="FIRSTNAME"
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
                    prepend-inner-icon="mdi-lock"
                    background-color="white"
                    solo
                    dense
                    required
                    class="centered-input shrink mx-4"
                    style="font-size: small; height: 45px; width: 150rem"
                  ></v-text-field>
                  <v-text-field
                    placeholder="PHONENUMBER"
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
                </v-col>
                <v-col class="mt-10" cols="6" md="5" lg="5" sm="6" xl="3">
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
                </v-col>

                <!-- <a id="forget" class=""> Forgot Password ? </a> -->
              </v-row>
              <v-row style="padding-left: 38px">
                <v-col cols="6" md="5" lg="5" sm="6" xl="3">
                  <v-btn class="btn" elevation="3 ">Login</v-btn></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style scoped>
.sec-col {
  padding-top: 130px;
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
  name: "SignUp",
  data() {
    return {};
  },
};
</script>
