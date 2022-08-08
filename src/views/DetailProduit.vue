<template>
  <div>
    <v-row style="margin:0">
      <v-col cols="6" class="col1" style="margin:0;padding:0;"> 
      <svg width="650px" height="656px" fill="none" xmlns="http://www.w3.org/2000/svg" style="
   
">
<g clip-path="url(#clip0_104_258)">
<rect width="761" height="1117" fill="#E3E5FA"/>
<circle opacity="0.1" cx="380.364" cy="549.364" r="357.561" transform="rotate(-5 380.364 549.364)" fill="url(#paint0_linear_104_258)"/>
<g opacity="0.1" filter="url(#filter0_f_104_258)">
<circle r="239.922" transform="matrix(-0.996195 -0.0871557 -0.0871557 0.996195 127.429 139.919)" fill="url(#paint1_linear_104_258)"/>
</g>
<g filter="url(#filter1_f_104_258)">
<ellipse cx="387.277" cy="611.608" rx="165.277" ry="26.608" fill="#818AF9"/>
</g>
</g>
<defs>
<filter id="filter0_f_104_258" x="-212.508" y="-200.017" width="679.873" height="679.873" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_104_258"/>
</filter>
<filter id="filter1_f_104_258" x="122" y="485" width="530.553" height="253.216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_104_258"/>
</filter>
<linearGradient id="paint0_linear_104_258" x1="812.918" y1="726.78" x2="-474.184" y2="349.285" gradientUnits="userSpaceOnUse">
<stop stop-color="#818AF9"/>
<stop offset="1" stop-color="#818AF9" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_104_258" x1="530.164" y1="358.967" x2="-333.476" y2="105.67" gradientUnits="userSpaceOnUse">
<stop stop-color="#818AF9"/>
<stop offset="1" stop-color="#8288D7"/>
</linearGradient>
<clipPath id="clip0_104_258">
<rect width="761" height="1117" fill="white"/>
</clipPath>
</defs>
</svg>

      </v-col>
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
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
          
            half-increments
            hover
                    :empty-icon="emptyIcon"
      :full-icon="fullIcon"
      :half-icon="halfIcon"
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

         

        <div><img src="../assets/shoes.png" alt="" /></div>
          

          <b id="size" >Size :</b>

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
     selection: 2,
     rating: 5,
    emptyIcon: 'mdi-heart-outline',
      fullIcon: 'mdi-heart',
      halfIcon: 'mdi-heart-half',
      produit: {
        name: " Running shoes",
        description: "Men's Road Running shoes",
        price: 200,
        
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
