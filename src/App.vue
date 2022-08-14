<template>

  <v-app>
    <router-view />

  </v-app>


</template>
<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
<script>
import Login from './views/Login/LoginView.vue';
import AboutView from './views/HomeView.vue';
import SignUp from './views/Login/SignupView.vue';
import DetailProduit from './views/DetailProduit.vue';

export default {
  name: "App",

  components: {
    Login,
    AboutView,
    SignUp,
    DetailProduit,
  },

  data() {
    return {
      login: false,
    };
  },
};
</script>
