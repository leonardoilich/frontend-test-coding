import Api from "../../apis/Api";
import Key from "../../apis/Key";

const state={
    tracks: [],
    track: null,
};

const getters={
    contador(state){
        return state.tracks.length;
    }
};

const actions={
    TrackGetInfo({commit},{artist,track}){
        Api.get(`?method=track.getInfo&artist=${artist}&track=${track}${Key}`).then(response => {
            commit('SET_PRODUCTS', response.data);
        })
    },
    TrackGetTags({commit},{artist,track}){
        Api.get(`?method=track.getTags&artist=${artist}&track=${track}&user=RJ${Key}`).then(response => {
            commit('SET_PRODUCTS', response.data);
        })
    },
    TrackGetSimilar({commit},{artist,track}){
        Api.get(`?method=track.getsimilar&artist=${artist}&track=${track}${Key}`).then(response => {
            commit('SET_PRODUCTS', response.data);
        })
    },
    TrackGetTopTags({commit},{artist,track}){
        Api.get(`?method=track.gettoptags&artist=${artist}&track=${track}${Key}`).then(response => {
            commit('SET_PRODUCTS', response.data);
        })
    },
    TrackSearch({commit},track){
        Api.get(`?method=track.search&track=${track}${Key}`).then(response => {
            commit('SET_PRODUCTS', response.data);
        })
    },
};

const mutations={
    SET_TRACKS (state, tracks) {
        state.tracks =tracks;
    },
    SET_TRACK (state, track) {
        state.track = track;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}