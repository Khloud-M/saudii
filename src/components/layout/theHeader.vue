<template>
  <header>
    <div class="container">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/image/logo.png" alt="logo" />
        </div>
      </router-link>

      <ul class="large_screen">
        <router-link to="/"> {{ $t("navs.home") }} </router-link>
        <router-link to="/about"> {{ $t("navs.aboutUs") }} </router-link>
        <router-link to="/offers"> {{ $t("navs.offer") }}</router-link>
        <router-link to="/compition"> {{ $t("navs.compition") }}</router-link>
        <router-link to="/contact"> {{ $t("navs.contactUs") }}</router-link>
      </ul>
      <!--  search_Cart_register -->
      <div class="search_Cart_register">
        <div class="register" v-if="!isLoggedIn">
          <router-link to="/:auth"> {{ $t("navs.register now") }} </router-link>
          <!-- <button @click="removeToken"  v-if="isLoggedIn" >   {{ $t('navs.logout') }} </button> -->
        </div>

        <div class="search">
          <search-icon />
        </div>
        <!-- search-->
        <div class="cart" v-if="isLoggedIn">
          <cart-icon />
        </div>
        <!-- cart-->
        <div class="user" v-if="isLoggedIn">
          <user-acc />
        </div>
      </div>
      <!--  end search_Cart_register -->
      <div class="lang">
        <change-lang />
      </div>

      <div class="mobile">
        <div class="bar" @click="toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <transition name="mobile-nav" appear>
          <div class="container_dropdowm" v-if="mobileNav">
            <div class="content_dropdown">
              <div class="close-nav" @click="toggle">X</div>
              <ul>
                <router-link to="/"> {{ $t("navs.home") }} </router-link>
                <router-link to="/about">
                  {{ $t("navs.aboutUs") }}
                </router-link>
                <router-link to="/offers"> {{ $t("navs.offer") }}</router-link>
                <router-link to="/compition">
                  {{ $t("navs.compition") }}</router-link
                >
                <router-link to="/contact">
                  {{ $t("navs.contactUs") }}</router-link
                >
              </ul>
            </div>
            <!-- content_dropdown-->
          </div>
          <!-- container_dropdowm-->
        </transition>
      </div>
      <!-- mobile-->
    </div>
    <!-- container-->
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import userAcc from "../home/userAcc.vue";
import searchIcon from "../home/searchIcon.vue";
import cartIcon from "../home/cart/cartIcon.vue";
import changeLang from "../home/changeLang.vue";
// import mobileHeader from '@/components/layout/mobileHeader.vue'
export default {
  components: {
    userAcc,
    searchIcon,
    cartIcon,
    changeLang,
    // mobileHeader
  },
  data() {
    return {
      mobileNav: false,
      mobile: false,
      windowWidth: null,
    };
  },
  // created() {
  //   window.addEventListener("resize", this.checkScreen);
  //   this.checkScreen();
  // },
  computed: {
    ...mapGetters({
      isLoggedIn: "authModle/isLoggedIn",
    }),
  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav;
      console.log("close");
    },
    // checkScreen() {
    //   this.windowWidth = window.innerWidth;
    //   if (this.windowWidth <= 1000) {
    //     this.mobile = true;
    //     return;
    //   }
    // },
    removeToken() {
      this.$store.commit("authModle/logout");
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  min-height: 90px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90px;
    a {
      font-family: Cairo-Regular;
      color: var(--theme_text_clr);
      font-size: 16px;
    }
    ul {
      display: flex;

      gap: 25px;
      a {
        position: relative;
      }
      a::before {
        content: "";
        width: 0;
        // width: 100%;
        height: 2px;
        background-color: var(--theme_text_clr);
        left: 0%;
        position: absolute;
        bottom: -41px;
        transition: 0.5s;
      }
      .active::before {
        width: 100%;
      }
      a:hover::before {
        width: 100%;
      }
    }
  }
}
// search_Cart_register
.search_Cart_register {
  display: flex;
  align-items: center;
  gap: 12px;

  .register {
    background-color: var(--background);
    padding: 10px 15px;
    width: fit-content;
    border-radius: 15px;
    a {
      font-size: 16px;
    }
  }
}
.container_dropdowm {
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  .content_dropdown {
    height: 100%;
    .close-nav {
      width: 50px;
      color: white;
      cursor: pointer;
      font-size: 20px;
      margin: 50px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: space-between;
      margin: 50px 0;
      height: 50%;
      // height: 600px;
      a {
        font-family: Medium;
        color: white;
        font-size: 18px;
        &::before {
          display: none;
        }
      }
    }
  }
}
.bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  span {
    width: 50px;
    height: 2px;
    background-color: black;
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.7s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-100%);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}
@media (min-width: 1025px) {
  .mobile {
    display: none !important;
  }
}
@media (max-width: 1024px) {
  .large_screen {
    display: none !important;
  }
  .search_Cart_register {
    display: none !important;
  }
}
</style>