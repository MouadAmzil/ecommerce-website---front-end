<template>
  <div>
    <template>
      <v-row >
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Detail Produit</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <template>
              <v-row style="margin: 0; height: 100%; position: relative">
                <v-col cols="6" style="margin: 0; padding: 0">
                  <svg
                    width="650px"
                    height="100%"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style=""
                  >
                    <g clip-path="url(#clip0_104_258)">
                      <rect width="761" height="100%" fill="#E3E5FA" />
                      <circle
                        opacity="0.1"
                        cx="340"
                        cy="350"
                        r="260"
                        transform="rotate(-5 380.364 549.364)"
                        fill="url(#paint0_linear_104_258)"
                      />

                      <g opacity="0.1" filter="url(#filter0_f_104_258)">
                        <circle
                          r="239.922"
                          transform="matrix(-0.996195 -0.0871557 -0.0871557 0.996195 127.429 139.919)"
                          fill="url(#paint1_linear_104_258)"
                        />
                      </g>
                      <g filter="url(#filter1_f_104_258)">
                        <ellipse
                          cx="300"
                          cy="330"
                          rx="165.277"
                          ry="50"
                          fill="#818AF9"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_104_258"
                        x="-212.508"
                        y="-200.017"
                        width="679.873"
                        height="679.873"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="50"
                          result="effect1_foregroundBlur_104_258"
                        />
                      </filter>
                      <filter
                        id="filter1_f_104_258"
                        x="122"
                        y="485"
                        width="530.553"
                        height="253.216"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="50"
                          result="effect1_foregroundBlur_104_258"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_104_258"
                        x1="812.918"
                        y1="726.78"
                        x2="-474.184"
                        y2="349.285"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#818AF9" />
                        <stop
                          offset="1"
                          stop-color="#818AF9"
                          stop-opacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_104_258"
                        x1="530.164"
                        y1="358.967"
                        x2="-333.476"
                        y2="105.67"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#818AF9" />
                        <stop offset="1" stop-color="#8288D7" />
                      </linearGradient>
                      <clipPath id="clip0_104_258">
                        <rect width="761" height="1117" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </v-col>
                <v-col cols="6">
                  <div class="detail-produit">
                    <v-chip color="red" label text-color="white"
                      >HOTSALE</v-chip
                    >
                    <h3 v-if="produit.length>0">{{ produit[0].name }}</h3>
                    <div class="about-produit">
                      <p
                        style="
                          font-family: 'Almarai';
                          font-style: normal;
                          font-weight: 400;
                          font-size: 16px;
                          width: 104px;
                          height: 18px;
                          margin-top: 8px;
                        "
                      >
                      </p>

                      <span
                        style="
                          width: 118px;
                          height: 15px;
                          font-family: 'Manrope';
                          font-style: normal;
                          font-weight: 500;
                          font-size: 14px;
                          line-height: 15px;
                          margin-top: 13px;
                          text-align: center;
                          letter-spacing: 0.03em;
                        "
                        >4.9 (2130 reviews)</span
                      >
                    </div>

                    <b class="subheading" v-if="produit.length>0">Description :</b>
                    <p v-if="produit.length>0">{{ produit[0].description }}</p>
                    <h3 v-if="produit.length>0">{{ produit[0].prix }}$</h3>
                    <div class="colors">
                      <p style="margin-top: 20px">Colors :</p>

                      <p class="box">
                        <v-chip small color="blue lighten-4" class="ma-1">
                        </v-chip>

                        <v-chip small class="ma-1" color="grey darken-2">
                        </v-chip>

                        <v-chip
                          small
                          class="ma-1"
                          color="deep-orange lighten-5"
                        >
                        </v-chip>
                      </p>
                    </div>

                    <div><img src="../assets/shoes.png" alt="" /></div>
                  </div>
                </v-col>
                <div class="card">
                  <img class="card-img" src="../assets/shoes.png" />
                  <div style="width: 200px">
                    <p
                      style="
                        font-family: 'Almarai';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        color: #474747;
                        line-height: 22px;
                      "
                      v-if="produit.length>0"
                    >
                      {{ produit.name }}
                    </p>
                    <p
                      style="
                        font-family: 'Almarai';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 1px;
                        color: #474747;
                      "
                      v-if="produit.length>0"
                    >
                    
                      {{ produit.mark }}
                    </p>
                  </div>
                  <div class="card-about">
                    <p
                      style="
                        height: 24px;
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 24px;
                        color: #404040;
                      "
                    >
                      Qty:
                    </p>
                    <button
                      v-on:click.prevent="decrement"
                      style="
                        width: 24px;
                        height: 24px;
                        border: 2px solid #828ef9;
                        color: #828ef9;
                      "
                    >
                      -
                    </button>
                    <p
                      style="
                        width: 30px;
                        height: 25px;
                        left: 93px;
                        top: 0px;
                        background: #ffffff;
                        border: 2px solid #d4d4d4;
                        border-radius: 5px;
                        font-family: 'Bevan';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 20px;
                      "
                      
                    >
                      {{ count }}
                    </p>
                    <button
                      v-on:click.prevent="increment"
                      style="
                        width: 24px;
                        height: 24px;
                        border: 2px solid #828ef9;
                        color: #828ef9;
                      "
                    >
                      +
                    </button>
                  </div>
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      padding: 10px;
                      gap: 10px;
                      margin-left: 23px;
                      width: 173px;
                      height: 42px;
                      background: #80d388;
                      border-radius: 10px;
                    "
                  >
                    <button
                      style="
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12px;
                        line-height: 16px;

                        color: #ffffff;
                      "
                    >
                      ADD TO CARD
                    </button>
                  </div>
                </div>
              </v-row>
            </template>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <div
      class="pa-6"
      style="width: 100%; padding: 0px 24px !important"
      min-height="90vh"
      rounded="lg"
    >
      <v-spacer class="about">
        <v-sheet class="mx-auto">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="purple white--text"
                depressed
                rounded
                @click="toggle"
              >
                category {{ n }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <h2 class="pt-2">Trending Items</h2>
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
                            {{ product.prix }} $</v-spacer
                          >
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
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    products: [],
    dialog: false,
    produit: [],
    count:0,
      selection: 2,
  }),
  mounted() {
    document.title = "damage type";

    this.initialize();
  },
  computed: {
    ...mapGetters(["getdamageTypes", "getProduits", "getUsers"]),
  },
  watch: {},
  created() {},
  methods: {
    initialize() {
      this.setProduitsAction().then(() => {
        this.products = [...this.getProduits];
      });
    },
    ...mapActions(["setProduitsAction"]),
    clickProduitDetails(product) {
      this.$router.push({ name: 'detailProduit', params: { username: 'eduardo' } })
 //this.$router.replace({ path: '/detailproduit' });

      this.produit.push(product);
     // this.dialog = true;
      console.log("produit", product);
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
