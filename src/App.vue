<template>
<<<<<<< HEAD
<v-app>
            <router-view />

</v-app>
=======
  <v-app>
    <router-view />
  </v-app>
>>>>>>> e65523db7022c8e3e0c243c3c6573dcdf715213b
</template>

<script>
import Login from './views/Login/LoginView.vue';
import AboutView from './views/HomeView.vue';
import SignUp from './views/Login/SignupView.vue';
import DetailProduit from './views/DetailProduit.vue';

export default {
  name: "App",
<<<<<<< HEAD
components:{
Login,
AboutView,
SignUp,
DetailProduit
},
=======
  components: {
    Login,
    AboutView,
    SignUp,
  },
>>>>>>> e65523db7022c8e3e0c243c3c6573dcdf715213b
  data() {
    return {
      login: false,
    };
  },
};
</script>
