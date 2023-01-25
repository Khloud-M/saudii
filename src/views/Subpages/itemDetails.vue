<template>
  <section class="Product_details mt-3 py-5">
    <div class="first">
      <div class="container">
        <div class="row d-flex the_detials">
          <div class="share col-lg-1">
            <div></div>
            <div class="footer_share">
              <div class="share_Icon">
                <div class="social_icon" v-if="showSocial">
                  <div class="facebook">
                    <ShareNetwork
                      network="facebook"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                      quote="The hot reload is so fast it\'s near instant. - Evan You"
                      hashtags="vuejs,vite"
                    >
                      <img src="@/assets/image/facebook.svg" />
                    </ShareNetwork>
                  </div>
                  <div class="twitter">
                    <ShareNetwork
                      network="twitter"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                      quote="The hot reload is so fast it\'s near instant. - Evan You"
                      hashtags="vuejs,vite"
                    >
                      <img src="@/assets/image/twitter.svg" />
                    </ShareNetwork>
                  </div>
                </div>
                <button @click="Social">
                  <img src="@/assets/image/share.png" alt="share" />
                </button>
              </div>
              <!-- share  -->
              <div>
                <fav-cart />
              </div>
              <!-- cart fav  -->
            </div>
          </div>
          <!-- share -->
          <div class="carsoul-img col-lg-4">
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="true"
              v-model="currentSlide"
            >
              <Slide v-for="slide in collectImg" :key="slide">
                <div class="carousel__item">
                  <img :src="slide" alt="" class="img-fluid" />
                </div>
              </Slide>
            </Carousel>

            <Carousel
              id="thumbnails"
              :items-to-show="3"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
              class="mt-2"
            >
              <Slide v-for="slide in collectImg" :key="slide">
                <div class="carousel__item" @click="slideTo(slide - 1)">
                  <img
                    :src="slide"
                    alt=""
                    class="img-fluid"
                    width="60"
                    height="60"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
          <!-- casoul img-->
          <div class="data_product col-lg-6" v-for="i in item" :key="i">
            <div class="content_product">
              <div class="header_item d-flex">
                <div class="name_item">{{ i.name }}</div>
                <div class="price">{{ i.price }} ر.س</div>
              </div>
              <div class="header_item d-flex">
                <div class="categery">{{ i.categery }}</div>
                <div class="sale">
                  <del> {{ i.sale }} ر.س </del>
                </div>
              </div>
              <div class="header_item d-flex">
                <div class="about_item">{{ i.aboutItem }}</div>
              </div>
              <div class="rates d-flex">
                <svg
                  v-for="rate in 5 - i.rates"
                  :key="rate"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                  />
                </svg>
                <svg
                  v-for="rate in i.rates"
                  :key="rate"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="orange"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
              </div>
              <div class="header_item d-flex">
                <div class="code_item">
                  كود المنتج : <span>{{ i.code }} </span>
                </div>
                <div class="sale">
                  الكمية المتاحة : <span> {{ i.currentQty }} </span>
                </div>
              </div>
            </div>
            <!-- footer data_product -->
            <div class="footer_data">
              <div class="quanty d-flex gap-3">
                <button @click="reduceItem">-</button>
                <span>{{ qty }}</span>
                <button @click="increaseItem" :disabled="qty >= i.currentQty">
                  +
                </button>
              </div>
              <!--quanty-->
              <div class="add_cart">
                <button class="add-cartt">أضف الي السلة</button>
              </div>
            </div>
          </div>
          <!-- data -->
        </div>
      </div>
    </div>

    <!-- row image details -->
    <!-- start more_details -->
    <section class="more_details_up">
      <div class="container">
        <div class="more_details my-5 py-5">
          <h2>تفاصيل المنتج :</h2>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                عن المنتج
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                التعليقات
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div class="test2">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <form @submit.prevent="submitComment">
                <div class="comment_row">
                  <div
                    class="comment"
                    v-for="person in commentsPeople"
                    :key="person"
                  >
                    <div class="image">
                      <img :src="person.img" width="80" height="80" />
                    </div>
                    <div class="content">
                      <div class="name">
                        <span> {{ person.name }} </span>
                        <svg
                          v-for="rate in 5 - person.rate"
                          :key="rate"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                          />
                        </svg>
                        <svg
                          v-for="rate in person.rate"
                          :key="rate"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="orange"
                          class="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                      </div>
                      <div class="comment">{{ person.comment }}</div>
                    </div>
                  </div>
                  <div class="rating">
                    <span> أضــف تـقـيـمك </span>
                    <div class="text-center">
                      <v-rating v-model="rating_value" hover></v-rating>
                    </div>

                    <span> أضــف تعليقـك </span>
                    <div class="enter_rating">
                      <input placeholder="" type="text" v-model="comment" />
                    </div>
                    <button>{{ $t("buttons.submit") }}</button>
                  </div>
                  <!-- end  show comment  -->

                  <!-- enter comment and rating -->
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="similar my-5">
          <h2>منتجات متشابهة</h2>
          <card-component />
        </div>
      </div>
    </section>

    <!-- end more_details -->
    <!-- start Similar products -->

    <!-- end Similar products -->

    <!-- container-->
  </section>
