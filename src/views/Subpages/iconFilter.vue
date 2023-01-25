<template>
  <section class="cart">
    <button @click="showCart">
      <v-icon icon="mdi-air-filter" />
      <span class="px-1"> {{ $t("homeSubpage.filter") }}</span>
      <div class="toolTip">{{ $t("homeSubpage.filter") }}</div>
    </button>
    <transition name="mobile-nav" appear v-if="show">
      <div class="sidebarCat">
        <div class="container_cart">
          <div class="close-nav" @click="closeCart">X</div>

          <div class="content_cart">
            <h5>{{ $t("homeSubpage.filter") }}</h5>
            <div class="inner_content">
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>اسم التصنيف</option>
                <option value="1">الافضل مبيعا</option>
                <option value="2">المضيف حديثا</option>
              </select>
              <div class="price">
                <h6>السعر</h6>
                <van-slider v-model="value" range @change="onChange" />
              </div>
              <!-- test vue select library -->
              <!-- <div>
                <label class="typo__label">Select with search</label>
                <multiselect
                  v-model="value"
                  :options="options"
                  :custom-label="nameWithLang"
                  placeholder="Select one"
                  label="name"
                  track-by="name"
                ></multiselect>
                <pre class="language-json"><code>{{ value  }}</code></pre>
              </div> -->
              <!--  end test vue select library -->

              <div class="rate">
                <h6>التقييم</h6>
                <div class="text-center">
                  <van-rate
                    v-model="rate"
                    :size="35"
                    color="#ffd21e"
                    void-icon="star"
                    void-color="#d1d0d0f0"
                  />
                </div>
              </div>
              <div class="footer_content">
                <button>بحث</button>
                <button @click="closeCart">الغاء</button>
              </div>
            </div>
          </div>
          <!-- content_dropdown-->
        </div>
        <!-- container_dropdowm-->
      </div>
    </transition>
  </section>
</template>
  <script>
// import Multiselect from "vue-multiselect";


export default {

  data() {
    return {  
      show: false,
      rating: null,
      rate: "",
    };
  },
  methods: {
    showCart() {
      this.show = true;
    },
    closeCart() {
      this.show = false;
    },
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`;
    },
   

  
  },
};
</script>
  <style lang="scss" scoped>
.slider {
  width: 100% !important;
}
button {
  background-color: none;
}
.cart {
  overflow: hidden;
  button {
    border: none;
    background-color: transparent;
    position: relative;
    transition: all 1s ease-in-out;
    height: 85px;
    width: 100px;
    font-size: 20px;

    .toolTip {
      display: none;
      font-size: 13px;
      color: var(--main_theme_clr);
      background: var(--background);
      position: absolute;
      bottom: -5px;
      width: 50px;
      left: 5px;
      border-radius: 15px;
      transition: all 1s ease-in-out;

      transform: scale(0);
    }

    &:hover .toolTip {
      transform: scale(1);
      display: block;
    }
  }

  .sidebarCat {
    background-color: rgb(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0%;
    width: 100%;
    height: 100vh;
    z-index: 9999999;
    .container_cart {
      background-color: var(--background);
      height: 100vh;
      width: 500px;
      right: 0%;
      position: relative;
      padding: 10px;
      .close-nav {
        left: 20px;
        top: 20px;
        position: absolute;
        background-color: white;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        line-height: 35px;
        transition: all 0.3s ease;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          transform: rotate(180deg);
          color: red;
        }
      }
      .content_cart {
        margin: 50px auto;
        width: 80%;
        color: var(--main_theme_clr);
        h5 {
          margin: 50px 0;
          font-size: 25px;
        }
        .inner_content {
          display: flex;
          flex-direction: column;
          gap: 30px;
          text-align: justify;
          .footer_content {
            display: flex;
            justify-content: space-between;
            button {
              border-radius: 20px;
              height: 40px;
            }
            & > :nth-child(1) {
              background-color: var(--main_theme_clr);
              color: white;
              transition: all 0.5s linear;
              &:hover {
                background-color: white;
                color: var(--main_theme_clr);
                border: 1px solid var(--main_theme_clr);
              }
            }
            & > :nth-child(2) {
              background-color: white;
              color: var(--p_color);
            }
          }
        }
      }
    }
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-150%);
}
.mobile-nav-enter-to {
  transform: translateX(0%);
}
</style>