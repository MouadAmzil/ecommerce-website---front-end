<template>
  <div>
    <div
      class="pa-6"
      style="width: 100%; padding: 0px 24px !important"
      min-height="90vh"
      rounded="lg"
    >
      <v-spacer class="about">
        <v-sheet class="mx-auto">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="categorie in categories" :key="n" v-slot="{ active, toggle }">
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="purple white--text"
                depressed
                rounded
                @click="toggle"
              >
                {{category.name}} 
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
                      :src="product.image"
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
<<<<<<< HEAD
    products: [],
    categories:[],
=======
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
>>>>>>> 151e74ca057759557ba379eb0d370fae26b3a878
  }),
  mounted() {
    document.title = "Title";

    //this.initialize();
  },
  computed: {
    ...mapGetters(["getdamageTypes", "getProduits", "getUsers"]),
  },
  watch: {},
  created() {},
  methods: {
    initialize() {
      /* this.setProduitsAction().then(() => {
        this.products = [...this.getProduits];
      }); */
    },
    ...mapActions(["setProduitsAction"]),
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
