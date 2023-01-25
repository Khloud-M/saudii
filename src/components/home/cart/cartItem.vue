<template>
  <section>
    <div class="cart_item">
      <div class="prodcut">
        <div class="card_repeat col-lg-2" v-for="item in 4" :key="item">
          <div class="image">
            <img src="@/assets/image/pic1.png" alt="" />
          </div>
          <!-- image -->
          <div class="content_card">
            <div class="name">
              <!-- {{ item.name }}  -->
              <h6>جاكت صيفي</h6>
            </div>
            <div class="categery">
              <!-- {{ item.categery }} -->
              <span> بيت الازياء</span>
            </div>
            <div class="cost">
              <!-- {{ item.price }} ر.س  -->
              <span> 330 رس</span>
            </div>
          </div>
          <!-- content_card-->
        </div>
      </div>
      <!-- product -->
      <div class="price" v-for="price in 3" :key="price">
        <div class="title_price col-lg-3">
          title_price or discount code or total
        </div>
        <div class="bordring col-lg-6">
          <hr />
        </div>
        <div class="action_price col-lg-2">price</div>
      </div>
      <!-- price -->
    </div>
  </section>
</template>
<style lang="scss" scoped>
.cart_item {
  display: flex;
  flex-direction: column;
  gap: 80px;
  color: var(--main_theme_clr);
}
.prodcut {
  display: flex;
  flex-direction: row;
  gap: 20px;
  .card_repeat {
    // height: 330px;
    flex-basis: 200px;
    .image {
      border-radius: 10px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit:cover ;
        object-position: top;

      }
    }
    .content_card {
      // height: 130px;
      margin-top: 0;
      // display: flex;
      // flex-direction: column;
      // align-items: end;
      text-align: justify;
      padding: 0 10px;
      .name {
        color: var(--main_theme_clr);
        font-size: 20px;
      }
      .categery {
        color: var(--p_color);
        font-size: 14px;
      }
      .cost {
        color: var(--mid_green_clr);
        font-size: 17px;
      }
    }
  }
}
.price {
  display: flex;
  flex-direction: row;
  font-size: 16px;
  hr {
    border: 2px solid black;
    border-style: dotted;
  }
}
</style>