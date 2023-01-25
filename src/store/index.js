import { createStore } from "vuex";
import authModle from './auth/auth.js';

const store = createStore({
    modules: {
   
        authModle
    
      }
});

export default store;
