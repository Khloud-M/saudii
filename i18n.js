import { createI18n } from "vue-i18n";
import Cookies from "js-cookie";
import en from "./locales/en.json";
import ar from "./locales/ar.json";


export default createI18n({
  locale:Cookies.get('locale')|| 'ar',
  messages:{
    en:en,
    ar:ar
  }
})