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
                            {{ product.price }} ₹</v-spacer
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
    products:[],
  }),
  mounted() {
    document.title = "damage type";

    this.initialize();
  },
  computed: {
    ...mapGetters([
      "getdamageTypes",
      "getdamageTypesByProfile_group_id",
      "getUsers",
    ]),
  },
  watch: {
    
  },
  created() {},
  methods: {
    initialize() {
      
      this.setUsersAction().then(() => {
        this.products = [...this.getUsers];
      });
    },
    ...mapActions([
      "setUsersAction",
    ]),

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
