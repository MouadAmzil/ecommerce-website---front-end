import DetailProduitVue from "@/views/DetailProduit.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import WishList from "../views/WishListView.vue";
import Card from "../views/CardView.vue";
import Login from "../views/Login/login.vue";
import SignUp from "../views/Login/SignupView.vue";
import listProduit from "../components/listProduit.vue";
import profileSetting from "../components/profileSetting/profileSetting.vue";
import modifierProfile from "../components/profileSetting/modifierProfile/modifierProfile.vue";
import changePassword from "../components/profileSetting/changepassword/changePassword.vue";
import loginProfile from "../components/profileSetting/login/loginProfile.vue";
import detailProduitScraping from "../components/detailProduiScraping/detailProduitScraping.vue";
import gestionProduit from "../components/profileSetting/gestionStore/gestionProduit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",

    component: HomeView,
  },
  {
    path: "/listProduit",
    name: "listProduit",

    component: listProduit,
    props: true,

  },
  {
    path: "/wishList",
    name: "wshList",

    component: WishList,
  },
  {
    path: "/card",
    name: "card",

    component: Card,
  },
  {
    path: "/detailProduitScraping",
    name: "detailProduitScraping",
    component: detailProduitScraping,
    props: true,
  },
  {
    path: "/detailproduit/:id",
    name: "detailProduit",
    component: DetailProduitVue,
    props: true,
  },
  {
    path: "/profileSetting",
    name: "profileSetting",
    component: profileSetting,
    props: true,
    children: [
      {
        path: "/modifierProfile",
        name: "modifierProfile",
        component: modifierProfile,
      },
      {
        path: "/changePassword",
        name: "changePassword",
        component: changePassword,
      },
      {
        path: "/loginProfile",
        name: "loginProfile",
        component: loginProfile,
      },
      {
        path: "/gestionProduit",
        name: "gestionProduit",
        component: gestionProduit,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,

  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