</template>
<script>
import cardComponent from "@/components/home/cardComponent.vue";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
export default defineComponent({
  // name: 'Gallery',
  components: {
    cardComponent,
    Carousel,
    Slide,
    // Navigation,
  },
  props: ["id"],
  data() {
    return {
      tab: null,
      qty: 1,
      currentSlide: 0,
      showSocial: false,
      collectImg: [
        require("@/assets/image/pic1.png"),
        require("@/assets/image/pic1.png"),
        require("@/assets/image/pic1.png"),
        require("@/assets/image/pic1.png"),
      ],
      item: [
        {
          id: 1,
          img: require("@/assets/image/pic1.png"),

          name: "جاكت صيفي",
          categery: "بيت الأزياء",
          price: 231,
          sale: "  200",
          currentQty: 6,
          rates: 4,
          code: 9666,
          aboutItem:
            " هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد منا تريد، النص غوية،  على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع",
        },
      ],
      commentsPeople: [
        {
          id: 2,
          img: require("@/assets/image/hassnaa.jpg"),
          name: " حسناء سلحفة",
          rate: 3,
          comment: "هذا المنتج غاية ف الروعة ",
        },
        {
          id: 3,
          img: require("@/assets/image/khloud.jpg"),
          name: " خلود محمد",
          rate: 5,
          comment: "هذا المنتج غاية ف الروعة ",
        },
      ],
      // comment for details
      rating_value: null,
      comment: null,
    };
  },
  methods: {
    Social() {
      this.showSocial = !this.showSocial;
    },
    slideTo(val) {
      this.currentSlide = val;
    },
    reduceItem() {
      if (this.qty <= 1) return;

      this.qty = this.qty - 1;
    },
    increaseItem() {
      this.qty = this.qty + 1;
    },
    submitComment() {
      const myData = new FormData();
      myData.append("rating_value", this.rating_value);
      myData.append("comment", this.comment);
      myData.append("product_id", this.id);
      this.axios({
        method: "POST",
        url: "client/rating",
        data: myData,
      })
        .then((response) => {
          console.log(response);
          this.comment = response.data.data.comment;
          this.rating_value = response.data.data.rating_value;
          console.log(this.comment);
          this.$toast.success(`      تمت اضافة التعليق بنجاح `);
          this.comment = "";
          this.rating_value = "";
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });
    },
  },
});
</script>
 
  <style lang="scss" scoped>
