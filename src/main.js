import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTelInput from "vue-tel-input";
import 'vue-tel-input/dist/vue-tel-input.css';
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import vueCountryRegionSelect from 'vue-country-region-select';
import '@mdi/font/css/materialdesignicons.css';
import "../src/components/profileSetting/style.scss";
import "../src/components/profileSetting/login/style.scss";
import "@lottiefiles/lottie-player";
import swal from 'sweetalert';
Vue.use(vueCountryRegionSelect);
Vue.use(VueTelInput);
Vue.component("vue-phone-number-input", VuePhoneNumberInput);
 




Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
