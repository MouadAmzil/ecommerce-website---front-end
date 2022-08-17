import Vue from "vue";
import Vuex from "vuex";

import roleModule from "./models/roleModule";
import usersModule from "./models/usersModule";
import categorieModule from "./models/categorieModule";
import produitsModule from "./models/produitModule";
import commandeModule from "./models/commandeModule";

import VuexPersist from "vuex-persist";


Vue.use(Vuex);
const vuexLocalStorage = new VuexPersist({
  key: "checklistCach",
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
  reducer: (state) => ({
    userModule: state.userModule,
  }),
});
let store = null;
export default function () {
  store = new Vuex.Store({
    modules: {
      usersModule,
      produitsModule,

    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    plugins: [vuexLocalStorage.plugin],
  });
  return store;
}
export { store };
