<template>
  <div>
    <v-row style="margin: 0">
      
      <v-col cols="6" class="col1" style="margin: 0; padding: 0 ; position:relative;">
        <svg
          width="650px"
          height="656px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style=""
        >
        
          <g clip-path="url(#clip0_104_258)">
           
            <rect width="761" height="1117" fill="#E3E5FA" />
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
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              <stop offset="1" stop-color="#818AF9" stop-opacity="0" />
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
          <v-chip color="red" label text-color="white" >HOTSALE</v-chip>
          <h3>Nike React Miler</h3>
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
              {{ produit.name }}
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
          <p>{{ produit.description }}</p>
          <h3>{{ produit.price }}$</h3>
          <div class="colors">
            <p style="margin-top: 20px">Colors :</p>

            <p class="box">
              <v-chip small color="blue lighten-4" class="ma-1"> </v-chip>

              <v-chip small class="ma-1" color="grey darken-2"> </v-chip>

              <v-chip small class="ma-1" color="deep-orange lighten-5">
              </v-chip>
            </p>
          </div>

          <div><img src="../assets/shoes.png" alt="" /></div>

          <b id="size">Size :</b>

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
      rating: 3.5,
      emptyIcon: "mdi-star-outline",
      fullIcon: "mdi-star",
      halfIcon: "mdi-star-half",
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
