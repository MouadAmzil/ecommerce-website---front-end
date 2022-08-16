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
              <v-app class="bg">
                <router-view />
              </v-app>
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
.form {
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
