import Api from "../../apis/Api";
import Key from "../../apis/Key";

const state={
    albums: [],
    album: null,
};

const getters={
    contador(state){
        return state.albums.length;
    }
};

const actions={
    AlbumGetInfo({commit}, { artist, album }){
        Api.get(`?method=album.getinfo&artist=${artist}&album=${album}${Key}`).then(response => {
            commit('SET_ALBUMS', response.data);
        })
    },
    //no funciona problamente sea el api
    AlbumGetTags({commit},{artist,album}){
        Api.get(`?method=album.gettags&artist=${artist}&album=${album}${Key}`).then(response => {
            commit('SET_ALBUMS', response.data);
        })
    },
    AlbumGetTopTags({commit},{artist,album}){
        Api.get(`?method=album.gettoptags&artist=${artist}&album=${album}${Key}`).then(response => {
            commit('SET_ALBUMS', response.data);
        })
    },
    AlbumSearch({commit},{album}){
        Api.get(`?method=album.search&album=${album}${Key}`).then(response => {
            commit('SET_ALBUMS', response.data);
        })
    },
};

const mutations={
    SET_ALBUMS (state, albums) {
        state.albums =albums;
    },
    SET_ALBUM (state, album) {
        state.album = album;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}