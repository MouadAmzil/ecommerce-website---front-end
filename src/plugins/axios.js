import axios from "axios";
const CustomizedAxios = axios;
CustomizedAxios.defaults.baseURL = "http://localhost:8000/api/";
var token;
CustomizedAxios.defaults.headers.common["Content-Type"] = "multipart/form-data";
CustomizedAxios.defaults.headers.common["Accept"] = "application/json";

if (localStorage.checklistCach) {
  token = JSON.parse(localStorage.checklistCach);
  CustomizedAxios.defaults.headers.common = {
    Authorization: `Bearer ${token.usersModule.token}`,
    Accept: "application/json",
  };
}
/* CustomizedAxios.defaults.headers.common["Accept"] = "application/json";
CustomizedAxios.defaults.headers.common = {
  Authorization: `Bearer ` + token,
}; */


/*
//console.log("store.getters.getCurrentdepartement", this.$store);
/* if (departementModule.state.currentdepartement != null) {
  console.log("departement", departementModule.state.currentdepartement);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${departementModule.state.currentdepartement.token}`,
  };
} */
/*axios.interceptors.request.use(
  function (config) {
    const token = store.getters.getCurrentdepartement.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);*/

export default CustomizedAxios;
