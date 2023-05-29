import Vue from 'vue'
import Vuex from 'vuex';
const resource = 'http://127.0.0.1:8001'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      dialogVisible: false,
      listBannerVisible: false
    },

    mutations: {
      showDialog(state) {
        state.dialogVisible = true;
      },

      hideDialog(state) {
        state.dialogVisible = false;
      },

      showListBanner(state){
        state.listBannerVisible = true
      },

      hideListBanner(state) {
        state.listBannerVisible = false
      },


    },

    actions: {
      showDialog(context) {
        context.commit('showDialog');
      },

      hideDialog(context) {
        context.commit('hideDialog');
      },

      showListBanner(context) {
        context.commit('showListBanner');
      },

      hideListBanner(context) {
        context.commit('hideListBanner');
      },

      async apiBannerList() {
        try {
          let { data } = await this.$axios.get(`${resource}/getBannerList/`);
          return data;

        } catch (error) {
          console.log(error);
          throw new TypeError(error);
        }
      },

      async apiGetAllEvent() {
        try {
          let { data } = await this.$axios.get(`${resource}/GetAllEvent/`)
          // console.log('data: ', data);
          return data;
        } catch (error) {
          console.log(error);
          throw new TypeError(error)
        }
      },

      async apiInsertEvent(){
        try{
            let {data} = await this.$axios.post(`${resource}/InsertEvent/`)
            // console.log('data: ', data);
            return data;
        } catch (error){
            console.log(error);
            throw new TypeError(error)
        }
    }
    }

  });
};

export default createStore;
