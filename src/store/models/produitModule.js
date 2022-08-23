import CustomizedAxios from "../../plugins/axios";

const produitsModule = {
  state: {
    produits: [],
  },
  mutations: {
    SET_PRODUITS(state, produits) {
      state.produits = produits;
    },
    ADD_PRODUIT(state, produit) {
      state.produits.push(produit);
    },
    DELETE_PRODUIT(state, produit) {
      state.produits = state.produits.filter((c) => c.id != produit.id);
    },
    EDIT_PRODUIT(state, produit) {
      state.produits = state.produits.map((c) => {
        if (c.id == produit.id) return produit;
        return c;
      });
    },
  },
  actions: {
    setProduitsAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("produits/")
          .then((response) => {
            commit("SET_PRODUITS", response.data.payload);
            console.log("set produit ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setProduitsByScrapingAction({ commit },scrapingJumia) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("scraping/jumia",scrapingJumia)
          .then((response) => {
            commit("SET_PRODUITS", response.data.payload);
            console.log("set setProduitsByScrapingAction ");
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setProduitbyIDAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("produits/" + id)
          .then((response) => {
            commit("SET_PRODUITS", response.data.payload);
            console.log("set produit by id");
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    addProduitAction({ commit }, produit) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("produits/create", produit)
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_PRODUIT", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteProduitAction({ commit }, produit) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("produits/delete", produit)
          .then((response) => {
            commit("DELETE_PRODUIT", produit);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editProduitAction({ commit }, produit) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("produits/update", produit)
          .then((response) => {
            commit("EDIT_PRODUIT", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addProduitToPanierAction({ commit }, produit) {
        return new Promise((resolve, reject) => {
          CustomizedAxios.post("produits/addProduitToPanier", produit)
            .then((response) => {
              commit("EDIT_PRODUIT", response.data.payload);
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
      return state.produits;
    },
  },
};
export default produitsModule;
