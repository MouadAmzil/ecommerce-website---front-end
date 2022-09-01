<template>
  <v-app v-if="islogin" id="inspire">
    <v-spacer class="pt-0 px-3">
      <v-row>
        <v-col class="pt-16" cols="2">
          <template>
            <v-card class="mx-auto" style="border-radius: 24px !important; padding: 3px 5px ;overflow: hidden;" max-width="300" tile>
              <v-list style="padding: 0px !important" class="brand">
                <v-img src="../src/assets/brande.png"></v-img>
              </v-list>
              <v-list rounded>
                <v-list-item-group active-class="active" class="maraginBettwenItems">
                  <v-list-item>
                    <router-link to="/home" class="itemd d-flex flex-row" style="text-decoration: none">
                      <v-list-item-icon>
                        <v-icon large>mdi-shopping-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Products</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <router-link to="/WishList" class="itemd d-flex flex-row" style="text-decoration: none">
                      <v-list-item-icon>
                        <v-icon color="red" large>mdi-cards-heart-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>WishList</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <router-link to="/card" class="itemd d-flex flex-row" style="text-decoration: none">
                      <v-list-item-icon>
                        <v-icon large>mdi-cart-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Cart</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <router-link to="/profileSetting" class="itemd d-flex " style="text-decoration: none">
                      <v-list-item-avatar>
                        <v-img v-if="useractive[0] != null" class="img" width="70" height="50" :src="
                          'http://127.0.0.1:8000/storage/' +
                          useractive[0].picture[useractive[0].picture.length - 1].filename
                        "></v-img>
                        <v-list-item-icon v-else>
                          <v-icon color="#8eb3b0" x-large>mdi-account-circle</v-icon>
                        </v-list-item-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-if="useractive[0] != null">{{
                            useractive[0].username
                        }}</v-list-item-title>
                        <v-list-item-title v-else>profile</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </template>
          <!-- </v-sheet> -->
        </v-col>
        <v-col max-width="100%" max-height="100%" cols="10">
          <router-view />
        </v-col>
      </v-row>
    </v-spacer>
  </v-app>
  <v-app v-else>
    <login />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import login from "../src/views/Login/LoginView.vue";

export default {
  components: {
    login,
  },
  data: () => ({
    islogin: true,
    useractive: [],
    logged: true,
  }),
  mounted() {
    document.title = "Title";
  },
  computed: {
    ...mapGetters(["getUserActive"]),
  },
  watch: {},
  created() {
    this.logged = localStorage.getItem("logged");
    console.log("logged app", this.logged);
    this.initialize();
  },
  methods: {
    initialize() {
      this.useractive = [];
      this.useractive.push(this.getUserActive);
    },
    ...mapActions(["setProduitsAction"]),
    clickProduitDetails(product) { },
    login() { },
    addToWishList(product) { },
  },
};
</script>

<style scoped>
.div {
  display: inline-block;
}

* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.v-card__text {
  padding: 0 !important;
}

.AddMargin2 {
  margin-top: 47px !important;
}

.AddPadding {
  margin-top: 10px;
}

.myItmeHover:hover {
  transition: all 0.5s ease-in-out;
  transform: scale(0.97);
}

.v-image__image {
  background-size: contain !important;
}

.mycontainer {
  overflow-y: scroll !important;
  height: 68vh !important;
}

.myIyemListText {
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 30px !important;
  color: #474747 !important;
}

.v-responsive__sizer {
  padding-bottom: 50% !important;
}

.maraginBettwenItems {
  margin-top: 3px !important;
  margin-bottom: 3px !important;
}

.dot {
  height: 18px;
  margin-right: 2px;
  width: 18px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.footerCard {
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: flex-end;
  margin-top: 40px;
}

.active {
  color: #1976d2;
  outline-color: rgb(25, 118, 210);
}

.img {
  color: white !important;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
