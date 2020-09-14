import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
import Api from "./api";
import createPersistedState from "vuex-persistedstate";

// import router from "../router/index";

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    getPhotosList(state, payload) {
      state.photos = payload;
    },
    // setDetailPhotos(state, payload) {
    //   state.detailUser = payload.data;
    // },
  },
  actions: {
    //action untuk asyncronus
    async loadCities() {
      // const {data} = await Axios
    },
    async getPhotos({ commit }) {
      const { data } = await Api.get('/photos')
      commit("getPhotosList", data);
    },
    // async getDetailPhotos({ commit }, id) {
    //   // console.log({ detailuser: id });
    //   try {
    //     const { data } = await Api.get(`/user/${id}`);
    //     // console.log(data);
    //     commit("setDetailPhotos", data);
    //   } catch (error) {
    //     console.log({ error: error.message });
    //   }
    // },
  },
  getters: {
    // untuk memanipulasi data state
    // eventUser(state) {},
    // oddUser(state) {},
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
