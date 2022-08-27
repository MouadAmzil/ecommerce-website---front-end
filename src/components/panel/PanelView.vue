<template>
    <v-spacer class="pt-16 px-3" style="
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif !important;
    ">
        <v-row>
            <v-col cols="8">
                <template>
                    <v-card elevation="3" class="mx-auto" style="border-radius: 24px !important; padding: 10px 16px"
                        max-width="100%" tile>
                        <v-toolbar-title style="padding-left: 10px" class="text-h">Card</v-toolbar-title>
                        <v-divider />
                        <v-spacer style="padding: 10px 20px; overflow-y: scroll; height: 73vh">
                            <!-- TODO: Here Put your map for map the all list of panel product in v-row -->
                            <v-row v-for="product in products" :key="product.id">
                                <v-col cols="3">
                                    <v-img class="img" contain style="
                      width: 100%;
                      height: 140px !important;
                      background-color: #f6f6f6;
                      background-size: contain !important;
                    " :src="product.image"></v-img>
                                </v-col>
                                <v-col cols="6">
                                    <v-spacer style="padding-top: 10px; padding-right: 5px">
                                        <h3>{{ product.name }}</h3>
                                        <h5>
                                            {{ product.price
                                            }} <v-divider class="mx-2" vertical></v-divider>
                                            <span class="teal--text lighten-2">IN STOCK</span>
                                        </h5>
                                    </v-spacer>
                                    <v-spacer class="card-about pt-11"
                                        style="display: flex; padding-right: 10px; height: 100%">
                                        <button v-on:click.prevent="decrement" class="decrement">
                                            -
                                        </button>
                                        <p class="counter">
                                            {{ count }}
                                        </p>
                                        <button v-on:click.prevent="increment" class="increment">
                                            +
                                        </button>
                                    </v-spacer>
                                </v-col>
                                <v-col cols="3">
                                    <v-spacer class="">
                                        <div class="text-h5" style="text-align: end; font-weight: 500; color: #7e7777">
                                            {{ product.price
                                            }}
                                        </div>
                                    </v-spacer>
                                    <v-spacer style="
                      display: flex;
                      justify-content: flex-end;
                      padding-right: 10px;
                      height: 100%;
                    ">
                                        <!-- <v-action> -->
                                        <v-icon style="padding-right: 10px; cursor: pointer">mdi-trash-can-outline
                                        </v-icon>
                                        <v-icon style="cursor: pointer">mdi-cards-heart-outline</v-icon>
                                        <!-- </v-action> -->
                                    </v-spacer>
                                </v-col>
                                <v-divider class="mx-10"></v-divider>
                            </v-row>
                        </v-spacer>
                    </v-card>
                </template>
                <!-- </v-sheet> -->
            </v-col>
            <v-col cols="4">
                <template>
                    <v-card elevation="3" class="mx-auto" style="border-radius: 24px !important; padding: 10px 16px"
                        max-width="100%" tile>
                        <v-toolbar-title style="padding-left: 10px" class="text-h4">Total
                        </v-toolbar-title>
                        <v-divider />
                        <v-spacer style="padding: 10px 20px; overflow-y: scroll; height: 43vh">
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
                                    <h4 class="orange--text">{{ shipping + total }}DH</h4>
                                </v-col>
                                <v-col cols="12" class="d-flex flex-row justify-center orange--text">
                                    <v-btn color="green" class="ma-2 white--text">
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
        idproduit: null,
    }),
    mounted: function () {
        // this.updatelikescount(this.post_id);
         this.CalcuTotal()
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 1) {
                this.count--;
            }
        },
        CalcuTotal() {
            this.products.map((res) => {
                debugger;
                this.total = res.price + this.total
            })
        }
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
