<template>
  <button
    class="btn"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  >
    <img src="@/assets/image/user.png" alt="user" />
    <div class="toolTip"> {{ $t("navs.profile") }}</div>

  </button>

  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="body" v-for="item in items" :key="item.id">
        <div class="image">
          <div><img :src="item.img" alt="userPic" /></div>
          <div>
            <h3>{{ item.name }}</h3>
          </div>
        </div>
        <div class="icon">
          <router-link :to="item.routing ? item.routing:'' "
            >
            <div v-if="$i18n.locale == 'ar'">
              <v-icon icon="mdi-chevron-left" />
            </div>
            <div v-else><v-icon icon="mdi-chevron-right" /></div>
          </router-link>
        </div>
      </div>
      <div class="logut d-flex" v-if="isLoggedIn">
        <img src="@/assets/image/logout.png" alt="logout" width="38" height="38"/>
         <button class="logOut"  @click="removeToken" >   {{ $t('navs.logout') }}</button>
      </div>
      <!-- <button class="logOut"  @click="removeToken" v-if="isLoggedIn">   {{ $t('navs.logout') }}</button> -->

    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: require("@/assets/image/user1.png"),
          name: "أحمد على",
          routing: "/editAcc",
        },
        {
          id: 2,

          img: require("@/assets/image/user2.png"),
          name: "طلباتي",
          routing: "/detailsOrder",

        },
        {
          id:3,

          img: require("@/assets/image/user3.png"),
          name: " رصيد الجساب ",
        },
        {
          id:4,

          img: require("@/assets/image/user3(2).png"),
          name: "العناوين",
          routing: "/adressAcc",

        },
        {
          id:5,

          img: require("@/assets/image/user4.png"),
          name: " الأسئلة الشائعة ",
          routing: "/common",
        },
        {
          id:6,
          img: require("@/assets/image/user5.png"),
          name: "  سياسة الخصوصية ",
          routing: "/privacy",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "authModle/isLoggedIn",
    }),
  },
  methods:{
    removeToken(){
     this.$store.commit('authModle/logout');
     this.$router.push("/")
    }
  }
  
};
</script>
<style lang="scss" scoped>
.logut{
  gap: 25px;
  .logOut{

    border: none;
    color: var(--theme_text_clr);
    font-size: 20px;
    background-color: var(--background);
    text-align: justify;
    // margin: 0 28px;
    width: fit-content;
}
}

  button {
    border: none;
    background-color: white;
    position: relative;
    transition: all 0.5s ease;   
    
    .toolTip{
      display: none;
      font-size: 13px;
      color: var(--main_theme_clr);
      background: var(--background);
      position: absolute;
      bottom: -28px;
      width: 100px;
      left: 0px;
      border-radius: 15px;
      transition: all 0.5s ease;   
    
      transform: scale(0);
    }
      
    &:hover .toolTip{
      transform: scale(1);
      display: block;
    }
  }
.offcanvas.offcanvas-start {
  background-color: var(--background);
  .btn-close {
    left: 10px !important;
    position: absolute;
    top: 4%;
  }
}
.offcanvas-body {
  display: flex;
  flex-direction: column;
  color: var(--main_theme_clr);
 justify-content: space-evenly;
  .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .image {
      display: flex;
      justify-content: center;
      gap: 25px;
      align-items: center;
      h3 {
        font-size: 20px;
      }
    }
  }
}
.v-icon {
  color:var(--main_theme_clr) !important;
}

.fade {
  transition: all 0.15s ease-in-out !important;
}

.offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
}
.offcanvas-backdrop.show {
  opacity: 0.8 !important;
  right: 0 !important;
}
@keyframes test {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>