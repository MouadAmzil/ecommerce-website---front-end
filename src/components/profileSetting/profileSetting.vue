<template>
  <v-row
    style="
      margin: 0;
      height: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-top: 3%;
      background: #f6f6f6;
      border: 3px solid #f6f6f6;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    "
  >
    <v-col cols="3" class="sidebar">
      <template>
        <v-card
          class="mx-auto mt-10"
          max-width="256"
          max-height="456"
          height="356"
          tile
        >
          <v-navigation-drawer permanent>
            <v-list>
              <v-list-item>
                <v-img
                  class="img"
                  width="30"
                  height="50"
                  :src="
                    'http://127.0.0.1:8000/storage/' +
                    useractive[0].picture[0].filename
                  "
                  v-if="useractive[0] != null"
                ></v-img>
                <v-list-item-avatar v-else>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title v-if="useractive[0] != null" class="text-h6">
                    {{ useractive[0].username }}
                  </v-list-item-title>
                  <v-list-item-title v-else class="text-h6">
                    username
                  </v-list-item-title>
                  <v-list-item-subtitle v-if="useractive[0] != null">{{
                    useractive[0].email
                  }}</v-list-item-subtitle>
                  <v-list-item-subtitle v-else
                    >john@vuetifyjs.com</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <router-link
                  to="/modifierProfile"
                  style="text-decoration: none"
                >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon medium color="#8eb3b0"
                        >mdi-account-edit-outline</v-icon
                      >
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>Modifier profil</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
                <router-link to="/changePassword" style="text-decoration: none">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon medium color="#8eb3b0">mdi-lock-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        >Changer de mot de passe</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
              <router-link to="/gestionProduit" style="text-decoration: none">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon medium color="#8eb3b0"
                      >mdi-store-cog-outline</v-icon
                    >
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Gestion Store</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
                
                <router-link to="/loginProfile" style="text-decoration: none">
                  <v-list-item v-if="useractive[0] == null">
                    <v-list-item-icon>
                      <v-icon medium color="#8eb3b0">mdi-login</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>Login</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>

                <v-list-item @click="logout" v-if="useractive[0] != null">
                  <v-list-item-icon>
                    <v-icon medium color="#8eb3b0">mdi-logout</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </template>
    </v-col>
    <v-col cols="9">
      <router-view />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    products: [],
    useractive: [],
    logged: false,
  }),
  mounted() {
    document.title = "Title";

    this.initialize();
  },
  computed: {
    ...mapGetters(["getUserActive"]),
  },
  watch: {},
  created() {},
  methods: {
    initialize() {
      this.useractive = [];
      /*  this.setProduitsAction().then(() => {
        this.products = [...this.getProduits];
      }); */
      this.useractive.push(this.getUserActive);
    },
    ...mapActions(["setProduitsAction"]),
    logout() {
      localStorage.clear();
      localStorage.setItem("logged", false);
      this.logged = false;
      this.$router.push({
        name: "home",
      });
      window.location.reload();
    },
    clickProduitDetails(product) {},
    addToCart(product) {},
    addToWishList(product) {},
  },
};
</script>

<style></style>
