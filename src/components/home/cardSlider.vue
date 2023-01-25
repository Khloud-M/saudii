<template>
  <section class="card_component">
    <div class="container">
      <div class="row d-flex">
        <Carousel
          :items-to-show="3.5"
          :wrap-around="true"
          transition="300"
          autoplay="2000"
          :breakpoints="breakpoints"
        >
          <Slide v-for="item in items" :key="item">
            <div class="carousel__item">
              <div class="card_repeat">
                <div class="image">
                  <router-link :to="`/item/${item.id}`">
                    <img :src="item.img" alt="image" />
                  </router-link>
                </div>
                <!-- image -->
                <div class="content_card">
                  <h5>{{ item.name }}</h5>
                  <small> {{ item.categery }}</small>
                  <div class="footer_card">
                    <div>
                      <fav-cart />
                    </div>
                    <div class="price">
                      <del> {{ item.sale }} </del>
                      <span>
                        {{ item.price }}
                      </span>
                    </div>
                  </div>

                  <!-- footer_card-->
                </div>
              </div>
              <!-- content_card-->
            </div>
          </Slide>

          <template #addons>
            <!-- <Navigation /> -->
          </template>
        </Carousel>
      </div>
    </div>

    <!-- row-->
    <!-- contianer-->
  </section>
  <!-- card_component -->
</template>
  <script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  components: {
    Carousel,
    Slide,
    // Navigation
  },

  props: ["id"],
  data() {
    return {
      items: [
        {
          id: 1,
          img: require("@/assets/image/pic1.png"),
          name: "جاكت صيفي",
          categery: "بيت الأزياء",
          price: 231,
          sale: "200",
          reirectRoute: "",
        },
        {
          id: 2,
          img: require("@/assets/image/pic2.png"),
          name: "تيشرت صيفي",
          categery: "بيت الأزياء",
          price: 331,
          sale: "200",
        },
        {
          id: 3,
          img: require("@/assets/image/pic3.png"),
          name: "تيشرت صيفي",
          categery: "بيت الأزياء",
          price: 331,
        },
        {
          id: 4,
          img: require("@/assets/image/pic4.png"),
          name: "جاكت صيفي",
          categery: "بيت الأزياء",
          price: 231,
          sale: "200",
        },
      ],
      breakpoints: {
        1201: {
          itemsToShow: 3.5,
          snapAlign: "start",
        },
        481: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
        320: {
          itemsToShow: 1,
          snapAlign: "center",
        },

      },
    };
  },
});
</script>
  <style lang="scss" scoped>
.card_component {
  margin: 20px 0;
  @media (max-width: 768px) {
    & {
      margin: 40px 0;
    }
  }

  color: var(--main_theme_clr);
  h2 {
    margin: 40px 0;
  }
  .card_repeat {
    height: 670px;
    overflow: hidden;
    h5 {
      font-size: 23px;
      @media (max-width: 768px) {
        & {
          font-size: 17px;
        }
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        & {
          font-size: 17px;
        }
      }
    }
    small,
    del {
      color: var(--p_color);
      font-size: 18px;
      @media (max-width: 1024px) {
        & {
          font-size: 14px;
        }
      }
    }
    span {
      font-size: 20px;
      margin-left: 10px;
      @media (max-width: 768px) {
        & {
          font-size: 16px;
        }
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        & {
          font-size: 16px;
        }
      }
    }
    .image {
      height: 500px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;
      //   transition:all 0.5s linear;
      img {
        object-fit: cover;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        transition: all 0.4s ease;
        &:hover {
          transform: scale(1.04);
        }
      }
    }
    .content_card {
      display: flex;
      flex-direction: column;
      // align-items: flex-end;
      align-items: self-end;
      text-align: justify;
      padding: 0px 15px;
      margin-top: 20px;
      line-height: 40px;
      .footer_card {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
}
</style>