<template>
  
            <router-view />

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
