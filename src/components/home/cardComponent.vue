<template>
  <section class="card_component">
    <div class="container">
      <div class="row d-flex">
        <div
          class="card_repeat col-lg-3 col-md-6"
          v-for="item in items"
          :key="item"
        >
  
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
              <div class="price">
                <span> {{ item.price }} ر.س </span>
                <del> {{ item.sale }} </del>
              </div>
              <div >
                <fav-cart/>
              </div>
            </div>

            <!-- footer_card-->
          </div>
          <!-- content_card-->
        </div>
      </div>

      <!-- row-->
    </div>
    <!-- contianer-->
  </section>
  <!-- card_component -->
</template>
<script >
export default {

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
          sale: " ر.س 200",
          reirectRoute: ""
        },
        {
          id: 2,
          img: require("@/assets/image/pic2.png"),
          name: "تيشرت صيفي",
          categery: "بيت الأزياء",
          price: 331,
          sale: " ر.س 200",
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
          sale: " ر.س 200",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
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
      align-items: start;
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