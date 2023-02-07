<template>
  <div class="carousel_section">
    <div class="col-lg-11 col-sm-12">
      <Carousel :autoplay="2500" 
      transition="700"
      :wrap-around="true">
        <Slide v-for="item in items" :key="item">
          <div class="carousel__item BASIC"><img :src="item.src" /></div>
        </Slide>

        <template #addons>
          <!-- <Pagination /> -->
        </template>
      </Carousel>
    </div>
    <div class="social_media col-md-1 col-sm-12">
      <div>
        <v-icon icon="mdi-facebook" />
      </div>
      <div>
        <v-icon icon="mdi-twitter" />
      </div>
      <div><v-icon icon="mdi-instagram" /></div>
    </div>
  </div>
</template>
  <script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  // name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    // Pagination,
  },
  props:["slider"],
  data() {
    return {
      items: [
        {
          src: "https://khlod.aait-d.com/saudi_marsheeh/public/storage/images/slider/1675214757_GLxP7j3EXHZ9.png",
        },
        {
          src: "https://khlod.aait-d.com/saudi_marsheeh/public/storage/images/slider/1675214757_GLxP7j3EXHZ9.png",
        },
      ],
    };
  },
});
</script>
<style lang="scss">
.carousel__viewport {
  width: 100%;
  border-radius: 15px;
}
.carousel__item.BASIC {
  width: 100% !important;
  img {
    width: 100%;
    height: 80vh !important;
    border-radius: 15px;
    @media (max-width:768px) {
      & {
        height: 50vh !important;
      }
    }
  }
}
.carousel_section {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width:768px) {
    & {
      gap: 40px;
    }
  }
  .social_media {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
      & {
        flex-direction: row;
        margin: auto;
        justify-content: center;
        width: 100%;
      }
    }
  }
}
.v-carousel__controls {
  right: 0 !important;
  top: 0;
  display: flex;
  flex-direction: column !important;
  gap: 15px;
  height: 100% !important;
  justify-content: center;
  list-style-type: none;
  position: absolute;
  width: 7% !important;
  z-index: 1;
}
.v-window {
  height: 600px !important;
  border-radius: 10px !important;
}
// icons style
.social_media {
  .v-icon {
    cursor: pointer;
    color: white;
    width: 50px !important;
    height: 50px !important;
    border: 1px solid var(--main_theme_clr);
    border-radius: 50%;
    background-color: var(--main_theme_clr);
    border: 1px solid var(--main_theme_clr);
    transition: all 0.6s ease-in-out;
    &:hover {
      background-color: transparent !important;
      color: var(--main_theme_clr) !important;
      border: 1px solid var(--main_theme_clr);
      // background-image: linear-gradient(90deg,transparent 50%,var(--main_theme_clr) 0);
    }
    @media (min-width: 481px) and (max-width: 1024px) {
      width: 45px !important;
      height: 45px !important;
    }
  }
  .v-icon--size-default {
    font-size: 35px !important ;
    @media (min-width: 481px) and (max-width: 1024px) {
      font-size: 30px !important ;
      text-align: center;
    }
  }
}

@media (max-width: 480px) {
  .carousel_section {
    flex: none !important;
  }
}
</style>