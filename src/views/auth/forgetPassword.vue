<template>

        <h2>تأكيد الحساب</h2>
        <p>من فضلك ادخل رقم جوالك</p>
        <form @submit.prevent="submitForm">
          <div class="floating-label">
            <input
              class="floating-input"
              type="phone"
              placeholder=""
              name="phone"
              id="phone"
              v-model="phone"
            />
            <span class="input-highlight"></span>
            <label id="phone"> 
              {{ $t("form.phone") }} 
            </label>
          </div>

          <button type="submit" class="send">
            {{ $t("buttons.submit") }} 

          </button>
        </form>
 
 
</template>
<script>
export default{
  data(){
    return {
      phone:null,
    }
  },
  methods:{
    submitForm()
    {
      const myData = new FormData();
      myData.append("phone", this.phone);
      this.axios({
        method: "POST",
        url: "forgot_password",
        data: myData,
      })
        .then((response) => {
          console.log(response);
            this.$router.push("/:auth/activateAccount/checkCodeToReseatPass");
            this.$toast.success(`    حمدالله ع السلامة وصلت `);

        })

        .catch((error) => {
          console.log(error.response.data.msg);
          this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);

        });
    } ,
  }
}
</script>