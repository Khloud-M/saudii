import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/indexT.vue";
import about from "@/views/theAbout.vue";
import offers from "@/views/theOffers.vue";
import compition from "@/views/theCompetion.vue";
import contact from "@/views/theContact.vue";
// subPage
import addNew from "@/views/Subpages/addNew.vue";
import Sales from "@/views/Subpages/heighest_sales.vue";
import rates from "@/views/Subpages/highest_rated.vue";
import itemDetails from "@/views/Subpages/itemDetails.vue";
import filterComp from "@/views/Subpages/filterComp.vue";
import searchPage from "@/components/searchPage.vue"
// userAccount Page
import editAcc from "@/views/userporfile/editAcc.vue";
import adressAcc from "@/views/userporfile/adressAcc.vue";
import enterAdress from "@/views/userporfile/enterAdress.vue";
// footer Page
import theHelp from "@/views/footer/theHelp.vue";
import thePrivacy from "@/views/footer/thePrivacy.vue";
import common from "@/views/footer/commonQuestions.vue";

// auth page
import register from "@/views/auth/regesterPage.vue";
import singIn from "@/views/auth/singIn.vue";
import forgetPassword from "@/views/auth/forgetPassword.vue";
import registerHome from "@/views/auth/registerHome.vue";
import activateAccount from "@/views/auth/activateAccount.vue";
import reseatPassword from "@/views/auth/reseatPassword.vue";
// cart item 
import detailsOrder from "@/components/home/cart/detailsOrder.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: home },
    { path: "/about", component: about },
    { path: "/offers", component: offers },
    { path: "/compition", component: compition },
    { path: "/contact", component: contact },
    // subPage
    { path: "/addNew", component: addNew },
    { path: "/Sales", component: Sales },
    { path: "/rate", component: rates },
    {path:"/filter", component:filterComp},
    { path: "/item/:id", component: itemDetails, props: true },
    {path:"/searchPage", component:searchPage},

    // userAccount Page
    { path: "/editAcc", component: editAcc },
    { path: "/adressAcc", component: adressAcc  ,children:[
     { path: "", component: () => import("@/views/userporfile/AccTest.vue")},
      { path: "enterAdress", component: enterAdress },
    ]},
   

    // footer Page
    { path: "/Help", component: theHelp },
    { path: "/privacy", component: thePrivacy },
    { path: "/common", component: common },
    // cartItem
    { path: "/detailsOrder", component: detailsOrder },
    //auth page
    {
      path: "/:auth",
      component: registerHome,
      props: true,
      children: [
        { path: "", component: () => import("@/views/auth/testAuth.vue") },
        { path: "register", component: register },
        { path: "singIn", component: singIn },
        { path: "forget", component: forgetPassword },
        { path: "activateAccount/:type", component: activateAccount },
        { path: "reseatPassword", component: reseatPassword },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },

  linkActiveClass: "active",
});

export default router;
