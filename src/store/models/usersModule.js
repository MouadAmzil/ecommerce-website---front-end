import CustomizedAxios from "../../plugins/axios";

const usersModule = {
  state: {
    users: [],
    useractive: null,
    token: null,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    LOGIN_USER(state, payload) {
      state.useractive = payload.user;
      state.token = payload.token;

    },
    ADD_USER(state, user) {
      state.users.push(user);
    },
    DELETE_USER(state, user) {
      state.users = state.users.filter((c) => c.id != user.id);
    },
    ADD_ProfileGroupUsers2(state, user) {
      state.users = state.users.map((c) => {
        if (c.id == user.id) 
          c.profile_groups=user.profile_groups;
        return c;
      });    },
    DELETE_ProfileGroupUsers2(state, payload) {
      console.log("pay ",payload);
      state.users = state.users.map((c) => {
        if (c.id == payload.user_id){
          c.profile_groups=c.profile_groups.filter((e)=>{
            return e.id!=payload.profile_group_id
          });
        } 
        return c;
      });
    },
    EDIT_USER(state, user) {
      state.users = state.users.map((c) => {
        if (c.id == user.id) return user;
        return c;
      });
    },
    GET_USERACTIVE(state, useractive) {
      state.useractive = useractive;
    },
  },
  actions: {
    setUsersAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("users/")
          .then((response) => {
            commit("SET_USERS", response.data.payload);
            console.log("set user ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteUserFromProfileGroupAction2({ commit }, payload) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("profilegroup/deleteUserFromProfileGroup", payload)
          .then((response) => {
            console.log("res",response.data.payload);
            commit("DELETE_ProfileGroupUsers2", payload);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addUserToProfileGroupAction2({ commit }, payload) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("profilegroup/addUserToProfileGroup", payload)
          .then((response) => {
            commit("ADD_ProfileGroupUsers2", response.data.payload);
            console.log(response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addUserAction2({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/create", user)
          .then((response) => {
            console.log("res add ", response);
            commit("GET_USERACTIVE", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addUserAction({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/create", user)
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_USER", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteUserAction({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/delete", user)
          .then((response) => {
            commit("DELETE_USER", user);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editUserAction({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/update", user)
          .then((response) => {
            commit("EDIT_USER", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    LoginAction({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/login", user)
          .then((response) => {
            commit("LOGIN_USER", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logoutAction({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/logout", user)
          .then((response) => {
            commit("LOGIN_USER", response.data.payload);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getUsers: (state) => {
      return state.users;
    },
    getUserActive: (state) => {
      return state.useractive;
    },
  },
};
export default usersModule;
