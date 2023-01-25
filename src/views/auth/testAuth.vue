<template>
   <section>
      <h2>أهلا بك</h2>
      <p>سجل الان و تمتع بمميزات و تجربة فريدة من نوعها</p>
          <button type="submit" class="send">
            <router-link to="/:auth/register"> {{ $t("buttons.signUp") }}  </router-link>
          </button> 

        
       

      <div class="footer_auth d-flex mt-3">
        <router-link to="/:auth/singIn">
          <p>لد يك حساب بالفعل ؟</p>
        </router-link>
        <router-link to="/:auth/singIn" class="singIn">
          {{ $t("buttons.signIn") }}
        </router-link>
      </div>
   </section>
</template>