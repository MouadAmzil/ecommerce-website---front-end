<template>
  <div>
    <v-row>
      <v-col cols="6"> </v-col>
      <v-col cols="6">
        <div class="detail-produit">
            <v-chip
  color="red"
  label
  text-color="white"
  
>HOTSALE</v-chip>
          <h3>Nike React Miler</h3>
          <p>{{ produit.name }}</p>
          <v-rating
            empty-icon="$mdiStarOutline"
            full-icon="$mdiStar"
            half-icon="$mdiStarHalfFull"
            length="5"
          ></v-rating> 
          <b class="subheading">Description :</b>
          <p>{{ produit.description }}</p>
           <h3>{{ produit.price }}$</h3>
          <p style="margin-top:20px">Colors :</p>
          <p class="box">
            <v-chip color="blue lighten-4" class="ma-1"> </v-chip>

            <v-chip class="ma-1" color="grey darken-2"> </v-chip>

            <v-chip class="ma-1" color="deep-orange lighten-5"> </v-chip>
          </p>

         

          
          <img src="../assets/shoes.png" alt="" />

          <b class="subheading">Size :</b>

          <v-chip-group
            v-model="selection"
            active-class="deep-purple--text text--accent-4"
            mandatory
          >
            <v-chip>{{ produit.size[0] }}</v-chip>
            <v-chip>{{ produit.size[1] }}</v-chip>
            <v-chip>{{ produit.size[2] }}</v-chip>
            <v-chip>{{ produit.size[3] }}</v-chip>
          </v-chip-group>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "detailProduit",
  data() {
    return {
      produit: {
        name: " Running shoes",
        description: "Men's Road Running shoes",
        price: 200,
        selection: 2,
        size: [39, 41, 43, 44],
      },
    };
  },
};
</script>
<style scoped>
.detail-produit {
    margin-top:100px;
}
.box {
  border-radius: 30px;
  width: 100px;
  background-color: #bebebe;
}
</style>
