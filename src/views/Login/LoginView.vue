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

            <v-col align="center" cols="6" class="bg">
              <div class="sec-col">
                <v-img
                  max-height="90%"
                  max-width="20%"
                  src="../../assets/Group.png"
                ></v-img>
              </div>
              <div>
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
                  <v-row  style="padding-left: 38px;">
                    <v-col  cols="6"   md="5" lg="5" sm="6" xl="3">
                      <v-btn class="btn" elevation="3 ">Login</v-btn></v-col
                    >

                    <v-col cols="6" md="5" lg="5" sm="6" xl="3">
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="blue lighten-3" dark v-bind="attrs" v-on="on">
                            Sign Up
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">User Profile</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    label="Legal first name*"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    label="Legal middle name"
                                    hint="example of helper text only on focus"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    label="Legal last name*"
                                    hint="example of persistent helper text"
                                    persistent-hint
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Email*"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Password*"
                                    type="password"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Age*"
                                    required
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-autocomplete
                                    :items="[
                                      'Skiing',
                                      'Ice hockey',
                                      'Soccer',
                                      'Basketball',
                                      'Hockey',
                                      'Reading',
                                      'Writing',
                                      'Coding',
                                      'Basejump',
                                    ]"
                                    label="Interests"
                                    multiple
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-col>
                <!-- <a id="forget" class=""> Forgot Password ? </a> -->
              </div>
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
/* .btn {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 8px;
  text-transform: uppercase;
  padding: 0;
  min-height: 10px !important;
  width: 245px !important;
  margin-top: -40px;
  margin-left: 18px;
} */
</style>
<script>
export default {
  name: "login",
  data: () => ({
    dialog: false,
  }),
};
</script>
