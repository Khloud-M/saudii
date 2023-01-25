<template>
  <div class="superSale">
    <div class="image">
      <img src="@/assets/image/3.png" alt="bad_man" />
      <div class="content">
        <p>{{ $t("homeSubpage.superSale") }} </p>
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
</template>
<style lang="scss" scoped>
.footer_icon{
  justify-content: end;
}
.superSale {
  margin-top: 100px ;
  margin-bottom: 100px ;
  background-color: aqua;
  @media (max-width: 768px) {
    & {
      margin: 40px 0;
    }
  }
  .image {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 70vh;
    @media (max-width: 480px) {
        & {
          height: 40vh;
        }
      }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
     

    }
  }
  .content {
    position: absolute;
    z-index: 999999999999;
    top: 35%;
    width: 25%;
    right: 20%;
    color: white !important;
    text-align: left;
    line-height: 60px;
    @media (max-width: 480px) {
      & {
        top: 10%;
        width: 45%;
        right: 2%;
        line-height: 20px !important;
      }
    }
    @media (max-width: 768px) {
      & {
        top: 15%;
        width: 45%;
        right: 2%;
        line-height: 40px;
      }
    }
    p {
      font-size: 25px;
      font-family: Cairo-Regular;
      color: white !important;
      @media (max-width: 480px) {
        & {
          font-size: 14px !important;
        }
      }
      @media (max-width: 768px) {
        & {
          font-size: 20px;
        }
      }

    }
    h3 {
      font-family: semi;
      font-size: 50px;
      @media (max-width: 480px) {
        & {
          font-size: 20px !important;
        }
      }
      @media (max-width: 768px) {
        & {
          font-size: 25px;
        }
      }
    }
    span {
      display: block;
      text-align: right;
      font-family: Cairo-Bold;
      font-size: 23px;
      @media (max-width: 480px) {
        & {
          font-size: 13px !important;
        }
      }
      @media (max-width: 768px) {
        & {
          font-size: 17px;
      text-align: center;

        }
      }
      a {
        color: white;
        font-family: Cairo-Regular;

        img {
          margin-left: 20px;
          width: 100px;
          @media (max-width: 480px) {
            & {
              width: 30px !important;
              margin-left: 10px !important;
            }
          }
          @media (max-width: 768px) {
        & {
          width: 50px;
        }
      }
        }
      }
    }
  }
}
</style>