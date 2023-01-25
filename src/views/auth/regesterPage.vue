<template>
  <h2>أهلا بك</h2>

  <p>من فضلك أدخل البيانات التالية لإنشاء حساب جد يد</p>
  <form @submit.prevent="submitForm">
    <div class="floating-label">
      <input
        class="floating-input"
        type="text"
        placeholder=""
        name="FullName"
        id="FullName"
        v-model="userName"
        required
      />
      <span class="input-highlight"></span>
      <label id="FullName">
        {{ $t("form.userName") }}
      </label>
    </div>
    <!--  userName -->
    <div class="floating-label">
      <input
        class="floating-input"
        type="email"
        placeholder=""
        name="email"
        id="email"
        v-model="email"
        required
      />
      <span class="input-highlight"></span>
      <label id="email">
        {{ $t("form.email") }}
      </label>
    </div>
    <!-- emil -->
    <div class="floating-label">
      <input
        class="floating-input"
        type="phone"
        placeholder=""
        name="phone"
        id="phone"
        v-model="phone"
        required
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
        required
      />
      <span class="input-highlight"></span>
      <label id="password"> 
        {{ $t("form.password") }}
      </label>
    </div>
    <!-- password -->
    <div class="floating-label">
      <input
        class="floating-input"
        type="password"
        placeholder=""
        name="confirmpassword"
        id="confirmpassword"
        v-model="confirmpassword"
        required
      />
      <span class="input-highlight"></span>
      <label id="confirmpassword"> 
        {{ $t("form.cpassword") }}
      </label>
    </div>
    <button type="submit" class="send">
      {{ $t("buttons.signUp") }}
    </button>
  </form>
  <div class="footer_auth d-flex mt-3">
    <router-link to="/:auth/singIn">
      <p>لد يك حساب بالفعل ؟</p>
    </router-link>
    <router-link to="/:auth/singIn" class="singIn">
      {{ $t("buttons.signIn") }}
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: null,
      email: null,
      phone: null,
      password: null,
      confirmpassword: null,
    
    };
  },
  methods: {
    submitForm() {
      // this.$router.push("/:auth/activateAccount/verifyToSignUp");
      // console.log("استغفر الله العظيم");
      const myData = new FormData();
      myData.append("user_name", this.userName);
      myData.append("email", this.email);
      myData.append("phone", this.phone);
      myData.append("password", this.password);
      myData.append("password_confirmation", this.confirmpassword);
      this.axios({
        method: "POST",
        url: "client-register",
        data: myData,
      })
        .then((response) => {
          console.log(response);
          this.$router.push("/:auth/activateAccount/verifyToSignUp");
          this.$toast.success(`    لسه شوية ونوصل `);
          localStorage.setItem("phone", this.phone);
          // localStorage.setItem("register",this.myPath);
        })
        .catch((error) => {
          console.log(error.response.data.msg);
          this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>

<!-- const a = 5;
a > 5 ?  this.$router.push("/"): this.$router.push("/:auth/activateAccount")  ; 
this.$route.params.auth =  this.myPath ;
console.log(this.myPath); -->
<!-- {{ $route.params.type }}
      {{ $route.params.name }}
      {{ $route.params.test }} -->