import CustomizedAxios from "../../plugins/axios";

const categorieModule = {
  state: {
    categories: [],
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORIE(state, categorie) {
      state.categories.push(categorie);
    },
    DELETE_CATEGORIE(state, categorie) {
      state.categories = state.categories.filter((c) => c.id != categorie.id);
    },
    EDIT_CATEGORIE(state, categorie) {
      state.categories = state.categories.map((c) => {
        if (c.id == categorie.id) return categorie;
        return c;
      });
    },
  },
  actions: {
    setCategoriesAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("categories/")
          .then((response) => {
            commit("SET_CATEGORIES", response.data.payload);
            console.log("set categorie ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setCategoriebyIDAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("categories/" + id)
          .then((response) => {
            commit("SET_CATEGORIES", response.data.payload);
            console.log("set categorie ");
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    addCategorieAction({ commit }, categorie) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("categories/create", categorie)
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_CATEGORIE", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteCategorieAction({ commit }, categorie) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("categories/delete", categorie)
          .then((response) => {
            commit("DELETE_CATEGORIE", categorie);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editCategorieAction({ commit }, categorie) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("categories/update", categorie)
          .then((response) => {
            commit("EDIT_CATEGORIE", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getCategories: (state) => {
      return state.categories;
    },
  },
};
export default categorieModule;
