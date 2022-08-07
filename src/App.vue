<template>
<v-app>
            <router-view />

</v-app>
</template>

<script> 
import Login from './views/Login/LoginView.vue';
import AboutView from './views/HomeView.vue';
import SignUp from './views/Login/SignupView.vue';
import DetailProduit from './views/DetailProduit.vue';

export default {
  name: "App",
components:{
Login,
AboutView,
SignUp,
DetailProduit
},
  data() {
    return {
      login: false,
    };
  },
};
</script>
