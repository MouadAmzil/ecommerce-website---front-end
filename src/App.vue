<template>
  <v-app v-if="login" id="inspire">
    <v-app-bar class="pt-3" max-height="90" color="white" flat>
      <v-container class="d-flex justify-center">
        <v-responsive class="pt-6" max-width="750">
          <v-text-field
            height="30"
            rounded
            outlined
            elevation="20px"
            color="grey"
            background-color="white"
            placeholder="Search"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-spacer class="pt-0 px-3">
      <v-row>
        <v-col class="pt-16" cols="2">
          <template>
            <v-card
              class="mx-auto"
              style="border-radius: 24px !important; padding: 3px 5px"
              max-width="300"
              tile
            >
              <v-list style="padding: 0px !important" class="brand">
                <v-img src="../src/assets/brande.png"></v-img>
              </v-list>
              <v-list rounded>
                <v-list-item-group
                  active-class="active"
                  class="maraginBettwenItems"
                >
                  <v-list-item>
                    <router-link
                      to="/home"
                      class="itemd d-flex flex-row"
                      style="text-decoration: none"
                    >
                      <v-list-item-icon>
                        <v-icon large>mdi-shopping-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Products</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <router-link
                      to="/WishList"
                      class="itemd d-flex flex-row"
                      style="text-decoration: none"
                    >
                      <v-list-item-icon>
                        <v-icon color="red" large
                          >mdi-cards-heart-outline</v-icon
                        >
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>WishList</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                  <v-list-item>
                    <router-link
                      to="/card"
                      class="itemd d-flex flex-row"
                      style="text-decoration: none"
                    >
                      <v-list-item-icon>
                        <v-icon  large>mdi-cart-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Cart</v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                    <v-divider></v-divider>
                  <v-list-item>
                    <router-link
                      to="/profileSetting"
                      class="itemd d-flex flex-row"
                      style="text-decoration: none"
                    >
                      <v-list-item-icon>
                        <v-icon color="#8eb3b0" x-large>mdi-account-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>His Name</v-list-item-title>
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
<script>
import login from "../src/views/Login/LoginView.vue";
export default {
  components: {
    login,
  },

  data() {
    return {
      login: true,
      products: [
        {
          id: 1,
          name: "Nike",
          description: "Men Road Running shoes ",
          stock: 5,
          size: 5,
          reduction: "25% off",
          price: 200,
          image:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/303abd11-0610-4881-8616-a8103a700aed/chaussures-air-max-terrascape-90-pour-CRn0XW.png",
        },
        {
          id: 2,
          name: "Apple Macbook Air",
          image:
            "https://help.apple.com/assets/6062258EBFC7E7487E19DBB0/60622591BFC7E7487E19DBBA/fr_FR/540d7697864354f0c0bed1741209d7f1.png",
          description: "Apple M1 CHp 51 GB Running shoes ",
          stock: 0,
          size: "",

          price: 1900,
        },
        {
          id: 3,
          name: "Apple Watch Series 7",
          image:
            "https://itsu.ma/wp-content/uploads/2022/03/apple-watch-series-7-gps-minuit-ITsu-maroc.jpg",
          description: "Men Road Running shoes ",
          stock: "available",
          size: "",
          price: 200,
        },
        {
          id: 4,
          name: "Nike Air Force",
          image:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9861ab2-bc80-4328-ba7e-1d0a6e8d49b2/chaussure-air-force-1-07-ess-pour-xxQdZf.png",
          description: "Men Road Running shoes ",
          stock: "available",
          reduction: "25% off",
          size: 5,
          price: 200,
        },
      ],
    };
  },
};
</script>
