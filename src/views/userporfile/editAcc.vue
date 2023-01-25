<template>
  <section class="edit_Acc">
    <landing-page />
    <div class="container my-5">
      <div class="edit">
        <div class="name">
          <h3>تعد يل الحساب</h3>
        </div>
        <div class="image">
          <input type="file"
          @change="changeImage($event)" />
          <img :src="uploadeImage"  class="img-fluid"/>

        </div>
      </div>
      <!-- edit -->
      <div class="my_Data my-5">
        <form action="">
            <div class="floating-label">
            <input
              class="floating-input"
              type="text"
              placeholder=""
              name="FullName"
              id="FullName"
            />
            <span class="input-highlight"></span>
            <label id="FullName"> 
              {{ $t("form.fullName") }}

            </label>
          </div>
          <div class="floating-label">
            <input
              class="floating-input"
              type="text"
              placeholder=""
              name="userName"
              id="userName"
            />
            <span class="input-highlight"></span>
            <label id="userName">
              {{ $t("form.userName") }}
 

            </label>
          </div>
          <!-- uder name -->
          <div class="floating-label">
            <input
              class="floating-input"
              type="email"
              placeholder=""
              name="email"
              id="email"
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
            />
            <span class="input-highlight"></span>
            <label id="phone"> 
              {{ $t("form.phone") }} 
            </label>
          </div>
        </form>
      </div> <!-- my_data-->
      <div class="edit_Password" >
        <h3> تعد يل كلمة المرور </h3>
        <form action="">
            <form action="">
                <div class="floating-label">
            <input
              class="floating-input"
              type="password"
              placeholder=""
              name="currentpassword"
              id="currentpassword"
            />
            <span class="input-highlight"></span>
            <label id="currentpassword">   
              {{ $t("form.CurrentPassword") }}
              </label>
          </div>
          <div class="floating-label">
            <input
              class="floating-input"
              type="password"
              placeholder=""
              name="password"
              id="password"
            />
            <span class="input-highlight"></span>
            <label id="password"> 
              {{ $t("form.password") }}
            </label>
          </div>
          <div class="floating-label">
            <input
              class="floating-input"
              type="password"
              placeholder=""
              name="confirmpassword"
              id="confirmpassword"
            />
            <span class="input-highlight"></span>
            <label id="confirmpassword"> 
              {{ $t("form.cpassword") }}
            </label>
          </div>
          <button type="submit" class="send">
              {{ $t("form.save") }}
               
            </button>
        </form>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      uploadeImage:[],
    }
  },
  methods:{
    changeImage(e){
      // this.uploadeImage=e.target.files;
      console.log(e.target.value);

    }
  }
}
</script>
<style lang="scss" scoped>
.edit_Acc{
  overflow: hidden;
}
.edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image {
  margin: 20px 0;
  position: relative;
  z-index: 1;
  border: 0.5px solid var(--border_clr);
  width: 250px;
  height: 250px;

  .icon {
    position: absolute;
    z-index: 2;
    bottom: -10px;
    left: 40%;
  }
}
.edit_Password{
    h3{
        margin: 30px 0;
    }
    button {
        margin: 30px 0;
    }
}
</style>