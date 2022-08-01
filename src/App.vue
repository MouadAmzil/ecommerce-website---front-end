<template>
  <v-app v-if="login==true" id="inspire">
    <v-app-bar class="pt-3" max-height="90" color="white" flat>
      <v-container class="d-flex justify-center">
          <v-responsive class="pt-6" max-width="750">
          <v-text-field
            height="30"
            rounded
            outlined
            elevation="20px"
            color="grey"
            background-color="white"
            placeholder="search"
            append-icon="mdi-currency-eth"
            
          ></v-text-field>
        </v-responsive>
        
      </v-container>
    </v-app-bar>
    <div class="pt-0">
      <v-row>
        <v-col class="pt-16 ml-5" cols="2">
          <v-sheet class="grey lighten-3 " rounded="lg">
            <v-list color="transparent">
              <v-avatar
                class="mr-10 ma-4"
                color="grey darken-1"
                size="32"
              ></v-avatar>

              <v-list-item v-for="n in 5" :key="n" link>
                <v-list-item-content>
                  <v-list-item-title> List Item {{ n }} </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item link color="grey lighten-4">
                <v-list-item-content>
                  <v-list-item-title> Refresh </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet
            class="pa-6 grey lighten-3 "
            min-height="80vh"
            width="75vw"
            rounded="lg"
          >
            <router-view />
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </v-app>
  
    
    <v-app v-else >
    <SignUp />    
  </v-app>
  
 
</template>

<script> 
import Login from './views/Login/LoginView.vue';
import AboutView from './views/HomeView.vue';
import SignUp from './views/Login/SignupView.vue';

export default {
  name: "App",
components:{
Login,
AboutView,
SignUp,
},
  data() {
    return {
      login: false,
    };
  },
};
</script>
