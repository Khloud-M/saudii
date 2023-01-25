<template>
  <section class="homePage">
    <!-- start carsoul  -->
    <carousel-page :slider="slider" />
    <!-- end carsoul  -->
    <about-section  />
    <!-- end  about_US -->
    <!--  start choose_type -->
    <choose-type />
    <!--  end choose_type -->
    <!-- start card component -->
    <section class="add d-flex">
      <h2>{{ $t("home.Latest additions") }}</h2>

      <card-slider />
      <div class="routing">
        <router-link to="/addNew" class="footer_icon">
          <div>{{ $t("home.showall") }}</div>

          <!-- direction rtl -->
          <div v-if="$i18n.locale == 'ar'">
            <v-icon icon="mdi-arrow-left-thin" />
          </div>

          <!-- dirction ltr -->
          <div v-else><v-icon icon="mdi-arrow-right-thin" /></div>
        </router-link>
      </div>
    </section>
    <!-- end card component -->
    <collection-sale />
    <!-- heighest sales -->
    <section class="sales d-flex">
      <h2>{{ $t("home.best seller") }}</h2>
      <card-slider />
      <div class="routing">
        <router-link to="/Sales" class="footer_icon">
          <div>{{ $t("home.showall") }}</div>

          <!-- direction rtl -->
          <div v-if="$i18n.locale == 'ar'">
            <v-icon icon="mdi-arrow-left-thin" />
          </div>

          <!-- dirction ltr -->
          <div v-else><v-icon icon="mdi-arrow-right-thin" /></div>
        </router-link>
      </div>
    </section>

    <super-sale />
    <!-- highest rated -->
    <section class="rated d-flex">
      <h2>{{ $t("home.highest rated") }}</h2>
      <card-slider />
      <div class="routing">
        <router-link to="" class="footer_icon">
          <div>{{ $t("home.showall") }}</div>

          <!-- direction rtl -->
          <div v-if="$i18n.locale == 'ar'">
            <v-icon icon="mdi-arrow-left-thin" />
          </div>

          <!-- dirction ltr -->
          <div v-else><v-icon icon="mdi-arrow-right-thin" /></div>
        </router-link>
      </div>
    </section>
  </section>
</template>
<script>
import carouselPage from "@/components/home/carouselPage.vue";
import chooseType from "@/components/home/chooseType.vue";
// import cardComponent from "@/components/home/cardComponent.vue";

import collectionSale from "@/components/home/newcollectionSale.vue";
import superSale from "@/components/home/superSale.vue";
import aboutSection from "@/components/home/aboutSection.vue";
import cardSlider from "@/components/home/cardSlider.vue";

export default {
  components: {
    carouselPage,
    collectionSale,
    superSale,
    chooseType,
    // cardComponent,
    aboutSection,
    cardSlider,
  },
  data() {
    return {
      slider: null,
    };
  },
 
 
};
</script>
<style lang="scss">
.homePage {
  color: var(--main_theme_clr);
  overflow: hidden;
}
// start about_us

// start choose_type

.add,
.sales,
.rated {
  flex-direction: column;
  margin: 200px 0;
  @media (max-width: 480px) {
    & {
      margin: 100px 0;
    }
  }
  .routing {
    margin: 50px auto;
    a {
      color: var(--main_theme_clr);
      font-weight: Cairo-Bold;
      font-size: 25px;
      margin-left: 20px;
      @media (max-width: 768px) {
        & {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
