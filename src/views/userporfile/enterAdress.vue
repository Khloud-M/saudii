<template>
  <form @submit.prevent="submitAdress">
    <div class="putting_address col-lg-12">
      <div class="col-md-5">
        <input type="search" placeholder="ابحث هنا " />
      </div>
      <div class="col-md-5">
        <input type="text" placeholder=" العنوان " v-model="address" />
      </div>
    </div>
    <div class="map col-lg-11">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30555318651!2d31.382839649999998!3d31.041386149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2sMansoura%2C%20Mansoura%20Qism%202%2C%20El%20Mansoura%2C%20Dakahlia%20Governorate!5e0!3m2!1sen!2seg!4v1673707531876!5m2!1sen!2seg"
        width="100%"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </form>
  <input
    type="text"
    v-model="newTodo"
    @keypress.enter="addTodo"
    :placeholder="$t(`buttons.add adress home`)"
    v-if="show"
  />
  <button @click="showInut">{{ $t("buttons.add new adress") }}</button>
</template>
  
  <script>
export default {
  data() {
    return {
      address: null,
    };
  },
  method: {
    submitAdress() {
      // this.$router.push("/:auth/activateAccount/verifyToSignUp");
      // console.log("استغفر الله العظيم");
      const myData = new FormData();
      myData.append("address", this.address);
      this.axios({
        method: "POST",
        url: "client/address",
        data: myData,
      })
        .then((response) => {
          console.log(response);
          // this.address= response.data
          this.$toast.success(`     تمت اضافة العنوان بنجاح  `);
          // localStorage.setItem("phone", this.phone);
        })
        .catch((error) => {
          console.log(error.response.data.msg);
          this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>
  
  <style lang="scss" scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
.putting_address {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  div {
    height: 50px;
    border-radius: 10px;
    input {
      width: 100%;
      outline: none;
      border: none;
      padding: 12px;
      background-color: var(--form_content_bg_clr);
      border-radius: 30px;
      border: 2px solid var(--border_clr);
    }
  }
}
</style>