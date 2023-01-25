<template>
    <section>
        
        <notfound-cart   v-if="todos.length"/>
         <router-link to="/adressAcc/enterAdress">
           <button>  {{ $t("buttons.add new adress") }} </button>
         </router-link>
     
    </section>
</template>
<script>
import notfoundCart from "@/components/layout/notfoundCart.vue";

export default {
  components: { notfoundCart },
  data() {
    return {
      todos: [" "],
    };
  },
};
</script>