import Vue from 'vue';
import Vuex from "vuex";
import album from "./modules/album.js";
import artist from "./modules/artist";
import track from "./modules/track";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        album,
        artist,
        track,
        user
    }
});