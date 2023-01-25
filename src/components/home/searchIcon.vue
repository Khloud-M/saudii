<template>
  <div class="text_center">
    <button @click="showCart">
      <img src="@/assets/image/search.png" alt="search" />
      <div class="toolTip">{{ $t("navs.search") }}</div>
    </button>

    <div v-if="show" data-aos="zoom-in" class="showSearch">
      <div class="close-nav" @click="closeCart">X</div>
      <div class="conainer_showSearch">
        <div class="search_input">
          <input type="search" 
          :placeholder="
                      $t('home.search')
                    "/>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showCart() {
      this.show = true;
    },
    closeCart() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.text_center {
  button {
    border: none;
    background-color: white;
    position: relative;
    transition: all 0.5s ease;
    width: 60px;


    .toolTip {
      display: none;
      font-size: 13px;
      color: var(--main_theme_clr);
      background: var(--background);
      position: absolute;
      bottom: -35px;
      width: 60px;
      left: -10px;
      border-radius: 15px;
      transition: all 0.5s ease;

      transform: scale(0);
    }

    &:hover .toolTip {
      transform: scale(1);
      display: block;
    }
  }
  .showSearch {
    background-color: rgb(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999999;
    .close-nav {
      position: absolute;
      left: 5%;
      top: 7%;
      background-color: transparent;
      color: white;

      border-radius: 50%;
      width: 35px;
      height: 35px;
      line-height: 35px;
      transition: all 0.3s ease;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        transform: rotate(180deg);
        color: red;
        font-size: 30px;
      }
    }
  }
  .conainer_showSearch {
    width: 70%;
    margin: 15% auto;
    height: 200px;
    .search_input {
      max-width: 80%;
      margin: auto;
      height: 150px;
      border-bottom: 2px solid white;
      input {
        width: 100%;
        height: 80%;
        outline: none;
        border: none;
        text-align: center;
        font-size: 40px;
        color: white;
        background-color: transparent;
        &::placeholder {
          font-size: 25px;
          color: white;
        }
      }
    }
  }
}
</style>