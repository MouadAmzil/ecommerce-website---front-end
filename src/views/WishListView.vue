<template>
  <v-app id="inspire">
    <v-app-bar class="pt-3" max-height="90" color="white" flat>
      <v-container class="d-flex justify-center">
        <v-responsive class="pt-6" max-width="750">
          <v-text-field height="30" rounded outlined elevation="20px" color="grey" background-color="white"
            placeholder="Search"></v-text-field>
        </v-responsive>

      </v-container>
    </v-app-bar>
    <v-spacer class="pt-0 px-3">
      <v-row>
        <v-col class="pt-16" cols="2">
          <template>
            <v-card class="mx-auto" style="border-radius: 24px !important; padding: 3px 5px ;" max-width="300" tile>
              <v-list style="padding: 0px !important;" class="brand">
                <v-img src="../assets/brande.png"></v-img>

              </v-list>
              <v-list rounded>
                <router-link to="/home" class="itemd" style="text-decoration: none;">
                  <v-list-item-group class="maraginBettwenItems  active">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon x-large>mdi-home</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </router-link>
                <router-link to="/WishList" class="itemd" style="text-decoration: none;">
                  <v-list-item-group class="maraginBettwenItems">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="red" x-large>mdi-heart</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>WishList</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </router-link>
                <router-link to="/card" class="itemd" style="text-decoration: none;">
                  <v-list-item-group class="maraginBettwenItems">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon x-large>mdi-cart</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Cart</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </router-link>
                <v-list-item-group class="maraginBettwenItems">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon x-large>mdi-account-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>His Name</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </template>
          <!-- </v-sheet> -->
        </v-col>

        <v-col cols="10">
          <v-sheet class="pa-6" style="width: 100%;padding: 0px 24px !important;" min-height="80vh" rounded="lg">
            <v-spacer class="about">
              <h2 class="pt-2">WishList</h2>
              <v-container class="mycontainer" align-center fluid>
                <v-row>
                  <v-col cols="6" class="myItmeHover" v-for="product in products" :key="product.id">
                    <v-card elevation="5" style="border-radius: 24px; overflow: hidden; cursor: pointer;" outlined m
                      in-height="100%">
                      <v-row>
                        <v-col col cols="6">
                          <v-img class="img" contain
                            style="width: 100%;height: 200px !important;background-color: #f6f6f6; background-size: contain !important;"
                            :src="product.image"></v-img>
                        </v-col>

                        <v-col cols="6">
                          <v-spacer style="padding-top:10px ;padding-right: 5px;">
                            <h3>{{ product.name }}</h3>
                            <v-card-text style="display:flex ;align-items: center;margin-bottom: 5px;">Colors : <span
                                style="padding: 4px 8px;margin-left: 6px; border-radius: 24px; background-color: #F6F6F6;display:flex ;align-items: center;">
                                <span class="dot" sytle="background-color:red;"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                              </span>
                            </v-card-text>
                            <v-card-text style="" v-if="product.size != 0">{{ product.size }} -sizes
                              available
                            </v-card-text>
                            <v-card-text v-else text="">{{ product.size }}</v-card-text>
                            <!-- <v-card-text>{{ product.price }} $</v-card-text> -->
                            <v-spacer class="div" :class="{ AddPadding: product.size == 0 }">
                              <v-chip v-if="product.stock == 0" color="red lighten-1">only {{ product.stock }}</v-chip>
                              <v-chip v-else color="teal lighten-1">only {{ product.stock }}</v-chip>
                            </v-spacer>
                            <v-spacer class="footerCard"  :class="{ AddMargin2: product.size == 0 }">
                              <v-spacer style="display:flex ;justify-content: space-between;">
                                <v-spacer style="font-weight: 700;font-size: 20px;line-height: 22px;">
                                  {{ product.price
                                  }} ₹</v-spacer>
                                <v-spacer style="display: flex;justify-content: flex-end;padding-right: 10px;">
                                  <v-action>
                                    <v-icon style="padding-right: 5px;">mdi-cart</v-icon>
                                    <v-icon>mdi-cards-heart-outline</v-icon>
                                  </v-action>
                                </v-spacer>
                              </v-spacer>
                            </v-spacer>
                          </v-spacer>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-spacer>
          </v-sheet>
        </v-col>
      </v-row>
    </v-spacer>
  </v-app>
</template>
<style scoped>
.div {
  display: inline-block;
}

* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.v-card__text {
  padding: 0 !important;
}
.AddMargin2{
    margin-top: 47px !important;
}
.AddPadding {
  margin-top: 10px;
}
.myItmeHover:hover{
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
.active{
  color: #1976d2;
  outline-color:rgb(25, 118, 210);
}

.img {
  color: white !important;
}
</style> 
<script>
export default {
  data() {
    return {
      products: [
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
