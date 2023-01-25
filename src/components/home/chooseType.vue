<template>
  <div class="choose_type">
    <div class="row d-flex">
      <div class="categery col-lg-3 col-md-12">
        <img src="@/assets/image/phone.png" alt="phone" />
        <h4>الاتصالات وملحقاتها</h4>
      </div>
      <!-- first culmn -->
      <div class="collection col-lg-8 col-md-12">
        <div class="first_row d-flex">
          <div class="categery col-lg-2">
            <img src="@/assets/image/bags.png" alt="bags" />
            <h4>الأحذية والجلديات</h4>
          </div>
          <div class="categery col-lg-2">
            <img src="@/assets/image/makeup.png" alt="makeup" />
            <h4>المكياج والعطور</h4>
          </div>
          <div class="categery col-lg-2">
            <img src="@/assets/image/home.png" alt="home" />
            <h4>اثاث منزلي</h4>
          </div>
          <div class="categery col-lg-2">
            <img src="@/assets/image/4.png" alt="elctronic" />
            <h4>أجهزة إلكترونية</h4>
          </div>
        </div>
        <!-- first_row -->
        <div class="second_row d-flex">
          <div class="categery col-lg-2">
            <img src="@/assets/image/5.png" alt="5" />
            <h4>أجهزة رياضية</h4>
          </div>
          <div class="categery col-lg-2">
            <img src="@/assets/image/6.png" alt="6" />
            <h4>إكسسوارات سيارات</h4>
          </div>
          <div class="categery col-lg-2">
            <img src="@/assets/image/7.png" alt="7" />
            <h4>مستلزمات الطفل</h4>
          </div>
          <div class="categery col-lg-2">
            <!-- <router-link to="/filter">
              <img src="@/assets/image/8.png" alt="8" />
            </router-link> -->
            <img src="@/assets/image/8.png" alt="8" />
            <router-link to="/filter">
              <h4>الأزياء والملابس</h4>
            </router-link>
          </div>
        </div>
        <!-- first_row -->
      </div>
      <!-- second culmn -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.choose_type {
  height: auto;
  margin: 100px 0;
  @media (max-width: 768px) {
    & {
      margin: 40px 0;
    }
  }

  .row {
    justify-content: center;
    // background-color: red;
    height: auto;
    @media (max-width: 768px) {
      & {
        flex-direction: column;

        gap: 20px;
        h4 {
          font-size: 17px;
        }
      }
    }
    .categery {
      background-color: var(--theme_main_bg_clr);
      border-radius: 15px;
      a {
        color: var(--main_theme_clr);
      }
      @media (max-width: 480px) {
        & {
          width: 100%;
        }
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      & {
        padding: 5px 5;

        h4 {
          padding: 20px 0;
          font-size: 15px !important;
        }

        img {
          width: 80%;
        }
      }
    }
    @media (max-width: 480px) {
      & {
        padding: 30px;
        img {
          width: 40%;
        }
      }
    }
    h4 {
      padding: 20px 0;
      font-size: 18px;
    }
    img {
      width: 70%;
    }
  }
  .collection {
    display: flex;
    flex-direction: column;
    gap: 55px;
    flex-wrap: wrap;
 

    .first_row,
    .second_row {
      flex-wrap: wrap;
      justify-content: space-around;
      @media (min-width: 768px) and (max-width: 1024px) {
        & {
          width: 100%;
        }
      }
      @media (max-width: 768px) {
        & {
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
      }
    }
  }
}
</style>