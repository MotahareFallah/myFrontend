import { createStore } from 'vuex'

export default createStore({
  state: {
    isAthenticated: false,
    token:""
  },
  getters: {
  },
  mutations: {
    onStart(state){
      let token = localStorage.getItem("token")
      if(token){
        state.isAthenticated= true;
        state.token=token;
      }else{
        state.isAthenticated= false;
        state.token="";

      }
    },
    login(state,token){
      if(token){
        state.isAthenticated= true;
        state.token=token;
        localStorage.setItem("token",token);
      }else{
        state.isAthenticated= false;
        state.token="";
        localStorage.removeItem("token");

      }
    },
    logout(state){
      state.isAthenticated= false;
      state.token="";
      localStorage.removeItem("token");
    }
  },
  actions: {
  },
  modules: {
  }
})
