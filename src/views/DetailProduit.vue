<template>
  <v-row
    style="
      margin: 0;
      height: 100%;
      background: #f6f6f6;
      border: 3px solid #f6f6f6;
      border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;   "
  >
    <v-col cols="6" style="margin: 0; padding: 0">
      <v-img
        class="img"
        contain
        style="
          max-width: 100%;
          max-height: 450px !important;
          background-color: #f6f6f6;
          background-size: contain !important;
        "
        :src="
          'http://127.0.0.1:8000/storage/' + produit[0].pictures[0].filename
        "
      ></v-img>
    </v-col>
    <v-col cols="6">
      <div class="detail-produit">
        <v-chip color="red" label text-color="white">HOTSALE</v-chip>
        <h3 v-if="produit.length > 0">{{ produit[0].name }}</h3>

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
            v-if="produit.length > 0"
          >
            {{ produit[0].brand }}
          </p>
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            half-increments
            hover
            size="20"
            :empty-icon="emptyIcon"
            :full-icon="fullIcon"
            :half-icon="halfIcon"
            style="margin-top: 3px; margin-left: -10px"
          ></v-rating>
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

        <b class="subheading">Description :</b>
        <p v-if="produit.length > 0">{{ produit[0].description }}</p>
        <h3 v-if="produit.length > 0">{{ produit[0].prix }}$</h3>
        <div class="colors">
          <p style="margin-top: 20px">Colors :</p>

          <p class="box">
            <v-chip small color="blue lighten-4" class="ma-1"> </v-chip>

            <v-chip small class="ma-1" color="grey darken-2"> </v-chip>

            <v-chip small class="ma-1" color="deep-orange lighten-5"> </v-chip>
          </p>
        </div>

        <div>
          <v-img
            class="img"
            contain
            style="
              max-width: 30%;
              max-height: 70px !important;
              background-color: #f6f6f6;
              background-size: contain !important;
            "
            :src="
              'http://127.0.0.1:8000/storage/' + produit[0].pictures[0].filename
            "
          ></v-img>
        </div>
      </div>
    </v-col>
    <div class="card">
      <v-img
        class="img"
        contain
        style="
          max-width: 30%;
          max-height: 70px !important;
          background-color: #f6f6f6;
          background-size: contain !important;
        "
        :src="
          'http://127.0.0.1:8000/storage/' + produit[0].pictures[0].filename
        "
      ></v-img>
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
          v-if="produit.length > 0"
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
          v-if="produit.length > 0"
        >
          {{ produit.brand }}
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

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["brand"],

  name: "detailProduit",
  data() {
    return {
      dialog: false,
      count: 0,
      selection: 2,
      rating: 3.5,
      emptyIcon: "mdi-star-outline",
      fullIcon: "mdi-star",
      halfIcon: "mdi-star-half",
      produit: [],
      idproduit: null,
    };
  },
  created() {
    this.idproduit = this.$route.params.id;
  },
  mounted() {
    this.initial();
  },
  computed: {
    ...mapGetters(["getProduits"]),
  },
  methods: {
    ...mapActions(["setProduitbyIDAction"]),
    initial() {
      this.setProduitbyIDAction(this.idproduit).then((resolve) => {
        this.produit.push(resolve);
       document.title = this.produit[0].name;

        console.log("this.produit", resolve);
      });
    },
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
};
</script>
<style scoped>
.card {
  display: flex;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  width: 800px;
  padding: 20px;
  position: relative;
  left: 50%;
  top: -1%;
  transform: translateX(-50%);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  border: 3px solid rgba(255, 255, 255, 0.26);
  border-radius: 20px;
}
.card-about {
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-evenly;
}
.card-img {
  left: 18.22%;
  right: 72.16%;
  top: 85.06%;
  bottom: 5.95%;
}
.colors {
  display: flex;
}
.about-produit {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 7px;
  width: 800px;
  height: 51px;
}
.detail-produit {
  margin-top: 100px;
}
.box {
  border-radius: 20px;
  width: 98px;
  background-color: #bebebe;

  margin-top: 16px;
  margin-left: 13px;
}
</style>
