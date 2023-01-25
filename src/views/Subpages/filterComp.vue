<template>
  <section>
    <landing-page />
    <div class="filter">
      <div class="container">
        <div class="choose col-lg-8">
          <span> الكل </span>
        </div>
        <icon-filter class="col-lg-3" />
      </div>
      <emptyCart class="empty_filer" />
    </div>
  </section>
</template>
<script>
import IconFilter from "./iconFilter.vue";
import emptyCart from "@/components/home/cart/emptyCart.vue";

export default {
  components: {
    IconFilter,
    emptyCart,
  },
};
</script>
<style lang="scss" scoped>
section {
  overflow: hidden;
}
.filter {
  background-color: var(--theme_main_bg_clr);
  padding: 30px 0;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  .choose {
    text-align: justify;
    span {
      font-size: 20px;
      color: var(--theme_main_bg_clr);
      background-color: var(--main_theme_clr);
      border-radius: 5px;
      width: 100px;
      padding: 5px 10px ;
      cursor: pointer;
    }
  }
}
.empty_filer {
  margin: 50px 0;
}
</style>>
