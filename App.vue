<template>
  <div :class="$i18n.locale == 'ar' ? 'is-rtl' : ''">
    <the-header v-if="!$route.params.auth" />
  <transition name="route" mode="out-in">
    <router-view />
  </transition>

  <the-footer v-if="!$route.params.auth" />
  </div>
  
</template>
<script >
import i18n from "./i18n";
   export default {
    mounted(){
      if (i18n.global.locale == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }
    }
   }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.is-rtl{
  // content in nercollectionSale page 
  .collection_sale.content{
        text-align: right !important;

      }
    }
</style>
