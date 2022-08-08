import CustomizedAxios from "../../plugins/axios";

const roleModule = {
  state: {
    roles: [],
  },
  mutations: {
    SET_ROLES(state, roles) {
      state.roles = roles;
    },
    ADD_ROLE(state, role) {
      state.roles.push(role);
    },
    DELETE_ROLE(state, role) {
      state.roles = state.roles.filter((c) => c.id != role.id);
    },
    EDIT_ROLE(state, role) {
      state.roles = state.roles.map((c) => {
        if (c.id == role.id) return role;
        return c;
      });
    },

  },
  actions: {
    setROLESAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("role/")
          .then((response) => {
            commit("SET_ROLES", response.data.payload);
            console.log("set role ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setROLEbyIDAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("role/" + id)
          .then((response) => {
            commit("SET_ROLES", response.data.payload);
            console.log("set role ");
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    addUserAction({ commit }, role) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("role/create", role)
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_ROLE", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteRoleAction({ commit }, role) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("role/delete", role)
          .then((response) => {
            commit("DELETE_ROLE", role);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editRoleAction({ commit }, role) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("role/update", role)
          .then((response) => {
            commit("EDIT_ROLE", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getRoles: (state) => {
      return state.roles;
    },

  },
};
export default roleModule;
