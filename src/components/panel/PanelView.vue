<template>
    <v-spacer class="pt-16 px-3"
        style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;">
        <v-row>
            <v-col cols="12">
                <template>
                    <v-card elevation="3" class="mx-auto" style="border-radius: 24px !important; padding: 10px 16px;"
                        max-width="100%" tile>
                        <v-toolbar-title style="padding-left: 10px;" class="text-h">Card</v-toolbar-title>
                        <v-divider />
                        <v-spacer style="padding: 10px 20px;overflow: scroll;height: 73vh;">
                            <!-- TODO: Here Put your map for map the all list of panel product in v-row -->
                            <v-row>
                                <v-col cols="2">
                                    <v-img class="img" contain
                                        style="width: 100%;height: 140px !important;background-color: #f6f6f6; background-size: contain !important;"
                                        src="../../assets/macbook-air-space-gray-select-201810 1.png"></v-img>
                                </v-col>
                                <v-col cols="8">
                                    <v-spacer style="padding-top:10px ;padding-right: 5px;">
                                        <h3>Apple Watch Series 7</h3>
                                        <h5>1768 DH <v-divider class="mx-2" vertical></v-divider>
                                            <span class="teal--text lighten-2">IN STOCK</span>
                                        </h5>
                                    </v-spacer>
                                    <v-spacer class="card-about pt-11"
                                        style="display: flex;padding-right: 10px; height: 100%;">
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
                                <v-col cols="2">
                                    <v-spacer class="">
                                        <div class="text-h5 " style="text-align: end;font-weight: 500;color: #7e7777;">
                                            1768 DH
                                        </div>
                                    </v-spacer>
                                    <v-spacer
                                        style="display: flex;justify-content: flex-end;padding-right: 10px; height: 100%;">
                                        <!-- <v-action> -->
                                        <v-icon style="padding-right: 10px; cursor: pointer;">mdi-trash-can-outline
                                        </v-icon>
                                        <v-icon style=" cursor: pointer;">mdi-cards-heart-outline</v-icon>
                                        <!-- </v-action> -->
                                    </v-spacer>
                                </v-col>
                                <v-divider class="mx-10 "></v-divider>
                            </v-row>

                        </v-spacer>
                    </v-card>
                </template>
                <!-- </v-sheet> -->
            </v-col>

        </v-row>
    </v-spacer>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            count: 1,
            selection: 2,
            rating: 3.5,
            emptyIcon: "mdi-star-outline",
            fullIcon: "mdi-star",
            halfIcon: "mdi-star-half",
            produit: [],
            idproduit: null,
        };
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
    },
}
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
    font-family: 'Bevan';
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
