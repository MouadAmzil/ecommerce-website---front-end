<template>
  <div>
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
            v-model="searchText"
          ></v-text-field>
        </v-responsive>
        <v-icon large @click.stop="search">mdi-magnify</v-icon>
      </v-container>
    </v-app-bar>
    <div
      class="pa-6"
      style="width: 100%; padding: 40px 24px !important"
      min-height="90vh"
      rounded="lg"
    >
      <v-spacer class="about">
        <h2 class="pt-2">Trending Items</h2>
        <div
          :style="
            'display:' + visible + ';' + 'padding-left:300px;padding-top:100px;'
          "
        >
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_dyfc7cm9.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
        </div>

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
                      v-if="product.src == ''"
                      class="img"
                      contain
                      style="
                        max-width: 100%;
                        max-height: 200px !important;
                        background-color: #f6f6f6;
                        background-size: contain !important;
                      "
                      :src="
                        'http://127.0.0.1:8000/storage/' +
                        product.pictures[0].filename
                      "
                    ></v-img>
                    <v-img
                      v-else
                      class="img"
                      contain
                      style="
                        max-width: 100%;
                        max-height: 240px !important;
                        background-color: #f6f6f6;
                        background-size: contain !important;
                      "
                      :src="product.src"
                    ></v-img>
                  </v-col>

                  <v-col cols="6">
                    <v-spacer style="padding-top: 10px; padding-right: 5px">
                      <h3>{{ product.name }}</h3>
                      <h5>{{ product.brand }}</h5>

                      <v-card-text
                        style="
                          display: flex;
                          align-items: center;
                          margin-bottom: 5px;
                        "
                        >Colors :
                        <span
                          style="
                            padding: 4px 8px;
                            margin-left: 6px;
                            border-radius: 24px;
                            background-color: #f6f6f6;
                            display: flex;
                            align-items: center;
                          "
                        >
                          <span
                            class="dot"
                            sytle="background-color:red;"
                          ></span>
                          <span class="dot"></span>
                          <span class="dot"></span>
                        </span>
                      </v-card-text>

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
                            {{ product.prix }} DH</v-spacer
                          >
                          <v-spacer
                            style="
                              display: flex;
                              justify-content: flex-end;
                              padding-right: 10px;
                            "
                          >
                            <v-action>
                              <v-icon
                                large
                                right
                                @click.stop="addToCart(product)"
                                >mdi-cart</v-icon
                              >

                              <v-icon
                                :color="product.id == heart ? 'red' : 'grey'"
                                large
                                @click.stop="addToWishList(product)"
                                >mdi-cards-heart-outline</v-icon
                              >
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
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    products: [],
    produit: [],
    ProduitsByUser: {
      user_id: null,
      produit_id: null,
    },
    visible: "none",
    heart: 0,
    searchText: "",
    scrapingJumia: {
      name: "",
    },
    categories: [
      {
        id: 1,
        name: "Books",
        description:
          "a written or printed work consisting of pages glued or sewn together along one side and bound in covers. ",
        created_at: "21/07/2022 23:43",
        updated_at: "21/07/2022 23:43",
      },
      {
        id: 2,
        name: "Fashion",
        description:
          "the prevailing style (as in dress) during a particular time The spring fashions are now on display",
        created_at: "21/07/2022 23:43",
        updated_at: "21/07/2022 23:43",
      },
    ],
    ProduitModel: {
      name: "",
      description: "",
      brand: "",
      stock: 2,
      src: "",
      prix: null,
      categorie_id: 2,
    },
    PanierModel: {
      panier_id: 0,
      produit_id: 0,
      Qte: 1,
    },
    isScraping: false,
    count: 0,
    selection: 2,
    iduserActive: null,
  }),
  mounted() {
    document.title = "Title";

    this.initialize();
  },
  computed: {
    ...mapGetters([
      "getdamageTypes",
      "getProduits",
      "getUsers",
      "getUserActive",
    ]),
  },
  watch: {},
  created() {
    this.iduserActive = this.getUserActive.id;
    this.ProduitsByUser.user_id = this.getUserActive.id;
  },
  methods: {
    initialize() {
      this.visible = "block";
      setTimeout(() => {
        this.setProduitsAction().then(() => {
          this.products = [...this.getProduits];
        });
        this.visible = "none";
      }, 4000);
    },
    ...mapActions([
      "setProduitsAction",
      "setProduitsByScrapingAction",
      "addProduitToUserAction",
      "addProduitAction",
      "addProduitToPanierAction",
      "addProduitAction"
    ]),
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
      
      if (this.isScraping == false) {
         this.PanierModel.panier_id=this.getUserActive.panier.id;
      this.PanierModel.produit_id=product.id;
      this.addProduitToPanierAction(this.PanierModel).then(() => {
        console.log("done");
      }); 
      console.log("done isScraping false");
      }else{
        console.log("done isScraping true");

         this.ProduitModel.name = product.name;
        this.ProduitModel.description = product.name;
        this.ProduitModel.src = product.src;
        this.ProduitModel.brand = product.brand;
        var taman = product.prix.replace(",", "");
        this.ProduitModel.prix = parseFloat(taman);
        this.addProduitAction(this.ProduitModel).then((resolve) => {
          this.PanierModel.panier_id=this.getUserActive.panier.id;
          this.PanierModel.produit_id=resolve.id;
          this.addProduitToPanierAction(this.PanierModel).then(() => {
          console.log("done");
      });
        }); 
      }
    },
    addToWishList(product) {
      if (this.heart == 0) {
        this.heart = product.id;
      } else if (this.heart == product.id) {
        this.heart = 0;
      } else if (this.heart != product.id) {
        this.heart = product.id;
      }
      if (this.isScraping == false) {
        this.ProduitsByUser.produit_id = product.id;

        this.addProduitToUserAction(this.ProduitsByUser).then(() => {
          //this.products = [...this.getProduits];
        });
      } else {
        this.ProduitModel.name = product.name;
        this.ProduitModel.description = product.name;
        this.ProduitModel.src = product.src;
        this.ProduitModel.brand = product.brand;
        var taman = product.prix.replace(",", "");
        this.ProduitModel.prix = parseFloat(taman);
        this.addProduitAction(this.ProduitModel).then((resolve) => {
          this.ProduitsByUser.produit_id = resolve.id;

          this.addProduitToUserAction(this.ProduitsByUser).then(() => {
            //this.products = [...this.getProduits];
          });
        });
      }
      console.log("addToWishList", this.ProduitsByUser);
    },
    search() {
      this.products = [];
      this.visible = "block";
      setTimeout(() => {
        this.setProduitsAction().then(() => {
          // this.products = [...this.getProduits];
          this.products = this.getProduits.filter(
            (c) => c.brand.toUpperCase() == this.searchText.toUpperCase()
          );

          if (this.products.length == 0) {
            if (this.searchText.length == 0) {
              this.isScraping = false;
              this.products = [...this.getProduits];
            } else if (this.searchText.length > 0) {
              this.isScraping = true;
              this.scrapingJumia.name = this.searchText;
              this.setProduitsByScrapingAction(this.scrapingJumia).then(
                (resolve) => {
                  this.products = [...this.getProduits];
                  //console.log("this.getProduits",resolve);
                }
              );
            }
          }
        });
        this.visible = "none";
      }, 5000);

      console.log("search", this.searchText);
    },
  },
};
</script>

<style scoped>
.div {
  display: inline-block;
}

* {
  /* "Segoe UI", Tahoma, Geneva, Verdana, sans-serif */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
