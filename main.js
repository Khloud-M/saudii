import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// animation library
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import bootstrap from 'bootstrap';
// import carsoul 3 
import 'vue3-carousel/dist/carousel.css';


// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
const vuetify = createVuetify({
    components,
    directives,
  });

//   import  sharing network
import VueSocialSharing from 'vue-social-sharing';
// import css
import "@/assets/style/main.css";
import "@/assets/style/auth.css";
import "@/assets/style/color.css";
import "@/assets/style/addAdress.css";


  // import public page 
import theHeader from "@/components/layout/theHeader.vue" ;
import theFooter from "@/components/layout/theFooter.vue";
import landingPage from '@/components/layout/landingPage.vue';
import cardComponent from '@/components/home/cardComponent.vue';
import favCart from '@/components/layout/favCart.vue';
import cartItem from '@/components/home/cart/cartItem.vue';


// chat
import Chat from 'vue3-beautiful-chat'

// =============> Multiselect
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
Vue.component('multiselect', Multiselect)

//countdown

// import VueCountdown from "@chenfengyuan/vue-countdown";

//axios

import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL = "https://khlod.aait-d.com/saudi_marsheeh/public/api/";

axios.defaults.headers = {
  'Authorization':`Bearer ${localStorage.getItem('saui-app-user-token')}`,
  Accept: "application/json",
"Accept-Language": i18n.global.locale,

};


//toast

import Toaster from "@meforma/vue-toaster";

//otp
import VOtpInput from "vue3-otp-input";


import i18n from './i18n'



const app = createApp(App)
app.component("the-header",theHeader)
app.component("the-footer" , theFooter)
app.component("landing-page" , landingPage)
app.component("card-component" , cardComponent)
app.component("fav-cart" , favCart)
app.component("cart-item" , cartItem)
// app.component("user-acc" , userAcc)

app.use(i18n)
app.use(store)
app.use(router)
app.use(vuetify)
app.use(bootstrap)
app.use(VueSocialSharing);

// app.component(VueCountdown.name, VueCountdown);
// app.use(VueSocialSharing);
app.component("v-otp-input", VOtpInput)

app.use(VueAxios, axios)

app.use(Chat);
app.use(Toaster)


// app.use(Toaster, {
//   position: "bottom-right",
// });

app.mount("#app");