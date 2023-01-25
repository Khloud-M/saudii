<template>
  <section v-if="!pageLoading">
    <landing-page />
    <card-component />
  </section>
  <loaderPage v-if="pageLoading" />
</template>   
<style scoped>
section {
  overflow: hidden;
}
</style>
<script>
import loaderPage from "@/components/layout/loaderPage.vue";
export default {
  components: {
    loaderPage,
  },
  computed: {
    pageLoading() {
      return this.$store.getters["authModle/pageLoading"];
    },
  },
  mounted(){
    this.gethome()
  },
  methods: {
    gethome() {
      this.$store.commit("authModle/pageLoading", true);
      this.axios({
        method: "GET",
        url: "client/offers",
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
