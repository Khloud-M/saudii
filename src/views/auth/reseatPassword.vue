<template>
  <h2>كلمة المرور الجد يدة</h2>
  <p>من فضلك أدخل كلمة المرور الجديدة</p>
  <form @submit.prevent="submitForm">
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

    <button type="submit" class="send">{{ $t("buttons.submit") }}</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      password: null,
      confirmpassword: null,
    };
  },
  methods: {
    submitForm() {
      const myData = new FormData();
      myData.append("password", this.password);
      this.axios({
        method: "POST",
        url: "reset_password",
        data: myData,
      })
        .then((response) => {
          console.log(response);
          this.$router.push("/:auth/singIn");
          this.$toast.success(`    حمدالله ع السلامة وصلت `);
        })

        .catch((error) => {
          console.log(error.response.data.msg);
          this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>