import CustomizedAxios from "../../plugins/axios";

const commandeModule = {
  state: {
    commandes: [],
  },
  mutations: {
    SET_COMMANDES(state, commandes) {
      state.commandes = commandes;
    },
    ADD_COMMANDE(state, commande) {
      state.commandes.push(commande);
    },
    DELETE_COMMANDE(state, commande) {
      state.commandes = state.commandes.filter((c) => c.id != commande.id);
    },
    EDIT_COMMANDE(state, commande) {
      state.commandes = state.commandes.map((c) => {
        if (c.id == commande.id) return commande;
        return c;
      });
    },
  },
  actions: {
    setCommandesAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("commandes/")
          .then((response) => {
            commit("SET_COMMANDES", response.data.payload);
            console.log("set commande ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setCommandebyIDAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("commandes/" + id)
          .then((response) => {
            commit("SET_COMMANDES", response.data.payload);
            console.log("set commande ");
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    addCommandeAction({ commit }, commande) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("commandes/create", commande)
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_COMMANDE", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteCommandeAction({ commit }, commande) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("commandes/delete", commande)
          .then((response) => {
            commit("DELETE_COMMANDE", commande);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editCommandeAction({ commit }, commande) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("commandes/update", commande)
          .then((response) => {
            commit("EDIT_COMMANDE", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    
  },
  getters: {
    getCommandes: (state) => {
      return state.commandes;
    },
  },
};
export default commandeModule;
