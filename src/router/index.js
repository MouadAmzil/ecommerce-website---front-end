import DetailProduitVue from "@/views/DetailProduit.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import WishList from "../views/WishListView.vue";
import Card from "../views/CardView.vue";
import Login from "../views/Login/login.vue";
import SignUp from "../views/Login/SignupView.vue";
import listProduit from "../components/listProduit.vue";
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
    path: "/detailproduit/:id",
    name: "detailProduit",
    component: DetailProduitVue,
    props: true,
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
