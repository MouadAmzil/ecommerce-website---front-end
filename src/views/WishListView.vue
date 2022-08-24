<template>
  <div style="padding: 5px; padding-top: 2%">
    <v-sheet
      class="pa-6"
      style="width: 100%; padding: 0px 24px !important"
      min-height="80vh"
      rounded="lg"
    >
      <v-spacer class="about">
        <h2 class="pt-2">WishList</h2>
        <v-container class="mycontainer" align-center fluid>
          <v-row>
            <v-col
              cols="6"
              class="myItmeHover"
              v-for="product in products"
              :key="product.id"
              @click="clickProduitDetails(product)"
            >
              <v-card
                elevation="5"
                style="border-radius: 24px; overflow: hidden; cursor: pointer"
                outlined
                m
                in-height="100%"
              >
                <v-row>
                  <v-col col cols="6">
                    <v-img
                      class="img"
                      contain
                      style="
                        width: 100%;
                        height: 200px !important;
                        background-color: #f6f6f6;
                        background-size: contain !important;
                      "
                      :src="
                        'http://127.0.0.1:8000/storage/' +
                        product.pictures[0].filename
                      "
                    ></v-img>
                  </v-col>

                  <v-col cols="6">
                    <v-spacer style="padding-top: 10px; padding-right: 5px">
                      <h3>{{ product.name }}</h3>

                      <v-card-text style="" v-if="product.size != 0"
                        >{{ product.size }} -sizes available
                      </v-card-text>
                      <v-card-text v-else text="">{{
                        product.size
                      }}</v-card-text>
                      <!-- <v-card-text>{{ product.price }} $</v-card-text> -->
                      <v-spacer
                        class="div"
                        :class="{ AddPadding: product.size == 0 }"
                      >
                        <v-chip v-if="product.stock == 0" color="red lighten-1"
                          >only {{ product.stock }}</v-chip
                        >
                        <v-chip v-else color="teal lighten-1"
                          >only {{ product.stock }}</v-chip
                        >
                      </v-spacer>
                      <v-spacer
                        class="footerCard"
                        :class="{ AddMargin2: product.size == 0 }"
                      >
                        <v-spacer
                          style="display: flex; justify-content: space-between"
                        >
                          <v-spacer
                            style="
                              font-weight: 700;
                              font-size: 20px;
                              line-height: 22px;
                            "
                          >
                            {{ product.price }}
                          </v-spacer>
                          <v-spacer
                            style="
                              display: flex;
                              justify-content: flex-end;
                              padding-right: 10px;
                            "
                          >
                            <v-action>
                              <v-icon style="padding-right: 5px"
                                >mdi-cart</v-icon
                              >
                              <v-icon color="red">mdi-cards-heart</v-icon>
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      products: [],
      iduserActive:[],
    };
  },
  mounted() {
    document.title = "wish List";

    this.initialize();
  },
  computed: {
    ...mapGetters(["getProduits", "getUserActive"]),
  },
  watch: {},
  created() {
          this.iduserActive=this.getUserActive.id;


  },
  methods: {
    initialize() {
      this.setProduitsByUserIDAction(this.iduserActive).then(() => {
        this.products = [...this.getProduits];
      });
    },
    ...mapActions(["setProduitsByUserIDAction"]),
    clickProduitDetails(product) {
      this.produit = [];
      this.produit.push(product);
      localStorage.setItem("produitInfo", JSON.stringify(product));
      this.$router.push({ path: "/detailProduitScraping" });

      //this.$router.replace({ path: '/detailproduit' });

      // this.dialog = true;
      console.log("produit", product);
    },
    addToCart(product) {
      console.log("addToCart", product);
    },
    addToWishList(product) {
      console.log("addToWishList", product);
    },
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
</style>
