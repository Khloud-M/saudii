<template>
  <section class="contact" v-if="!pageLoading">
    <landing-page />
    <div class="map">
      <div class="container py-5">
        <h4>ابقى ع تواصل معنا</h4>
        <div class="content_map">
          <div class="col-lg-3 col-md-4 col-sm-12">
            <img src="@/assets/image/message.png" alt="message" />
            <p v-html="email"></p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <img src="@/assets/image/watts.png" alt="watts" />
            <p v-html="phone"></p>
          </div>
          <div class="col-lg-3  col-md-4 col-sm-12">
            <img src="@/assets/image/location.png" alt="location" />
            <p v-html="location"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <loaderPage v-if="pageLoading" />

</template>
<script>
import loaderPage from "@/components/layout/loaderPage.vue";

export default {
  components: {
    loaderPage,
  },
  data() {
    return {
      email: null,
      phone: null,
      location: null,
    };
  },
  computed: {
    pageLoading() {
      return this.$store.getters["authModle/pageLoading"];
    },
  },
  mounted() {
    this.gethome();
  },
  methods: {
    getContact() {
      this.axios({
        method: "GET",
        url: "contact",
      })
        .then((res) => {
          console.log(res.data.data);
          this.email = res.data.data.email;
          this.phone = res.data.data.phone;
          if (this.phone == "") {
            this.phone = "The number is not available now ";
          }
          this.location = res.data.data.location.desc;
          if (this.location == "") {
            this.location = "The location is not available now ";
          }
          console.log(this.location);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    gethome() {
      this.$store.commit("authModle/pageLoading", true);
      this.axios({
        method: "GET",
        url: "contact",
      }).then((res) => {
        this.about = res.data.data;
        // this.$store.commit("authModle/pageLoading", false);
          setTimeout(() => {
          this.$store.commit("authModle/pageLoading", false);

          }, 600);
      });
    },
  },

  created() {
    this.getContact();
  },
};
</script>
<style  lang="scss" scoped>
.contact {
  overflow: hidden;
  color: var(--main_theme_clr);
}
.map {
  background-image: url(@/assets/image/map.png);
  background-position: center;
  background-size: cover;
  height: 60vh;
  position: relative;
  @media (max-width: 480px) {
    & {
      height: 100vh;
    }
  }
}

.container {
  position: absolute;
  z-index: 99;
  bottom: 0;
  width: 70%;
  left: 15%;
  background-color: white;
  @media (max-width: 480px) {
    & {
      width: 80%;
      left: 10%;
      height: 90vh;
      top:5%;
    }
  }
  h4 {
    padding: 50px 0;
  }
  .content_map {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  
    div {
      align-items: center;
      @media (max-width:480px) {
      &{
        width: 100%;
      }
    }
      img {
        width: 30%;
      }
    }
    p {
      padding: 30px 0;
      font-size: 20px;
      font-family: Cairo-Regular;
      color: #767676;
      @media (max-width:480px) {
      &{
        font-size: 15px;
      }
    }
    }
  }

  // position: absolute;
}
</style>