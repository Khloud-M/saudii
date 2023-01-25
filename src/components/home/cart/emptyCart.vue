<template>
    <div class="empty_Cart">
        <img src="@/assets/image/freeCart.svg" alt="cart"
            width="300"  />
            <h5>  {{ $t("navs.sorry") }}  </h5>
    </div>
</template>
<style scoped>
  h5{
    margin: 30px 0;
    color: var(--main_theme_clr);
  }
</style>