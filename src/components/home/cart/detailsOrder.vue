<template>
  <div class="detailsOrder container">
    <landing-page />
    <div class="detailsOrder">
      <cart-item />
      <div class="footer_details">
        <div class="adress col-lg-4">
          <h5>عنوان التوصيل</h5>
          <span> المنزل</span>
          <p> شارع نقابة الأطباء امام نصر لسيارات </p>
        </div>
        <div class="paying col-lg-4">
          <h5>طريقة الدفع</h5>
          <div class=" m-0 px-0">
            <img src="@/assets/image/masterCard.svg" alt="masterCard" />
            <span>  ماستر كارد </span>
          </div>
        </div>
      </div>
      <theChatting class="chatting" />
    </div>
  </div>
</template>
<script>
import theChatting from "@/components/home/cart/theChatting.vue";
export default {
  components: {
    theChatting,
  },
};
</script>
<style lang="scss" scoped>
.detailsOrder {
  margin: 50px auto;
}
.container {
  overflow: hidden;
  .chatting {
    position: absolute;
    z-index: 99999;
  }
}
.footer_details {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 50px 0;
  div {
    background-color: var(--background);
    color: var(--main_theme_clr);
    padding: 20px;
    border-radius: 10px;
    text-align: justify;
  }
  p{
    color:var( --p_color) !important;
    font-size: 15px;
    line-height: 28px;
  }
}
</style>
