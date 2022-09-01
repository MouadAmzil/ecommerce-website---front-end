<template>
  <v-spacer
    class="pt-16 px-3"
    style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif !important;
    "
  >
    <v-row>
      <v-col cols="8">
        <template>
          <v-card
            elevation="3"
            class="mx-auto"
            style="border-radius: 24px !important; padding: 10px 16px"
            max-width="100%"
            tile
          >
            <v-toolbar-title style="padding-left: 10px" class="text-h"
              >Card</v-toolbar-title
            >
            <v-divider />
            <v-spacer
              style="padding: 10px 20px; overflow-y: scroll; height: 73vh"
            >
              <!-- TODO: Here Put your map for map the all list of panel product in v-row -->

              <div
                style="padding-left: 180px; padding-top: 100px"
                v-if="paniers.panier.produits.length == 0"
              >
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_3VDN1k.json"
                  background="transparent"
                  speed="2"
                  style="width: 300px; height: 300px"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div v-else>
                <v-row
                  v-for="product in paniers.panier.produits"
                  :key="product.id"
                >
                  <v-col cols="3">
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
                      <h5>
                        {{ product.prix }}
                        <v-divider class="mx-2" vertical></v-divider>
                        <span class="teal--text lighten-2">IN STOCK</span>
                      </h5>
                    </v-spacer>
                    <v-spacer
                      class="card-about pt-11"
                      style="display: flex; padding-right: 10px; height: 100%"
                    >
                      <button
                        v-on:click.prevent="
                          decrement(product.id, product.pivot.Qte)
                        "
                        class="decrement"
                      >
                        -
                      </button>
                      <p class="counter">
                        {{ product.pivot.Qte }}
                      </p>
                      <button
                        v-on:click.prevent="increment(product.id)"
                        class="increment"
                      >
                        +
                      </button>
                    </v-spacer>
                  </v-col>
                  <v-col cols="3">
                    <v-spacer class="">
                      <div
                        class="text-h5"
                        style="
                          text-align: end;
                          font-weight: 500;
                          color: #7e7777;
                        "
                      >
                        {{ product.prix }}DH
                        <sup
                          style="
                            background: #f376aa;
                            padding: 3px;
                            border-radius: 50%;
                            color: wheat;
                          "
                          >*{{ product.pivot.Qte }}</sup
                        >
                      </div>
                    </v-spacer>
                    <v-spacer
                      style="
                        display: flex;
                        justify-content: flex-end;
                        padding-right: 10px;
                        height: 100%;
                      "
                    >
                      <!-- <v-action> -->
                      <v-icon
                        @click.stop="deleteFromCart(product)"
                        style="padding-right: 10px"
                        >mdi-trash-can-outline
                      </v-icon>
                      <!-- </v-action> -->
                    </v-spacer>
                  </v-col>
                  <v-divider class="mx-10"></v-divider>
                </v-row>
              </div>
            </v-spacer>
          </v-card>
        </template>
        <!-- </v-sheet> -->
      </v-col>
      <v-col cols="4">
        <template>
          <v-card
            elevation="3"
            class="mx-auto"
            style="border-radius: 24px !important; padding: 10px 16px"
            max-width="100%"
            tile
          >
            <v-toolbar-title style="padding-left: 10px" class="text-h4"
              >Total
            </v-toolbar-title>
            <v-divider />
            <v-spacer
              style="padding: 10px 20px; overflow-y: scroll; height: 43vh"
            >
              <!-- TODO: Here Put your map for map the all list of panel product in v-row -->
              <v-row class="pa-2 pt-10">
                <v-col cols="12" class="d-flex flex-row">
                  <h5>SubTotal :</h5>
                  <v-spacer></v-spacer>
                  <h5>{{ total }}DH</h5>
                </v-col>
                <v-col cols="12" class="d-flex flex-row">
                  <h5>Shipping :</h5>
                  <v-spacer></v-spacer>
                  <h5>{{ shipping }}DH</h5>
                </v-col>
              </v-row>
              <v-row class="pt-5">
                <v-col cols="12" class="d-flex flex-row orange--text">
                  <h4>Total :</h4>
                  <v-spacer></v-spacer>
                  <h4 class="orange--text">{{ total +  shipping }}DH</h4>
                </v-col>
                <v-col
                  cols="12"
                  class="d-flex flex-row justify-center orange--text"
                >
                  <v-btn
                    color="green"
                    class="ma-2 white--text"
                    @click="placeOrder()"
                  >
                    Place order
                    <v-icon right color="#fff"> mdi-cart-arrow-down </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-spacer>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-spacer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    // login,
  },
  data: () => ({
    dialog: false,
    count: 1,
    selection: 2,
    total: 0,
    rating: 3.5,
    emptyIcon: "mdi-star-outline",
    shipping: 40,
    fullIcon: "mdi-star",
    halfIcon: "mdi-star-half",
    idproduit: null,
    paniers: [],
    iduserActive: 0,
    idPanier: 0,
    PanierModel: {
      produit_id: 0,
      panier_id: 0,
    },
    OrderModel: {
      status_commande: "",
      mantant: 0,
      placeorder:[],
    },
  }),
  mounted: function () {
    // this.updatelikescount(this.post_id);
    //this.initialize(); hi this is me for sara
    // this.CalcuTotal();
  },
  computed: {
    ...mapGetters(["getPaniers", "getUsers", "getUserActive"]),
  },
  created() {
    this.iduserActive = this.getUserActive.id;
    this.idPanier = this.getUserActive.panier.id;
    this.PanierModel.panier_id = this.getUserActive.panier.id;
    this.initialize();
  },
  methods: {
    ...mapActions([
      "getpanierssPanierByUserAction",
      "deleteProduitToPanierAction",
      "addCommandeAction"
    ]),
    initialize() {
      this.getpanierssPanierByUserAction(this.iduserActive).then(() => {
        this.paniers = this.getPaniers;
        this.paniers.panier.produits.map((res) => {
          this.total = res.prix + this.total;
        });

      });
    },
    increment(id) {
      this.paniers.panier.produits.map((res) => {
        // debugger;
        if (res.id == id) {
          res.pivot.Qte = res.pivot.Qte + 1;
        }
      });
      this.CalcuTotal();
    },
    decrement(id, QTE) {
      if (QTE > 1) {
        this.paniers.panier.produits.map((res) => {
          if (res.id == id) {
            res.pivot.Qte = res.pivot.Qte - 1;
          }
        });
        this.CalcuTotal();
      }
    },
    CalcuTotal() {
      this.total = 0;
      this.paniers.panier.produits.map((res) => {
        this.total = res.pivot.Qte * res.prix + this.total;
      });
    },
    deleteFromCart(product) {
      this.PanierModel.produit_id = product.id;
      console.log(this.PanierModel);
      this.deleteProduitToPanierAction(this.PanierModel).then((resolve) => {
        this.paniers = resolve;
        this.total = 0;
        this.paniers.panier.produits.map((res) => {
          this.total = res.prix + this.total;
        });
      });
    },
    placeOrder() {
      this.OrderModel.status_commande="on progress";
      this.OrderModel.mantant=this.shipping + this.total ;
      this.OrderModel.placeorder=this.paniers;
      this.addCommandeAction(this.OrderModel).then((resolve) => {
        this.getpanierssPanierByUserAction(this.iduserActive).then(() => {
        this.paniers = this.getPaniers;
      });
      });
      console.log("this.OrderModel",this.OrderModel)
    },
  },
};
</script>

<style>
.card-about {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.decrement {
  width: 24px;
  height: 24px;
  border: 2px solid #828ef9;
  color: #828ef9;
}

.counter {
  width: 30px;
  height: 25px;
  left: 93px;
  top: 0px;
  text-align: center;
  background: #ffffff;
  /* border: 2px solid #d4d4d4; */
  border-radius: 5px;
  font-family: "Bevan";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
}

.increment {
  width: 24px;
  height: 24px;
  border: 2px solid #828ef9;
  color: #828ef9;
}
</style>
