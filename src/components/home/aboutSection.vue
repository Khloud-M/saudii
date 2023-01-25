<template>
  <div class="about_us">
    <div class="container">
      <div class="col-lg-10 col-sm-12 content">
        <h2>{{ $t("home.aboutUs") }}</h2>
        <p v-html="content"></p>
        <router-link to="/about" class="footer_icon">
          <div>{{ $t("home.read more") }}</div>

          <!-- direction rtl -->
          <div v-if="$i18n.locale == 'ar'">
            <v-icon icon="mdi-arrow-left-thin" />
          </div>

          <!-- dirction ltr -->
          <div v-else><v-icon icon="mdi-arrow-right-thin" /></div>
        </router-link>
      </div>

      <div class="col-lg-4 col-sm-12 image">
        <img src="@/assets/image/about_Us.png" alt="about_us" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: null,
      image: null,
    };
  },
  methods: {
    getContent() {
      this.axios({
        method: "GET",
        url: "about",
      }).then((res) => {
        console.log(res);
        this.content = res.data.data.about;
        this.image - res.data.data.about_image;
      });
    },
  },
  created() {
    this.getContent();
  },
};
</script>
<style lang="scss" scoped>
.about_us {
  margin: 150px 0;
  @media (max-width: 480px) {
    & {
      margin: 0px 0;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    & {
      margin: 100px 0;
    }
  }
  .footer_icon {
    justify-content: center;
  }

  p {
    color: var(--p_color) !important ;
    font-size: 18px !important;
  }
  a {
    color: var(--main_theme_clr) !important;
  }

  @media (max-width: 480px) {
    & {
      padding: 30px;
    }
  }
  .container {
    display: flex;

    flex-wrap: wrap !important;
    justify-content: space-between;
    text-align: justify;
    align-items: center;
    height: 450px;
    @media (max-width: 768px) {
      & {
        gap: 30px;
      }
    }
    .content {
      position: relative;
      background-color: var(--background);
      border-radius: 15px;
      padding: 30px 20px;
      height: 400px;
      @media (max-width: 480px) {
        & {
          height: 300px;
          width: 100%;
        }
      }
    }
    .image {
      position: absolute;
      left: 5%;
      @media (min-width:769px) and (max-width:1024px) {
        left: -5%;    
      }
      img {
        width: 60%;
      }
      @media (max-width: 768px) {
        & {
          display: none;
        }
      }
      @media (min-width:769px) and (max-width:1024px) {
        width: 50%;        
      }
      @media (min-width:1025px) and (max-width:1200px) {
        width: 70%;  
      }
    }
    p {
      font-size: 20px;
      line-height: 40px;
      @media (max-width: 480px) {
        & {
          font-size: 15px;
        }
      }
      @media (max-width: 768px) {
        & {
          font-size: 17px;
        }
      }
    }
  }
}
</style>