.v-card {
  background-color: red;
  // height: auto !important;
}
.comment_row {
  display: flex;
  flex-direction: column;
  gap: 40px;
  .comment {
    background-color: var(--background);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 0 12px;
    img {
      border-radius: 50%;
    }
    .content {
      line-height: 30px;
      color: var(--main_theme_clr);
      .comment {
        color: var(--p_color);
      }
      span {
        margin-left: 20px;
      }
    }
  }
  .rating {
    padding: 30px 0;
    background-color: var(--background);
    border-radius: 10px;
    span {
      display: block;
      margin: 10px auto;
      width: fit-content;
      font-size: 20px;
    }
    button {
      border: none;
      background-color: var(--main_theme_clr);
      color: white;
      width: 120px;
      padding: 10px 15px;
      border-radius: 10px;
      transition: all 0.3s linear;
      display: block;
      margin: auto;

      &:hover {
        border: 1px solid var(--main_theme_clr);
        background-color: transparent;
        color: var(--main_theme_clr);
      }
    }
    .enter_rating {
      padding: 10px 0;
      margin: 10px auto;
      height: 80px;

      input {
        display: block;
        width: 80%;
        height: 60px;
        margin: auto;
        border: none;
        outline: none;
        background-color: white;
        position: relative;
        text-align: center;
        border-radius: 10px;
      }
    }
  }
}
button {
  border: none;
}
.Product_details {
  // background-color: var(--background);
  color: var(--main_theme_clr);
  .first {
    background-color: var(--background);
    padding: 40px 0;
  }
  .row {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .share {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .footer_share {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 150px;
      align-items: center;
      .share_Icon {
        display: flex;
        gap: 30px;
        align-items: flex-start;
        .social_icon {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }
        button {
          transition: all 0.5s ease;
        }
      }
    }
  }

  .data_product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    .content_product {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .header_item {
        flex-direction: row;
        justify-content: space-between;
        color: var(--p_color);
        .name_item,
        .price {
          font-size: 25px;
          color: var(--main_theme_clr);
        }

        .about_item {
          text-align: justify;
          line-height: 35px;
        }
        span {
          color: var(--main_theme_clr);
        }
      }
    }
    .footer_data {
      display: flex;
      justify-content: center;
      gap: 20px;
      .add_cart {
        button {
          width: 200px;
          padding: 15px 10px;
          border-radius: 25px;
          background-color: var(--main_theme_clr);
          color: white;
          transition: all 0.5s linear;
          &:hover {
            color: var(--main_theme_clr);
            background-color: transparent;
            border: 1px solid var(--main_theme_clr);
          }
        }
      }
      .quanty {
        background-color: #edeef1;
        width: 300px;
        padding: 12px 10px;
        border-radius: 25px;
        justify-content: space-around;
        font-size: 22px;
      }
    }
  }
}
.more_details {
  text-align: justify;
  h2 {
    margin-right: 17px;
  }
  .test2 {
    background-color: var(--background);
    padding: 20px 10px;
  }
}

// .comment_section {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;

// }
.v-window-item {
  color: var(--main_theme_clr) !important;
  line-height: 50px;
}
.v-tabs {
  background-color: transparent !important;
  color: var(--main_theme_clr) !important;
}
.v-tab.v-tab {
  font-size: large;
}
.v-card--variant-elevated {
  box-shadow: none !important;
  padding: 20px 10px;
}

.similar {
  h2 {
    text-align: justify;
  }
}
// .v-window__container {
//   height: 100px !important;
// }
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--main_theme_clr) !important;
  background-color: transparent !important;
  border-bottom: 1px solid var(--main_theme_clr);
  border-radius: none !important;
}
.nav-pills .nav-link {
  background: none;
  border-radius: 0px !important;
}
.nav-link {
  color: var(--p_color) !important;
}
.nav {
  width: 250px;
  justify-content: space-between;
  font-size: 20px;
}
.more_details_up {
  background-color: var(--theme_main_bg_clr);
  margin: 0px 0;
  padding: 30px 0;
}
</style>
  