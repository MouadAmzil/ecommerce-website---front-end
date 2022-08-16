<template>
<div class="bg">
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
</div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>