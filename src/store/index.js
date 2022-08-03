import Vue from 'vue'
import Vuex from 'vuex'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login/LoginView.vue'
import SignUp from '../views/Login/SignupView.vue'
import VuexPersist from "vuex-persist";

Vue.use(Vuex)

Vue.use(Vuex);
 const vuexLocalStorage = new VuexPersist({
  key: "checklistCach",
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
  reducer: (state) => ({
    usersModule: state.usersModule,
  }),
}); 
let store = null;
export default function(){
  store = new Vuex.Store({
    modules: {
      HomeView,
      Login,
      SignUp,
    },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin],

});
return store;
}
export { store };
