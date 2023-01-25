export default {
    namespaced: true,
    state:{
      pageLoading: false,
      userToken : localStorage.getItem("saui-app-user-token") ||'',
      userEmail : localStorage.getItem("saui-app-user-email")||'',
      userName :  localStorage.getItem("saui-app-user-name")||'',
      phone:localStorage.getItem("saui-app-user-phone")||'',
    },
    mutations:{
      pageLoading(state, payload) {
        state.pageLoading = payload
      },
      // start :: set cuent user data mutation
      setCurrentUserData(state ,payload){
        console.log(payload)
        if(payload.token){
        state.userToken=payload.token;
        localStorage.setItem("saui-app-user-token" , payload.token.access_token);
  
        }
        if(payload.name){
          state.userName=payload.name;
          localStorage.setItem("saui-app-user-name" , payload.name);
          } 
          if(payload.email){
            state.userName=payload.email;
            localStorage.setItem("saui-app-user-email" , payload.email);
      
            }
            if(payload.phone){
              state.userName=payload.phone;
              localStorage.setItem("saui-app-user-phone" , payload.phone);
        
              }
      }, 
      logout(state){
        state.userToken= null ;
        state.userEmail= null ;
        state.userName= null ;
      },
},
actions(){},
getters:{
  pageLoading(state) {
    return state.pageLoading
  },
  isLoggedIn(state){
    return !!state.userToken
  },
  // start :: cuurrent  user data Getters
  currentUser(state){
    return{
      token:state.userToken,
      email:state.userEmail,
      userName:state.userName,
      phone:state.phone,
    }
  },
 
},
}