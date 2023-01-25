<template>
  
        <h2>تسجيل الدخول الي حسابك</h2>
        <p>من فضلك قم بتسجيل بياناتك لتسجيل الدخول</p>
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
          <!-- phone -->
          <div class="floating-label">
            <input
              class="floating-input"
              type="password"
              placeholder=""
              name="password"
              id="password"
              v-model="password"
            />
            <span class="input-highlight"></span>
            <label id="password"> 
              {{ $t("form.password") }}
            </label>
          </div>
          <div class="forgetPassword my-3">
            <router-link to="/:auth/forget"> نسيت كلمة المرور </router-link>
          </div>
          <button type="submit" class="send">
            {{ $t("buttons.signIn") }}
          </button>
        </form>

      <div class="footer_auth d-flex mt-3">
        <router-link to="/:auth/register">
          <p>ليس لد يك حساب بالفعل ؟</p>
        </router-link>
        <router-link to="/:auth/register" class="singIn">
          {{ $t("buttons.signUp") }}
        </router-link>
      </div>

    <!-- content_auth -->

</template>
<script>
export default{
  data(){
    return {
      phone:null,
      password:null 
    }
  },
  methods:{
    submitForm()
    {
      const myData = new FormData();
      myData.append("password", this.password);
      myData.append("phone", this.phone);
      myData.append("device_token", "token");
      myData.append("type", "ios");
     
      this.axios({
        method: "POST",
        url: "login",
        data: myData,
      })
        .then((response) => {
          console.log(response);
         
            this.$store.commit("authModle/setCurrentUserData", {
              token: response.data.data.token,
              email: response.data.data.email, });
           
            this.$router.push("/");
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

