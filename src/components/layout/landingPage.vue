<template>
  <section>
    <img src="@/assets/image/landing.jpg" alt="landing" class="landing" />
    <div class="content">
      <h3>{{ getPath() }}</h3>
      <ul class="d-flex">
        <li><router-link to="/"> {{ $t("navs.home") }} </router-link></li>
        <li>
          <div v-if="$i18n.locale == 'ar'">
              <v-icon icon="mdi-chevron-left" />
            </div>
            <div v-else><v-icon icon="mdi-chevron-right" /></div>
        </li>
        <li>{{ getPath() }}</li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section{
  margin-top: 10px;
}
.landing {
  position: relative;
  z-index: 1;
}
.content {
  width: 20%;
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 40%;
  text-align: center;
  @media (max-width: 768px) {
    & {
      width: 70%;
      left: 15%;
    }
  }
  h3 {
    font-size: 27px;
    font-family: Cairo-Bold;
    color: var(--main_theme_clr);
    margin: 15px 0;
    @media (max-width: 480px) {
      & {
        font-size: 20px;
      }
    }
  }
  ul {
    justify-content: center;
    gap: 10px;
    font-size: 18px;
    font-family: Cairo-Regular;
    margin-top: 20px;
    @media (max-width: 480px) {
      & {
        font-size: 15px;
        margin-top: 40px;
      }
    }
    a {
      color: var(--main_theme_clr);
    }
    & > :nth-child(3) {
      color: var(--p_color);
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      myPath: window.location.pathname,
    };
  },
  methods: {
    getPath() {
      this.myPath = this.myPath.replace("/", "");
      if (this.myPath === "about") {
        // if($i18n.locale == 'ar') {
          const newPath = "من نحن";
        return newPath;
        // }    
       
        
     
     
      }
      if (this.myPath === "offers") {
        const newPath = "العروض";
        return newPath;
      }
      if (this.myPath === "compition") {
        const newPath = "المسابقات والجوايز";
        return newPath;
      }
      if (this.myPath === "contact") {
        const newPath = "ا تصل بنا";
        return newPath;
      }
      if (this.myPath === "addNew") {
        const newPath = " أحدث الإضافات";
        return newPath;
      }
      if (this.myPath === "Sales") {
        const newPath = " الأكثر مبيعا  ";
        return newPath;
      }
      if (this.myPath === "rate") {
        const newPath = " الأعلى تقييما    ";
        return newPath;
      }
      if (this.myPath === "editAcc") {
        const newPath = " حسابي     ";
        return newPath;
      }
      if (this.myPath === "privacy") {
        const newPath = " سياسة الخصوصية     ";
        return newPath;
      }
      if (this.myPath === "common") {
        const newPath = " الأسئلة الشائعة     ";
        return newPath;
      }
      if (this.myPath === "adressAcc") {
        const newPath = " العناو يـيـن   ";
        return newPath;
      }
      if (this.myPath === "/adressAcc/enterAdress") {
        const newPath = " العناو يـيـن   ";
        return newPath;
      }
      if (this.myPath === "Help") {
        const newPath = "  المسـاعد ة   ";
        return newPath;
      }
      if (this.myPath === "detailsOrder") {
        const newPath = "  تفاصيل الطلب  ";
        return newPath;
      }
      if (this.myPath === "filter") {
        const newPath = "   الأزياء والملابس  ";
        return newPath;
      }
    },
  },
};
</script>
