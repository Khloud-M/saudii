<template>
  <section class="footer py-5 mt-2">
    <div class="container d-flex justify-content-between">
      <div class="col-lg-3 col-md-5 col-sm-12">
        <img src="@/assets/image/footerLogo.png" alt="logo" />
        <p class="mt-2">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص
        </p>
      </div>
      <!-- end first div -->
      <div class="col-lg-3 col-md-6 col-sm-12 d-flex">
        <div class="basic_section">
          <ul>
            <h4>الأقسام الرئيسية</h4>
            <li>
              <router-link to="/Help"> {{ $t("home.help") }}</router-link>
            </li>
            <li>
              <router-link to="/common"> {{ $t("home.commonquestions") }}</router-link>
            </li>
            <li>
              <router-link to="/privacy"> {{ $t("home.privacypolicy") }}</router-link>
            </li>
            <li> {{ $t("home.TermsConditions") }}</li>
            <li> {{ $t("home.Instructionsuse") }} </li>
          </ul>
        </div>
        <div class="important_links">
          <ul>
            <h4>الراوبط المهمة</h4>
            <li>
              <router-link to="/"> {{ $t("navs.home") }}</router-link>
            </li>
            <li>
              <router-link to="/compition"> {{ $t("navs.compition") }}</router-link>
            </li>
            <li>
              <router-link to="/about"> {{ $t("navs.aboutUs") }}</router-link>
            </li>
            <li>
              <router-link to="/offers"> {{ $t("navs.offer") }} </router-link>
            </li>
            <li>
              <router-link to="/contact"> {{ $t("navs.contactUs") }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- end second div -->
      <div class="col-lg-4 col-md-6 col-sm-12 Download">
        <h4>Download Our Mobile App</h4>
        <div class="content_download">
          <div class="col-lg-6 col-sm-6">
            <p>Get Our Offers<br />Only On Our Ap</p>
            <div class="icons d-flex">
              <div class="col-md-6 col-sm-12">
                <img src="@/assets/image/google_play.png" alt="googlePlay" />
              </div>
              <div class="col-md-6 col-sm-12">
                <img src="@/assets/image/google_play.png" alt="googlePlay" />
              </div>
            </div>
          </div>
          <!--  first div -->
          <div class="col-lg-4 col-md-5">
            <img src="@/assets/image/phone.svg" alt="phone" />
          </div>
          <!-- last div -->
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.footer {
  background-color: var(--footer_bg_clr);
  color: white !important;
  text-align: justify;
  font-family: Cairo-Regular;
 p{
  color: white !important;

 }
  .container {
    flex-wrap: wrap;
    @media (max-width: 480px) {
      & {
        gap: 20px;
      }
    }
    @media (min-width: 481px) and (max-width: 1024px) {
      & {
        gap: 25px;
      }
    }
    h4 {
      font-size: 22px;
      @media (max-width: 768px) {
        & {
          font-size: 16px;
        }
      }
    }
    a {
      color: white;
      @media (max-width: 768px) {
        & {
          font-size: 12px;
        }
      }
    }
    li {
      margin-top: 20px;
      cursor: pointer;
    }
    & > :nth-child(1) {
      p {
        font-size: 20px;
        @media (max-width: 768px) {
          & {
            font-size: 13px;
          }
        }
      }
    }
  }
}
// end div at the footer
.Download {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 10px;
  @media (max-width: 480px) {
    h4 {
      text-align: justify !important;
    }
  }
  .content_download {
    display: flex;
    justify-content: center;
    gap: 15px;
    img {
      width: 100%;
    }

    .icons {
      display: flex;
      gap: 5px;
      margin-top: 50px;
      img {
        width: 100%;
      }
    }
    & > :nth-child(1) {
      p {
        margin-top: 105px;
        @media (max-width: 480px) {
          margin-top: 50px;
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          & {
            margin-top: 50px;
          }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          & {
            margin-top: 140px;
          }
      }
    }
  }
}
}
</style>