<template>
  <div class="about">
    <h2>Trending Items</h2>
    <v-container align-center fluid>
    <v-row>
      <v-col cols="6" v-for="product in products" :key="product.id">
        <v-card elevation="5" outlined min-height="100%">
          <v-row>
            <v-col cols="6" >
              <v-img 
                class="img"
                width="200"
                height="200"
                :src="product.image"
              ></v-img
            ></v-col>

            <v-col cols="6"
              ><div class="text-center">
                <h3 class="pt-5">{{ product.name }}</h3>
                <v-card-text>{{ product.description }}</v-card-text>
                <v-card-text
                  >colors : <v-chip color="primary"> </v-chip>

                  <v-chip color="secondary" class="ma-1"> </v-chip>

                  <v-chip color="red"> </v-chip
                ></v-card-text>
                <v-card-text v-if="product.size != 0"
                  >{{ product.size }} -sizes available
                </v-card-text>
                <v-card-text v-else text="">{{ product.size }}</v-card-text>

                <v-card-text>{{ product.price }} $</v-card-text>

                <div class="div">
                  <v-chip v-if="product.stock == 0" color="red"
                    >only {{ product.stock }}</v-chip
                  >
                  <v-chip v-else color="green">only {{ product.stock }}</v-chip>

                  <v-action
                    ><v-icon>mdi-cart</v-icon
                    ><v-icon>mdi-cards-heart-outline</v-icon></v-action
                  >
                </div>
              </div></v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.div {
  display: inline-block;
}
.img{
  color: white !important;
}
</style>
<script>
export default {
  data() {
    return {
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
