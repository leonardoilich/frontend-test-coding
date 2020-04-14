import Api from "../../apis/Api";
import Key from "../../apis/Key";

const state={
    artists: [],
    artist: null,
};

const getters={
    contador(state){
        return state.artists.length;
    }
};

const actions={
    ArtistGetInfo({commit},artist){
        Api.get(`?method=artist.getinfo&artist=${artist}${Key}`).then(response => {
            commit('SET_ARTISTS', response.data);
        })
    },
    ArtistGetSimilar({commit},artist){
        Api.get(`?method=artist.getsimilar&artist=${artist}${Key}`).then(response => {
            commit('SET_ARTISTS', response.data);
        })
    },
    ArtistGetTags({commit},artist){
        Api.get(`?method=artist.getTags&artist=${artist}&user=RJ${Key}`).then(response => {
            commit('SET_ARTISTS', response.data);
        })
    },
    ArtistGetTopTags({commit},artist){
        Api.get(`?method=artist.gettoptags&artist=${artist}${Key}`).then(response => {
            commit('SET_ARTISTS', response.data);
        })
    },
    ArtistGetTopTracks({commit},artist){
        Api.get(`?method=artist.gettoptracks&artist=${artist}${Key}`).then(response => {
            commit('SET_ARTISTS', response.data);
        })
    },
    ArtistGetTopAlbums({commit},artist){
        Api.get(`?method=artist.gettopalbums&artist=${artist}${Key}`).then(response => {
            commit('SET_ARTISTS', response.data);
        })
    },
    ArtistSearch({commit},artist){
        Api.get(`?method=artist.search&artist=${artist}${Key}`).then(response => {
            commit('SET_ARTISTS', response.data);
        })
    },
};

const mutations={
    SET_ARTISTS (state, artists) {
        state.artists =artists;
    },
    SET_ARTIST (state, artist) {
        state.artist = artist;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}