<template>
  <section class="compsitioin" v-if="!pageLoading">
    <landing-page />
    <div class="container">
      <div class="qeustion col-md-5 col-sm-12">
        <span> سؤال الشهر</span>
        <h3>كم تبلغ مساحة الرياض ؟</h3>
      </div>
      <div class="answer col-md-5 col-sm-12">
        <input :placeholder="$t(`placeholder.Enter Anwser here`)" type="text" />
        <button>{{ $t("buttons.submit") }}</button>
      </div>
      <div class="winner col-md-5 col-sm-12">
        <h5>قا ئـمة الفائـزين بمسـابقة شهر محرم</h5>
        <div class="row d-flex">
          <div
            class="member col-md-3 col-sm-12"
            v-for="item in items"
            :key="item"
          >
            <div class="Ranking">{{ item.rank }}</div>
            <div class="image">
              <img :src="item.img" width="80" height="80" />
            </div>
            <div class="name">{{ item.name }}</div>
            <div class="prize">{{ item.prize }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {{ pageLoading }}
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
      about: null,
      items: [
        {
          id: 1,
          rank: "المركز الأول",
          img: require("@/assets/image/aaa.jpg"),
          name: " ألاء عبد الرحمن ",
          prize: "iPhone 13 pro Max",
        },
        {
          id: 2,
          rank: " الأول مكرر",
          img: require("@/assets/image/hassnaa.jpg"),
          name: " حسناء سلحفة",
          prize: "iPhone 13 pro Max",
        },
        {
          id: 3,
          rank: " الأول مكرر",
          img: require("@/assets/image/khloud.jpg"),
          name: " خلود محمد",
          prize: "iPhone 13 pro Max",
        },
      ],
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
    gethome() {
      this.$store.commit("authModle/pageLoading", true);
      this.axios({
        method: "GET",
        url: "client/competition",
      }).then((res) => {
        this.about = res.data.data;
        // this.$store.commit("authModle/pageLoading", false);
          setTimeout(() => {
          this.$store.commit("authModle/pageLoading", false);

          }, 600);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.compsitioin {
  overflow: hidden;
  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 70px auto;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: var(--main_theme_clr);
  }
  .qeustion {
    background-color: var(--background);
    padding: 20px;
    line-height: 50px;
    transition: all 0.5s linear;
    cursor: pointer;
    border-radius: 11px;
    &:hover {
      background-color: var(--main_theme_clr);
      color: white;
      border: 1px solid var(--main_theme_clr);
      transform: scale(1.05);
    }
  }
  .answer {
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: 17px;
    flex-direction: row;
    border: 1px solid var(--background);
    padding: 15px 10px;
    input {
      height: 100%;
      outline: none;
      border: none;
      padding: 0 5px;
      color: var(--main_theme_clr);
    }
    button {
      border: none;
      background-color: white;
      padding: 0 10px;
    }
  }
  .row {
    justify-content: space-between;
    margin: 30px 0;

    .member {
      background-color: var(--background);
      padding: 10px 5px;
      border-radius: 5px;
      div {
        margin: 10px 0;
      }
      .image {
        img {
          border-radius: 50%;
        }
      }
      .Ranking {
        font-size: 13px;
      }
      .prize {
        color: var(--p_color);
        font-size: 13px;
      }
    }
  }
}
// responsive
@media (max-width: 769px) {
  h5,
  h3,
  span {
    font-size: 15px;
  }
}
@media (min-width: 481px) and (max-width: 1024px) {
  .winner {
    width: 100%;
  }
}
</style>
