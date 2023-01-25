<template>
  <div class="collection_sale">
    <div class="row d-flex">
      <div class="collection">
        <div class="image">
          <img src="@/assets/image/sale1.png" alt="sale1" />
          <div class="content">
            <p>{{ $t("homeSubpage.NewSeason") }}</p>
            <h3>{{ $t("homeSubpage.sale") }}</h3>
            <span>
              <router-link to="/offers" class="footer_icon">
                <div>{{ $t("homeSubpage.shopNow") }}</div>

                <!-- direction rtl -->
                <div v-if="$i18n.locale == 'ar'">
                  <v-icon icon="mdi-arrow-left-thin" />
                </div>

                <!-- dirction ltr -->
                <div v-else><v-icon icon="mdi-arrow-right-thin" /></div>
              </router-link>
            </span>
          </div>
        </div>
      </div>
      <!-- collection-->
      <div class="sale">
        <div class="image">
          <img src="@/assets/image/sale2.png" alt="sale2" />
          <div class="content">
            <p>{{ $t("homeSubpage.superSale") }}</p>
            <h3>{{ $t("homeSubpage.newCollection") }}</h3>
            <span>
              <router-link to="/addNew" class="footer_icon">
                <div>{{ $t("homeSubpage.shopNow") }}</div>

                <!-- direction rtl -->
                <div v-if="$i18n.locale == 'ar'">
                  <v-icon icon="mdi-arrow-left-thin" />
                </div>

                <!-- dirction ltr -->
                <div v-else><v-icon icon="mdi-arrow-right-thin" /></div>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer_icon {
  justify-content: end;
}
.collection_sale {
  margin: 80px 0;
  @media (max-width: 768px) {
    & {
      margin: 40px 0 !important;
    }
  }
}
.row {
  display: flex;
  height: 60vh;
  justify-content: space-evenly;
  gap: 0px;
  @media (max-width: 768px) {
    & {
      width: 100%;
      height: auto !important;
      margin: auto;
      gap: 20px;
    }
  }
  @media (max-width: 768px) {
    & {
      width: 90%;
    }
  }
  .collection,
  .sale {
    width: 46%;
    height: 50vh;
    position: relative;
    @media (max-width: 768px) {
      & {
        width: 100%;
        height: auto;
      }
    }
    .image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
    .content {
      position: absolute;
      top: 30%;
      width: 45%;
      text-align: left;
      line-height: 50px;
      color: var(--main_theme_clr);
      @media (max-width: 480px) {
        & {
          top: 10%;
          line-height: 30px;
        }
      }
      @media (min-width: 481px) and (max-width: 1024px) {
        & {
          top: 20%;
          line-height: 40px;
        }
      }

      p {
        font-size: 30px;
        font-family: Cairo-Regular;
        @media (max-width: 480px) {
          & {
            font-size: 18px;
          }
        }
        @media (min-width: 481px) and (max-width: 1024px) {
          & {
            font-size: 22px;
          }
        }
      }
      h3 {
        font-family: Cairo-Bold;
        font-size: 45px;
        @media (max-width: 480px) {
          & {
            font-size: 20px;
          }
        }
        @media (min-width: 481px) and (max-width: 1024px) {
          & {
            font-size: 25px;
          }
        }
      }
      span {
        display: block;
        text-align: center;
        font-family: Cairo-Bold;
        font-size: 22px;
        @media (max-width: 480px) {
          & {
            font-size: 14px;
          }
        }
        @media (min-width: 481px) and (max-width: 1024px) {
          & {
            font-size: 18px;
          }
        }
        a {
          color: var(--main_theme_clr);
        }
        img {
          width: 100px;
          @media (max-width: 480px) {
            & {
              width: 30px;
            }
          }
          @media (min-width: 481px) and (max-width: 1024px) {
            & {
              width: 40px;
            }
          }
        }
      }
    }
  }
  .collection {
    .content {
      left: 9%;
    }
  }
  .sale {
    .content {
      right: 9%;
    }
  }
}
</style>

