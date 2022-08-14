import CustomizedAxios from "../../plugins/axios";

const panierModule = {
  state: {
    paniers: [],
  },
  mutations: {
    SET_PANIERS(state, paniers) {
      state.paniers = paniers;
    },
    ADD_PANIER(state, panier) {
      state.paniers.push(panier);
    },
    DELETE_PANIER(state, panier) {
      state.paniers = state.paniers.filter((c) => c.id != panier.id);
    },
    EDIT_PANIER(state, panier) {
      state.paniers = state.paniers.map((c) => {
        if (c.id == panier.id) return panier;
        return c;
      });
    },
  },
  actions: {
    setProduitsAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("paniers/")
          .then((response) => {
            commit("SET_PANIERS", response.data.payload);
            console.log("set panier ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setProduitbyIDAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("paniers/" + id)
          .then((response) => {
            commit("SET_PANIERS", response.data.payload);
            console.log("set panier ");
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    addProduitAction({ commit }, panier) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("paniers/create", panier)
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_PANIER", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteProduitAction({ commit }, panier) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("paniers/delete", panier)
          .then((response) => {
            commit("DELETE_PANIER", panier);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editProduitAction({ commit }, panier) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("paniers/update", panier)
          .then((response) => {
            commit("EDIT_PANIER", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addProduitToPanierAction({ commit }, panier) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("paniers/addProduitToPanier", panier)
          .then((response) => {
            commit("EDIT_PANIER", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteProduitToPanierAction({ commit }, panier) {
        return new Promise((resolve, reject) => {
          CustomizedAxios.post("paniers/deleteProduitFromPanier", panier)
            .then((response) => {
              commit("EDIT_PANIER", response.data.payload);
              resolve(response.data.payload);
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
  },
  getters: {
    getProduits: (state) => {
      return state.paniers;
    },
  },
};
export default panierModule;
